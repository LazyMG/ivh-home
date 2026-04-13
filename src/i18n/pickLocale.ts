import type { Lang } from "./useLang";

const isLocaleLeaf = (node: unknown): node is { ko: unknown; en: unknown } => {
  if (node === null || typeof node !== "object") return false;
  const keys = Object.keys(node as object);
  return keys.length === 2 && "ko" in node && "en" in node;
};

export function pickLocale<T = unknown>(node: unknown, lang: Lang): T {
  if (node === null || node === undefined) return node as T;
  if (isLocaleLeaf(node)) return (node as Record<Lang, unknown>)[lang] as T;
  if (Array.isArray(node)) {
    return node.map((n) => pickLocale(n, lang)) as unknown as T;
  }
  if (typeof node === "object") {
    const result: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
      result[k] = pickLocale(v, lang);
    }
    return result as T;
  }
  return node as T;
}
