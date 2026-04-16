/**
 * rename-ids.mjs — item-N → 의미 있는 ID 일괄 치환
 *
 * 리소스 + ko + en 3파일을 동시에 치환합니다.
 * 부모 키 경로별로 매핑을 정의하여 충돌 없이 치환합니다.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");

// ── iMOVA ID 매핑 ──────────────────────────────────────────────────────

const imovaMap = {
  "main_function": {
    "item-0": "autonomy",
    "item-1": "chassis",
    "item-2": "task-dispatch",
    "item-3": "ai-monitoring",
    "item-4": "wireless-charging",
  },
  "control_system": {
    "item-0": "operation-monitoring",
    "item-1": "task-allocation",
    "item-2": "charging-control",
    "item-3": "fault-detection",
    "item-4": "ai-security",
    "item-5": "external-integration",
  },
  "production_line.production_line_list": {
    "item-0": "wireless-charging",
    "item-1": "high-load-amr",
    "item-2": "env-monitoring",
    "item-3": "unmanned-line",
    "item-4": "integrated-control",
    "item-5": "precision-docking",
  },
  "technology_spec.technology_spec_products": {
    "item-0": "imova-200",
    "item-1": "imova-500",
    "item-2": "imova-1000",
  },
};

// ── humanoidPackage ID 매핑 ──────────────────────────────────────────

const humanoidMap = {
  "business_model.items": {
    "item-0": "hardware-sourcing",
    "item-1": "core-tech",
    "item-2": "integrated-supply",
  },
  "package_composition.cards": {
    "item-0": "hardware",
    "item-1": "ai-control",
    "item-2": "digital-twin",
    "item-3": "fleet-management",
    "item-4": "why-total-package",
  },
  // Card bullets
  "package_composition.cards.hardware.bullets": {
    "item-0": "global-robots",
    "item-1": "industrial-platform",
    "item-2": "model-selection",
  },
  "package_composition.cards.ai-control.bullets": {
    "item-0": "motion-control",
    "item-1": "scenario-behavior",
    "item-2": "on-device-ai",
    "item-3": "stabilization",
  },
  "package_composition.cards.digital-twin.bullets": {
    "item-0": "twin-model",
    "item-1": "virtual-verification",
    "item-2": "mission-verification",
    "item-3": "sim2real",
  },
  "package_composition.cards.fleet-management.bullets": {
    "item-0": "remote-monitoring",
    "item-1": "mission-scheduling",
    "item-2": "multi-humanoid",
    "item-3": "system-integration",
  },
  "package_composition.cards.why-total-package.bullets": {
    "item-0": "control-stability",
    "item-1": "personnel-dependency",
    "item-2": "scenario-difficulty",
    "item-3": "multi-robot-management",
  },
  "why_ivh.items": {
    "item-0": "proven-sw-hw",
    "item-1": "zero-risk",
    "item-2": "operational-delivery",
    "item-3": "single-contact",
  },
};

// ── 치환 로직 ────────────────────────────────────────────────────────

function renameInObj(obj, pathMap, currentPath = "") {
  if (Array.isArray(obj)) {
    return obj.map((item, i) => {
      if (typeof item === "object" && item !== null && item.id) {
        const map = pathMap[currentPath];
        if (map && map[item.id]) {
          item = { ...item, id: map[item.id] };
        }
        // Recurse into the item with updated path
        const newId = item.id;
        const result = {};
        for (const [k, v] of Object.entries(item)) {
          if (k === "id") {
            result[k] = v;
          } else {
            result[k] = renameInObj(v, pathMap, `${currentPath}.${newId}.${k}`);
          }
        }
        return result;
      }
      return renameInObj(item, pathMap, currentPath);
    });
  }

  if (typeof obj === "object" && obj !== null) {
    const result = {};
    for (const [k, v] of Object.entries(obj)) {
      const childPath = currentPath ? `${currentPath}.${k}` : k;
      // Check if this key is an item-N that needs renaming
      const parentMap = pathMap[currentPath];
      if (parentMap && parentMap[k]) {
        const newKey = parentMap[k];
        result[newKey] = renameInObj(v, pathMap, `${currentPath}.${newKey}`);
      } else {
        result[k] = renameInObj(v, pathMap, childPath);
      }
    }
    return result;
  }

  return obj;
}

function processFile(filePath, pathMap) {
  const abs = resolve(root, filePath);
  const data = JSON.parse(readFileSync(abs, "utf-8"));
  const renamed = renameInObj(data, pathMap);
  writeFileSync(abs, JSON.stringify(renamed, null, 2) + "\n", "utf-8");
  console.log(`  ✓ ${filePath}`);
}

// ── 실행 ─────────────────────────────────────────────────────────────

console.log("\n[iMOVA] Renaming IDs...");
processFile("src/data/product/iMOVA.json", imovaMap);
processFile("src/locales/ko/iMOVA.json", imovaMap);
processFile("src/locales/en/iMOVA.json", imovaMap);

console.log("\n[humanoidPackage] Renaming IDs...");
processFile("src/data/product/humanoidPackage.json", humanoidMap);
processFile("src/locales/ko/humanoidPackage.json", humanoidMap);
processFile("src/locales/en/humanoidPackage.json", humanoidMap);

console.log("\nDone.\n");
