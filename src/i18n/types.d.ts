import "i18next";
import type iMOVAKo from "../locales/ko/product/iMOVA/iMOVA.json";
import type humanoidKo from "../locales/ko/product/iMOVA/humanoidPackage.json";
import type ceoKo from "../locales/ko/company/ceo.json";
import type contactKo from "../locales/ko/company/contact.json";
import type historyKo from "../locales/ko/company/history.json";
import type partnerKo from "../locales/ko/company/partner.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "product/iMOVA";
    resources: {
      "product/iMOVA": typeof iMOVAKo;
      "product/humanoidPackage": typeof humanoidKo;
      "company/ceo": typeof ceoKo;
      "company/contact": typeof contactKo;
      "company/history": typeof historyKo;
      "company/partner": typeof partnerKo;
    };
  }
}
