import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import iMOVAKo from "../locales/ko/product/iMOVA/iMOVA.json";
import iMOVAEn from "../locales/en/product/iMOVA/iMOVA.json";
import iSuiteKo from "../locales/ko/product/iSuite/iSuite.json";
import iSuiteEn from "../locales/en/product/iSuite/iSuite.json";
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

// home / footer
import homeKo from "../locales/ko/home/home.json";
import homeEn from "../locales/en/home/home.json";
import footerKo from "../locales/ko/footer/footer.json";
import footerEn from "../locales/en/footer/footer.json";

// support
import trainingKo from "../locales/ko/support/training.json";
import trainingEn from "../locales/en/support/training.json";
import supportKo from "../locales/ko/support/support.json";
import supportEn from "../locales/en/support/support.json";

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

// modelon
import modelonKo from "../locales/ko/product/modelon/modelon.json";
import modelonEn from "../locales/en/product/modelon/modelon.json";
import vehicleKo from "../locales/ko/product/modelon/vehicle-dynamics-library.json";
import vehicleEn from "../locales/en/product/modelon/vehicle-dynamics-library.json";
import mAirCoolingKo from "../locales/ko/product/modelon/air-cooling-library.json";
import mAirCoolingEn from "../locales/en/product/modelon/air-cooling-library.json";
import aircraftKo from "../locales/ko/product/modelon/aircraft-dynamics-library.json";
import aircraftEn from "../locales/en/product/modelon/aircraft-dynamics-library.json";
import mElectrificationKo from "../locales/ko/product/modelon/electrification-library.json";
import mElectrificationEn from "../locales/en/product/modelon/electrification-library.json";
import environmentalKo from "../locales/ko/product/modelon/environmental-control-library.json";
import environmentalEn from "../locales/en/product/modelon/environmental-control-library.json";
import fuelCellKo from "../locales/ko/product/modelon/fuel-cell-library.json";
import fuelCellEn from "../locales/en/product/modelon/fuel-cell-library.json";
import fuelSystemKo from "../locales/ko/product/modelon/fuel-system-library.json";
import fuelSystemEn from "../locales/en/product/modelon/fuel-system-library.json";
import heatExchangerKo from "../locales/ko/product/modelon/heat-exchanger-library.json";
import heatExchangerEn from "../locales/en/product/modelon/heat-exchanger-library.json";
import hydraulicsKo from "../locales/ko/product/modelon/hydraulics-library.json";
import hydraulicsEn from "../locales/en/product/modelon/hydraulics-library.json";
import jetPropulsionKo from "../locales/ko/product/modelon/jet-propulsion-library.json";
import jetPropulsionEn from "../locales/en/product/modelon/jet-propulsion-library.json";
import liquidCoolingKo from "../locales/ko/product/modelon/liquid-cooling-library.json";
import liquidCoolingEn from "../locales/en/product/modelon/liquid-cooling-library.json";
import modelonBaseKo from "../locales/ko/product/modelon/modelon-base-library.json";
import modelonBaseEn from "../locales/en/product/modelon/modelon-base-library.json";
import thermalKo from "../locales/ko/product/modelon/thermal-power-library.json";
import thermalEn from "../locales/en/product/modelon/thermal-power-library.json";
import vaporKo from "../locales/ko/product/modelon/vapor-cycle-library.json";
import vaporEn from "../locales/en/product/modelon/vapor-cycle-library.json";

// ptv
import ptvKo from "../locales/ko/product/ptv/ptv.json";
import ptvEn from "../locales/en/product/ptv/ptv.json";
import vissimKo from "../locales/ko/product/ptv/vissim.json";
import vissimEn from "../locales/en/product/ptv/vissim.json";
import vissimAutomotiveKo from "../locales/ko/product/ptv/vissim-automotive.json";
import vissimAutomotiveEn from "../locales/en/product/ptv/vissim-automotive.json";
import viswalkKo from "../locales/ko/product/ptv/viswalk.json";
import viswalkEn from "../locales/en/product/ptv/viswalk.json";

// vtd
import vtdKo from "../locales/ko/product/vtd/vtd.json";
import vtdEn from "../locales/en/product/vtd/vtd.json";
import vtdCreateKo from "../locales/ko/product/vtd/vtd-create.json";
import vtdCreateEn from "../locales/en/product/vtd/vtd-create.json";
import vtdSimulateKo from "../locales/ko/product/vtd/vtd-simulate.json";
import vtdSimulateEn from "../locales/en/product/vtd/vtd-simulate.json";
import vtdFullstackKo from "../locales/ko/product/vtd/vtd-fullstack.json";
import vtdFullstackEn from "../locales/en/product/vtd/vtd-fullstack.json";

// product common
import productFormKo from "../locales/ko/product/product-form.json";
import productFormEn from "../locales/en/product/product-form.json";

// solution
import philosophyKo from "../locales/ko/solution/philosophy.json";
import philosophyEn from "../locales/en/solution/philosophy.json";
import modelicaKo from "../locales/ko/solution/modelica.json";
import modelicaEn from "../locales/en/solution/modelica.json";
import asamKo from "../locales/ko/solution/asam.json";
import asamEn from "../locales/en/solution/asam.json";
import physicalAiKo from "../locales/ko/solution/physical-ai.json";
import physicalAiEn from "../locales/en/solution/physical-ai.json";
import engineeringToIndustryKo from "../locales/ko/solution/engineering-to-industry.json";
import engineeringToIndustryEn from "../locales/en/solution/engineering-to-industry.json";
import futureDirectionsKo from "../locales/ko/solution/future-directions.json";
import futureDirectionsEn from "../locales/en/solution/future-directions.json";

