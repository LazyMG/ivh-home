// common
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { useBreakpoint } from "./hooks/useBreakpoint";
import theme from "./theme/theme";
import ScrollToTop from "./common/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
// Header
import MobileHeader from "./common/mobile/MobileHeader";
// Footer
import Footer from "./common/footer";
import MobileFooter from "./common/mobile/mobileFooter";
// pages
import Home from "./pages/home";
import Product from "./pages/product/product";
import Service from "./pages/service";
import Company from "./pages/company";
// Solution
import Solution from "./pages/solution/solution";
import Energy from "./pages/solution/Energy";
import Bems from "./pages/solution/Bems";
import HomeAppliance from "./pages/solution/HomeAppliance";
import SmartFactory from "./pages/solution/SmartFactory";
import Mobility from "./pages/solution/Mobility";
import AIInnovation from "./pages/solution/AIInnovation";
import IMOVA from "./pages/product/IMOVA";
// Dymola
import NewDymola from "./pages/product/dymola/Dymola";
import NewBattery from "./pages/product/dymola/Battery";
import TIL from "./pages/product/dymola/TIL";
import CoolingLibrary from "./pages/product/dymola/CoolingLibrary";
import BrushlessDCDrivesLibrary from "./pages/product/dymola/BrushlessDCDrivesLibrary";
import ElectrifiedPowertrainsLibrary from "./pages/product/dymola/ElectrifiedPowertrainsLibrary";
import FlexibleBodies from "./pages/product/dymola/FlexibleBodies";
import HydrogenLibrary from "./pages/product/dymola/HydrogenLibrary";
import SustainableSupplySystemsLibrary from "./pages/product/dymola/SustainableSupplySystemsLibrary";
import VeSyMaLibrary from "./pages/product/dymola/VeSyMaLibrary";
import VeSyMaSuspensionLibrary from "./pages/product/dymola/VeSyMaSuspensionLibrary";
import VeSyMaPowertrainLibrary from "./pages/product/dymola/VeSyMaPowertrainLibrary";
import BinaryModelExport from "./pages/product/dymola/BinaryModelExport";
// VTD
import NewVTD from "./pages/product/vtd/VTD";
import VTDCreate from "./pages/product/vtd/VTDCreate";
import VTDSimulate from "./pages/product/vtd/VTDSimulate";
import VTDFullstack from "./pages/product/vtd/VTDFullstack";
// PTV
import PTV from "./pages/product/ptv/PTV";
import NewVissim from "./pages/product/ptv/Vissim";
import VissimAutomotive from "./pages/product/ptv/VissimAutomotive";
import Viswalk from "./pages/product/ptv/Viswalk";
// Modelon
import Modelon from "./pages/product/modelon/Modelon";
import VehicleDynamicsLibrary from "./pages/product/modelon/VehicleDynamicsLibrary";
import ThermalPowerLibrary from "./pages/product/modelon/ThermalPowerLibrary";
import VaporCycleLibrary from "./pages/product/modelon/VaporCycleLibrary";
import ModelonBaseLibrary from "./pages/product/modelon/ModelonBaseLibrary";
import LiquidCoolingLibrary from "./pages/product/modelon/LiquidCoolingLibrary";
import JetPropulsionLibrary from "./pages/product/modelon/JetPropulsionLibrary";
import AircraftDynamicsLibrary from "./pages/product/modelon/AircraftDynamicsLibrary";
import AirCoolingLibrary from "./pages/product/modelon/AirCoolingLibrary";
import FuelCellLibrary from "./pages/product/modelon/FuelCellLibrary";
import HydraulicsLibrary from "./pages/product/modelon/HydraulicsLibrary";
import HeatExchangerLibrary from "./pages/product/modelon/HeatExchangerLibrary";
import FuelSystemLibrary from "./pages/product/modelon/FuelSystemLibrary";
import EnvironmentalControlLibrary from "./pages/product/modelon/EnvironmentalControlLibrary";
import ElectrificationLibrary from "./pages/product/modelon/ElectrificationLibrary";
// Support
import Training from "./pages/support/Training";
import Support from "./pages/support/Support";

import NewHeader from "./common/header/NewHeader";
import PrivacyPolicy from "./components/support/PrivacyPolicy";
import CEO from "./pages/company/CEO";
import History from "./pages/company/History";
import Partner from "./pages/company/Partner";

import Contact from "./pages/company/Contact";
import FloatingButton from "./components/chatbot/FloatingButton";
import ComingSoon from "./pages/ComingSoon";

