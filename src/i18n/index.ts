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
    },
    en: {
      "product/iMOVA": iMOVAEn,
      "product/humanoidPackage": humanoidEn,
      "company/ceo": ceoEn,
      "company/contact": contactEn,
      "company/history": historyEn,
      "company/partner": partnerEn,
    },
  },
  interpolation: { escapeValue: false },
});

export default i18n;
