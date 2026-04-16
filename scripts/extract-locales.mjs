/**
 * extract-locales.mjs
 *
 * {ko, en} 래핑된 JSON → 리소스 + ko 로케일 + en 로케일 분리 스크립트
 *
 * Usage:
 *   node scripts/extract-locales.mjs src/data/product/iMOVA.json
 *   node scripts/extract-locales.mjs src/data/product/humanoidPackage.json
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";

// ── helpers ──────────────────────────────────────────────────────────────────

const isPlainObject = (v) =>
  v !== null && typeof v === "object" && !Array.isArray(v);

/** 빈 객체/배열을 재귀적으로 제거 */
function pruneEmpty(node) {
  if (Array.isArray(node)) {
    const pruned = node.map(pruneEmpty).filter((v) => v !== undefined);
    return pruned.length === 0 ? undefined : pruned;
  }
  if (isPlainObject(node)) {
    const out = {};
    for (const [k, v] of Object.entries(node)) {
      const pruned = pruneEmpty(v);
      if (pruned !== undefined) out[k] = pruned;
    }
    return Object.keys(out).length === 0 ? undefined : out;
  }
  return node;
}

// ── 규칙 판별 ────────────────────────────────────────────────────────────────

function classifyNode(node) {
  if (Array.isArray(node)) return "R4";
  if (!isPlainObject(node)) return "R6";

  const keys = Object.keys(node);

  // R1: 정확히 {ko, en} 2개
  if (keys.length === 2 && keys.includes("ko") && keys.includes("en")) {
    return "R1";
  }

  const hasSegments = keys.includes("segments");
  const hasEn = keys.includes("en");
  const hasKo = keys.includes("ko");

  // R2: segments + en, ko 없음, 다른 키 없음
  if (hasSegments && hasEn && !hasKo && keys.length === 2) {
    return "R2";
  }

  // R3: segments + en + 기타 키 (ko 없음)
  if (hasSegments && hasEn && !hasKo && keys.length > 2) {
    return "R3";
  }

  // R5: 일반 객체 (재귀)
  return "R5";
}

// ── 변환 로직 ────────────────────────────────────────────────────────────────

/**
 * @returns {{ resource: any, ko: any, en: any }}
 * resource/ko/en 중 해당 없으면 undefined
 */
function transform(node, path = "") {
  const rule = classifyNode(node);

  switch (rule) {
    case "R1": {
      // 리소스: 제거, ko/en: 그대로 저장 (string이든 object든)
      return { resource: undefined, ko: node.ko, en: node.en };
    }

    case "R2": {
      // 리소스: 제거, ko: {segments: ...}, en: node.en
      return {
        resource: undefined,
        ko: { segments: node.segments },
        en: node.en,
      };
    }

    case "R3": {
      // 리소스: segments/en 제외한 나머지만 유지
      const resObj = {};
      for (const [k, v] of Object.entries(node)) {
        if (k !== "segments" && k !== "en") resObj[k] = v;
      }
      return {
        resource: Object.keys(resObj).length > 0 ? resObj : undefined,
        ko: { segments: node.segments },
        en: node.en,
      };
    }

    case "R4": {
      // 배열: 각 항목에 id 추가, 로케일은 id 기반 객체 맵으로 변환
      const resArr = [];
      const koMap = {};
      const enMap = {};

      node.forEach((item, idx) => {
        const id = `item-${idx}`;

        if (!isPlainObject(item)) {
          // 스칼라 배열 항목은 리소스에 그대로 유지
          resArr.push(item);
          return;
        }

        // 항목 자체가 R1/R2/R3 패턴인지 먼저 확인
        const itemRule = classifyNode(item);

        if (itemRule === "R1" || itemRule === "R2" || itemRule === "R3") {
          const child = transform(item, `${path}.${id}`);
          // resource가 있으면 id와 병합, 없으면 id만
          if (child.resource !== undefined && isPlainObject(child.resource)) {
            resArr.push({ id, ...child.resource });
          } else {
            resArr.push({ id });
          }
          if (child.ko !== undefined) koMap[id] = child.ko;
          if (child.en !== undefined) enMap[id] = child.en;
        } else {
          // R5/R6: 각 키를 개별 처리
          const resItem = { id };
          const koItem = {};
          const enItem = {};

          for (const [k, v] of Object.entries(item)) {
            const child = transform(v, `${path}.${id}.${k}`);

            if (child.resource !== undefined) resItem[k] = child.resource;
            if (child.ko !== undefined) koItem[k] = child.ko;
            if (child.en !== undefined) enItem[k] = child.en;
          }

          resArr.push(resItem);
          if (Object.keys(koItem).length > 0) koMap[id] = koItem;
          if (Object.keys(enItem).length > 0) enMap[id] = enItem;
        }
      });

      return {
        resource: resArr,
        ko: Object.keys(koMap).length > 0 ? koMap : undefined,
        en: Object.keys(enMap).length > 0 ? enMap : undefined,
      };
    }

    case "R5": {
      // 일반 객체: 재귀
      const resObj = {};
      const koObj = {};
      const enObj = {};

      for (const [k, v] of Object.entries(node)) {
        const child = transform(v, `${path}.${k}`);

        if (child.resource !== undefined) resObj[k] = child.resource;
        if (child.ko !== undefined) koObj[k] = child.ko;
        if (child.en !== undefined) enObj[k] = child.en;
      }

      return {
        resource: Object.keys(resObj).length > 0 ? resObj : undefined,
        ko: Object.keys(koObj).length > 0 ? koObj : undefined,
        en: Object.keys(enObj).length > 0 ? enObj : undefined,
      };
    }

    case "R6": {
      // 스칼라: 리소스에 유지, 로케일에 포함 안 함
      return { resource: node, ko: undefined, en: undefined };
    }
  }
}