i18n.use(initReactI18next).init({
  lng: "ko",
  fallbackLng: "ko",
  ns: [
    "home",
    "footer",
    "support/training",
    "support/support",
    "product/iMOVA",
    "product/humanoidPackage",
    "product/iSuite",
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
    "product/modelon",
    "product/modelon/vehicle",
    "product/modelon/air-cooling",
    "product/modelon/aircraft",
    "product/modelon/electrification",
    "product/modelon/environmental",
    "product/modelon/fuel-cell",
    "product/modelon/fuel-system",
    "product/modelon/heat-exchanger",
    "product/modelon/hydraulics",
    "product/modelon/jet-propulsion",
    "product/modelon/liquid-cooling",
    "product/modelon/base",
    "product/modelon/thermal",
    "product/modelon/vapor",
    "product/ptv",
    "product/ptv/vissim",
    "product/ptv/vissim-automotive",
    "product/ptv/viswalk",
    "product/vtd",
    "product/vtd/vtdcreate",
    "product/vtd/vtdsimulate",
    "product/vtd/vtdfullstack",
    "product/product-form",
    "solution/philosophy",
    "solution/modelica",
    "solution/asam",
    "solution/physical-ai",
    "solution/engineering-to-industry",
    "solution/future-directions",
  ],
  defaultNS: "product/iMOVA",
  resources: {
    ko: {
      home: homeKo,
      footer: footerKo,
      "support/training": trainingKo,
      "support/support": supportKo,
      "product/iMOVA": iMOVAKo,
      "product/humanoidPackage": humanoidKo,
      "product/iSuite": iSuiteKo,
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
      "product/modelon": modelonKo,
      "product/modelon/vehicle": vehicleKo,
      "product/modelon/air-cooling": mAirCoolingKo,
      "product/modelon/aircraft": aircraftKo,
      "product/modelon/electrification": mElectrificationKo,
      "product/modelon/environmental": environmentalKo,
      "product/modelon/fuel-cell": fuelCellKo,
      "product/modelon/fuel-system": fuelSystemKo,
      "product/modelon/heat-exchanger": heatExchangerKo,
      "product/modelon/hydraulics": hydraulicsKo,
      "product/modelon/jet-propulsion": jetPropulsionKo,
      "product/modelon/liquid-cooling": liquidCoolingKo,
      "product/modelon/base": modelonBaseKo,
      "product/modelon/thermal": thermalKo,
      "product/modelon/vapor": vaporKo,
      "product/ptv": ptvKo,
      "product/ptv/vissim": vissimKo,
      "product/ptv/vissim-automotive": vissimAutomotiveKo,
      "product/ptv/viswalk": viswalkKo,
      "product/vtd": vtdKo,
      "product/vtd/vtdcreate": vtdCreateKo,
      "product/vtd/vtdsimulate": vtdSimulateKo,
      "product/vtd/vtdfullstack": vtdFullstackKo,
      "product/product-form": productFormKo,
      "solution/philosophy": philosophyKo,
      "solution/modelica": modelicaKo,
      "solution/asam": asamKo,
      "solution/physical-ai": physicalAiKo,
      "solution/engineering-to-industry": engineeringToIndustryKo,
      "solution/future-directions": futureDirectionsKo,
    },
    en: {
      home: homeEn,
      footer: footerEn,
      "support/training": trainingEn,
      "support/support": supportEn,
      "product/iMOVA": iMOVAEn,
      "product/humanoidPackage": humanoidEn,
      "product/iSuite": iSuiteEn,
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
      "product/modelon": modelonEn,
      "product/modelon/vehicle": vehicleEn,
      "product/modelon/air-cooling": mAirCoolingEn,
      "product/modelon/aircraft": aircraftEn,
      "product/modelon/electrification": mElectrificationEn,
      "product/modelon/environmental": environmentalEn,
      "product/modelon/fuel-cell": fuelCellEn,
      "product/modelon/fuel-system": fuelSystemEn,
      "product/modelon/heat-exchanger": heatExchangerEn,
      "product/modelon/hydraulics": hydraulicsEn,
      "product/modelon/jet-propulsion": jetPropulsionEn,
      "product/modelon/liquid-cooling": liquidCoolingEn,
      "product/modelon/base": modelonBaseEn,
      "product/modelon/thermal": thermalEn,
      "product/modelon/vapor": vaporEn,
      "product/ptv": ptvEn,
      "product/ptv/vissim": vissimEn,
      "product/ptv/vissim-automotive": vissimAutomotiveEn,
      "product/ptv/viswalk": viswalkEn,
      "product/vtd": vtdEn,
      "product/vtd/vtdcreate": vtdCreateEn,
      "product/vtd/vtdsimulate": vtdSimulateEn,
      "product/vtd/vtdfullstack": vtdFullstackEn,
      "product/product-form": productFormEn,
      "solution/philosophy": philosophyEn,
      "solution/modelica": modelicaEn,
      "solution/asam": asamEn,
      "solution/physical-ai": physicalAiEn,
      "solution/engineering-to-industry": engineeringToIndustryEn,
      "solution/future-directions": futureDirectionsEn,
    },
  },
  interpolation: { escapeValue: false },
});

export default i18n;
