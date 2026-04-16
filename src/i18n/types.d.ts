import "i18next";
import type iMOVAKo from "../locales/ko/product/iMOVA/iMOVA.json";
import type humanoidKo from "../locales/ko/product/iMOVA/humanoidPackage.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "product/iMOVA";
    resources: {
      "product/iMOVA": typeof iMOVAKo;
      "product/humanoidPackage": typeof humanoidKo;
    };
  }
}
