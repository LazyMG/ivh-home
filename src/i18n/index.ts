import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import iMOVAKo from "../locales/ko/product/iMOVA/iMOVA.json";
import iMOVAEn from "../locales/en/product/iMOVA/iMOVA.json";
import humanoidKo from "../locales/ko/product/iMOVA/humanoidPackage.json";
import humanoidEn from "../locales/en/product/iMOVA/humanoidPackage.json";

i18n.use(initReactI18next).init({
  lng: "ko",
  fallbackLng: "ko",
  ns: ["product/iMOVA", "product/humanoidPackage"],
  defaultNS: "product/iMOVA",
  resources: {
    ko: { "product/iMOVA": iMOVAKo, "product/humanoidPackage": humanoidKo },
    en: { "product/iMOVA": iMOVAEn, "product/humanoidPackage": humanoidEn },
  },
  interpolation: { escapeValue: false },
});

export default i18n;