function AppContent() {
  const { isMobile, isTablet } = useBreakpoint();
  const location = useLocation();

  // 헤더/푸터를 숨길 페이지 경로
  const hideLayout = location.pathname === "/support/privacyPolicy";
  const isHomePage = location.pathname === "/";

  return (
    <>
      <ScrollToTop>
        {/** header */}
        {!hideLayout &&
          (isMobile || isTablet ? <MobileHeader /> : <NewHeader />)}
        <Routes>
          {/** pages */}
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/service" element={<Service />} />
          <Route path="/company" element={<Company />} />
          {/** Solution */}
          <Route path="/solution" element={<Solution />} />
          <Route path="/solution/energy" element={<Energy />} />
          <Route path="/solution/homeappliance" element={<HomeAppliance />} />
          <Route path="/solution/smartfactory" element={<SmartFactory />} />
          <Route path="/solution/bems" element={<Bems />} />
          <Route path="/solution/mobility" element={<Mobility />} />
          <Route path="/solution/aIinnovationhub" element={<AIInnovation />} />

          {/** Product */}
          <Route path="/product/imova" element={<IMOVA />} />
          <Route path="/product/isuite" element={<ComingSoon />} />
          <Route path="/product/modelica" element={<ComingSoon />} />

          {/** dymola */}
          <Route path="/product/dymola" element={<NewDymola />} />
          <Route path="/product/dymola/battery" element={<NewBattery />} />
          <Route path="/product/dymola/til" element={<TIL />} />
          <Route path="/product/dymola/cooling" element={<CoolingLibrary />} />
          <Route
            path="/product/dymola/brushlessdcdrives"
            element={<BrushlessDCDrivesLibrary />}
          />
          <Route
            path="/product/dymola/electrifiedpowertrains"
            element={<ElectrifiedPowertrainsLibrary />}
          />
          <Route
            path="/product/dymola/flexiblebodies"
            element={<FlexibleBodies />}
          />
          <Route
            path="/product/dymola/hydrogen"
            element={<HydrogenLibrary />}
          />
          <Route
            path="/product/dymola/sustainablesupplysystems"
            element={<SustainableSupplySystemsLibrary />}
          />
          <Route path="/product/dymola/veSyMa" element={<VeSyMaLibrary />} />
          <Route
            path="/product/dymola/veSyMasuspension"
            element={<VeSyMaSuspensionLibrary />}
          />
          <Route
            path="/product/dymola/veSyMapowertrain"
            element={<VeSyMaPowertrainLibrary />}
          />
          <Route
            path="/product/dymola/binarymodelexport"
            element={<BinaryModelExport />}
          />

          {/** vtd */}
          <Route path="/product/vtd" element={<NewVTD />} />
          <Route path="/product/vtd/vtdcreate" element={<VTDCreate />} />
          <Route path="/product/vtd/vtdsimulate" element={<VTDSimulate />} />
          <Route path="/product/vtd/vtdfullstack" element={<VTDFullstack />} />

          {/** ptv */}
          <Route path="/product/ptv" element={<PTV />} />
          <Route path="/product/ptv/vissim" element={<NewVissim />} />
          <Route
            path="/product/ptv/vissimautomotive"
            element={<VissimAutomotive />}
          />
          <Route path="/product/ptv/viswalk" element={<Viswalk />} />

          {/** modelon */}
          <Route path="/product/modelon" element={<Modelon />} />
          <Route
            path="/product/modelon/vehicledynamicslibrary"
            element={<VehicleDynamicsLibrary />}
          />
          <Route
            path="/product/modelon/thermalpower"
            element={<ThermalPowerLibrary />}
          />
          <Route
            path="/product/modelon/vaporcycle"
            element={<VaporCycleLibrary />}
          />
          <Route
            path="/product/modelon/modelonbase"
            element={<ModelonBaseLibrary />}
          />
          <Route
            path="/product/modelon/liquidcooling"
            element={<LiquidCoolingLibrary />}
          />
          <Route
            path="/product/modelon/jetpropulsion"
            element={<JetPropulsionLibrary />}
          />
          <Route
            path="/product/modelon/aircraftdynamics"
            element={<AircraftDynamicsLibrary />}
          />
          <Route
            path="/product/modelon/aircooling"
            element={<AirCoolingLibrary />}
          />
          <Route
            path="/product/modelon/fuelcell"
            element={<FuelCellLibrary />}
          />
          <Route
            path="/product/modelon/hydraulics"
            element={<HydraulicsLibrary />}
          />
          <Route
            path="/product/modelon/heatexchanger"
            element={<HeatExchangerLibrary />}
          />
          <Route
            path="/product/modelon/fuelsystem"
            element={<FuelSystemLibrary />}
          />
          <Route
            path="/product/modelon/environmentalcontrol"
            element={<EnvironmentalControlLibrary />}
          />
          <Route
            path="/product/modelon/electrification"
            element={<ElectrificationLibrary />}
          />

          {/** support */}
          <Route path="/support/training" element={<Training />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/privacyPolicy" element={<PrivacyPolicy />} />

          {/** company */}
          <Route path="/company/contact" element={<Contact />} />
          <Route path="/company/ceo" element={<CEO />} />
          <Route path="/company/history" element={<History />} />
          <Route path="/company/partner" element={<Partner />} />
        </Routes>
      </ScrollToTop>
      {/** chatbot button */}
      <FloatingButton isHomePage={isHomePage} />
      {/** footer */}
      {!hideLayout && (isMobile || isTablet ? <MobileFooter /> : <Footer />)}
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
