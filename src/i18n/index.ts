import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import type { BackendModule, ReadCallback } from "i18next";

// 초기 로드에 반드시 필요한 네임스페이스(홈/레이아웃)만 정적 번들.
// 나머지는 아래 backend가 라우트 진입 시 동적 import 한다.
import homeKo from "../locales/ko/home/home.json";
import homeEn from "../locales/en/home/home.json";
import footerKo from "../locales/ko/footer/footer.json";
import footerEn from "../locales/en/footer/footer.json";

// 네임스페이스 → 로케일 폴더 기준 파일 경로(확장자 제외).
// ns 이름과 실제 파일명이 다른 경우(예: "product/dymola/cooling" → "cooling-library")를 매핑한다.
const NS_FILE: Record<string, string> = {
  home: "home/home",
  footer: "footer/footer",
  "support/training": "support/training",
  "support/support": "support/support",
  "product/iMOVA": "product/iMOVA/iMOVA",
  "product/humanoidPackage": "product/iMOVA/humanoidPackage",
  "product/iSuite": "product/iSuite/iSuite",
  "company/ceo": "company/ceo",
  "company/contact": "company/contact",
  "company/history": "company/history",
  "company/partner": "company/partner",
  "product/dymola": "product/dymola/dymola",
  "product/dymola/battery": "product/dymola/battery",
  "product/dymola/til": "product/dymola/til",
  "product/dymola/cooling": "product/dymola/cooling-library",
  "product/dymola/brushless": "product/dymola/brushless-DC-drives-library",
  "product/dymola/electrified": "product/dymola/electrified-powertrains-library",
  "product/dymola/flexible": "product/dymola/flexible-bodies",
  "product/dymola/hydrogen": "product/dymola/hydrogen-library",
  "product/dymola/sustainable":
    "product/dymola/sustainable-supply-systems-library",
  "product/dymola/vesyma": "product/dymola/vesyma-library",
  "product/dymola/vesyma-powertrain": "product/dymola/vesyma-powertrain-library",
  "product/dymola/vesyma-suspension":
    "product/dymola/vesyma-suspension-library",
  "product/dymola/binary": "product/dymola/binary-model-export",
  "product/modelon": "product/modelon/modelon",
  "product/modelon/vehicle": "product/modelon/vehicle-dynamics-library",
  "product/modelon/air-cooling": "product/modelon/air-cooling-library",
  "product/modelon/aircraft": "product/modelon/aircraft-dynamics-library",
  "product/modelon/electrification": "product/modelon/electrification-library",
  "product/modelon/environmental": "product/modelon/environmental-control-library",
  "product/modelon/fuel-cell": "product/modelon/fuel-cell-library",
  "product/modelon/fuel-system": "product/modelon/fuel-system-library",
  "product/modelon/heat-exchanger": "product/modelon/heat-exchanger-library",
  "product/modelon/hydraulics": "product/modelon/hydraulics-library",
  "product/modelon/jet-propulsion": "product/modelon/jet-propulsion-library",
  "product/modelon/liquid-cooling": "product/modelon/liquid-cooling-library",
  "product/modelon/base": "product/modelon/modelon-base-library",
  "product/modelon/thermal": "product/modelon/thermal-power-library",
  "product/modelon/vapor": "product/modelon/vapor-cycle-library",
  "product/ptv": "product/ptv/ptv",
  "product/ptv/vissim": "product/ptv/vissim",
  "product/ptv/vissim-automotive": "product/ptv/vissim-automotive",
  "product/ptv/viswalk": "product/ptv/viswalk",
  "product/vtd": "product/vtd/vtd",
  "product/vtd/vtdcreate": "product/vtd/vtd-create",
  "product/vtd/vtdsimulate": "product/vtd/vtd-simulate",
  "product/vtd/vtdfullstack": "product/vtd/vtd-fullstack",
  "product/product-form": "product/product-form",
  "solution/philosophy": "solution/philosophy",
  "solution/modelica": "solution/modelica",
  "solution/asam": "solution/asam",
  "solution/physical-ai": "solution/physical-ai",
  "solution/engineering-to-industry": "solution/engineering-to-industry",
  "solution/future-directions": "solution/future-directions",
};

// Vite가 모든 로케일 JSON을 개별 동적 청크로 분리(라우트 진입 시 fetch).
// home/footer는 위에서 정적 번들하므로 제외(중복 청크·경고 방지).
const loaders = import.meta.glob<{ default: Record<string, unknown> }>([
  "../locales/**/*.json",
  "!../locales/**/home/home.json",
  "!../locales/**/footer/footer.json",
]);

// i18next backend: (언어, 네임스페이스) → 해당 JSON을 동적 import.
const lazyBackend: BackendModule = {
  type: "backend",
  init: () => {},
  read: (language: string, namespace: string, callback: ReadCallback) => {
    const file = NS_FILE[namespace];
    if (!file) {
      callback(null, {});
      return;
    }
    const key = `../locales/${language}/${file}.json`;
    const loader = loaders[key];
    if (!loader) {
      callback(null, {});
      return;
    }
    loader()
      .then((mod) => callback(null, mod.default))
      .catch((err) => callback(err as Error, false));
  },
};

i18n
  .use(lazyBackend)
  .use(initReactI18next)
  .init({
    lng: "ko",
    fallbackLng: "ko",
    // 초기엔 홈/푸터만. 나머지는 useTranslation(ns) 호출 시 backend가 로드.
    ns: ["home", "footer"],
    defaultNS: "home",
    // 정적 resources(부분 번들) + backend(나머지) 혼용 허용
    partialBundledLanguages: true,
    resources: {
      ko: { home: homeKo, footer: footerKo },
      en: { home: homeEn, footer: footerEn },
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
