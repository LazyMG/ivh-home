import "i18next";
import type iMOVAKo from "../locales/ko/product/iMOVA/iMOVA.json";
import type humanoidKo from "../locales/ko/product/iMOVA/humanoidPackage.json";
import type ceoKo from "../locales/ko/company/ceo.json";
import type contactKo from "../locales/ko/company/contact.json";
import type historyKo from "../locales/ko/company/history.json";
import type partnerKo from "../locales/ko/company/partner.json";
import type philosophyKo from "../locales/ko/solution/philosophy.json";
import type modelicaKo from "../locales/ko/solution/modelica.json";
import type asamKo from "../locales/ko/solution/asam.json";
import type physicalAiKo from "../locales/ko/solution/physical-ai.json";
import type engineeringToIndustryKo from "../locales/ko/solution/engineering-to-industry.json";
import type futureDirectionsKo from "../locales/ko/solution/future-directions.json";

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
      "solution/philosophy": typeof philosophyKo;
      "solution/modelica": typeof modelicaKo;
      "solution/asam": typeof asamKo;
      "solution/physical-ai": typeof physicalAiKo;
      "solution/engineering-to-industry": typeof engineeringToIndustryKo;
      "solution/future-directions": typeof futureDirectionsKo;
    };
  }
}