// ── 중복 ID 검증 ─────────────────────────────────────────────────────────────

function checkDuplicateIds(obj, path = "", errors = []) {
  if (isPlainObject(obj)) {
    for (const [k, v] of Object.entries(obj)) {
      checkDuplicateIds(v, `${path}.${k}`, errors);
    }
  } else if (Array.isArray(obj)) {
    const ids = obj.filter(isPlainObject).map((item) => item.id).filter(Boolean);
    const seen = new Set();
    for (const id of ids) {
      if (seen.has(id)) {
        errors.push(`Duplicate id "${id}" at ${path}`);
      }
      seen.add(id);
    }
    obj.forEach((item, i) => checkDuplicateIds(item, `${path}[${i}]`, errors));
  }
  return errors;
}

// ── main ─────────────────────────────────────────────────────────────────────

const inputPath = process.argv[2];
if (!inputPath) {
  console.error("Usage: node scripts/extract-locales.mjs <path-to-json>");
  process.exit(1);
}

const absInput = resolve(inputPath);
const raw = JSON.parse(readFileSync(absInput, "utf-8"));
const name = basename(absInput, ".json"); // e.g. "iMOVA"

const { resource, ko, en } = transform(raw);

// 빈 객체/배열 정리
const prunedResource = pruneEmpty(resource) ?? {};

// 중복 ID 검증
const dupes = checkDuplicateIds(prunedResource);
if (dupes.length > 0) {
  console.warn("⚠ Duplicate IDs detected in resource:");
  dupes.forEach((d) => console.warn("  " + d));
}

// 출력 경로 결정
const projectRoot = resolve(dirname(absInput), "../..");
const koDir = join(projectRoot, "locales", "ko");
const enDir = join(projectRoot, "locales", "en");

mkdirSync(koDir, { recursive: true });
mkdirSync(enDir, { recursive: true });

// 파일 쓰기
const write = (path, data) => {
  writeFileSync(path, JSON.stringify(data, null, 2) + "\n", "utf-8");
  console.log(`  ✓ ${path}`);
};

console.log(`\n[${name}] Extracting locales...`);
write(absInput, prunedResource);
write(join(koDir, `${name}.json`), ko ?? {});
write(join(enDir, `${name}.json`), en ?? {});

console.log("  Done.\n");
