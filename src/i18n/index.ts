import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import iMOVAKo from "../locales/ko/product/iMOVA/iMOVA.json";
import iMOVAEn from "../locales/en/product/iMOVA/iMOVA.json";
import humanoidKo from "../locales/ko/product/iMOVA/humanoidPackage.json";
import humanoidEn from "../locales/en/product/iMOVA/humanoidPackage.json";
import ceoKo from "../locales/ko/company/ceo.json";
import ceoEn from "../locales/en/company/ceo.json";
import contactKo from "../locales/ko/company/contact.json";
import contactEn from "../locales/en/company/contact.json";
import historyKo from "../locales/ko/company/history.json";
import historyEn from "../locales/en/company/history.json";
import partnerKo from "../locales/ko/company/partner.json";
import partnerEn from "../locales/en/company/partner.json";

// dymola
import dymolaKo from "../locales/ko/product/dymola/dymola.json";
import dymolaEn from "../locales/en/product/dymola/dymola.json";
import batteryKo from "../locales/ko/product/dymola/battery.json";
import batteryEn from "../locales/en/product/dymola/battery.json";
import tilKo from "../locales/ko/product/dymola/til.json";
import tilEn from "../locales/en/product/dymola/til.json";
import coolingKo from "../locales/ko/product/dymola/cooling-library.json";
import coolingEn from "../locales/en/product/dymola/cooling-library.json";
import brushlessKo from "../locales/ko/product/dymola/brushless-DC-drives-library.json";
import brushlessEn from "../locales/en/product/dymola/brushless-DC-drives-library.json";
import electrifiedKo from "../locales/ko/product/dymola/electrified-powertrains-library.json";
import electrifiedEn from "../locales/en/product/dymola/electrified-powertrains-library.json";
import flexibleKo from "../locales/ko/product/dymola/flexible-bodies.json";
import flexibleEn from "../locales/en/product/dymola/flexible-bodies.json";
import hydrogenKo from "../locales/ko/product/dymola/hydrogen-library.json";
import hydrogenEn from "../locales/en/product/dymola/hydrogen-library.json";
import sustainableKo from "../locales/ko/product/dymola/sustainable-supply-systems-library.json";
import sustainableEn from "../locales/en/product/dymola/sustainable-supply-systems-library.json";
import vesymaKo from "../locales/ko/product/dymola/vesyma-library.json";
import vesymaEn from "../locales/en/product/dymola/vesyma-library.json";
import vesymaPowertrainKo from "../locales/ko/product/dymola/vesyma-powertrain-library.json";
import vesymaPowertrainEn from "../locales/en/product/dymola/vesyma-powertrain-library.json";
import vesymaSuspensionKo from "../locales/ko/product/dymola/vesyma-suspension-library.json";
import vesymaSuspensionEn from "../locales/en/product/dymola/vesyma-suspension-library.json";
import binaryKo from "../locales/ko/product/dymola/binary-model-export.json";
import binaryEn from "../locales/en/product/dymola/binary-model-export.json";

i18n.use(initReactI18next).init({
  lng: "ko",
  fallbackLng: "ko",
  ns: [
    "product/iMOVA",
    "product/humanoidPackage",
    "company/ceo",
    "company/contact",
    "company/history",
    "company/partner",
    "product/dymola",
    "product/dymola/battery",
    "product/dymola/til",
    "product/dymola/cooling",
    "product/dymola/brushless",
    "product/dymola/electrified",
    "product/dymola/flexible",
    "product/dymola/hydrogen",
    "product/dymola/sustainable",
    "product/dymola/vesyma",
    "product/dymola/vesyma-powertrain",
    "product/dymola/vesyma-suspension",
    "product/dymola/binary",
  ],
  defaultNS: "product/iMOVA",
  resources: {
    ko: {
      "product/iMOVA": iMOVAKo,
      "product/humanoidPackage": humanoidKo,
      "company/ceo": ceoKo,
      "company/contact": contactKo,
      "company/history": historyKo,
      "company/partner": partnerKo,
      "product/dymola": dymolaKo,
      "product/dymola/battery": batteryKo,
      "product/dymola/til": tilKo,
      "product/dymola/cooling": coolingKo,
      "product/dymola/brushless": brushlessKo,
      "product/dymola/electrified": electrifiedKo,
      "product/dymola/flexible": flexibleKo,
      "product/dymola/hydrogen": hydrogenKo,
      "product/dymola/sustainable": sustainableKo,
      "product/dymola/vesyma": vesymaKo,
      "product/dymola/vesyma-powertrain": vesymaPowertrainKo,
      "product/dymola/vesyma-suspension": vesymaSuspensionKo,
      "product/dymola/binary": binaryKo,
    },
    en: {
      "product/iMOVA": iMOVAEn,
      "product/humanoidPackage": humanoidEn,
      "company/ceo": ceoEn,
      "company/contact": contactEn,
      "company/history": historyEn,
      "company/partner": partnerEn,
      "product/dymola": dymolaEn,
      "product/dymola/battery": batteryEn,
      "product/dymola/til": tilEn,
      "product/dymola/cooling": coolingEn,
      "product/dymola/brushless": brushlessEn,
      "product/dymola/electrified": electrifiedEn,
      "product/dymola/flexible": flexibleEn,
      "product/dymola/hydrogen": hydrogenEn,
      "product/dymola/sustainable": sustainableEn,
      "product/dymola/vesyma": vesymaEn,
      "product/dymola/vesyma-powertrain": vesymaPowertrainEn,
      "product/dymola/vesyma-suspension": vesymaSuspensionEn,
      "product/dymola/binary": binaryEn,
    },
  },
  interpolation: { escapeValue: false },
});

export default i18n;
