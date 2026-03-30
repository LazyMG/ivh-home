// common
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { useBreakpoint } from "./hooks/useBreakpoint";
import theme from "./theme/theme";
import ScrollToTop from "./common/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
// Header
import MobileHeader from "./common/mobile/MobileHeader";
// Footer
import Footer from "./common/footer";
import MobileFooter from "./common/mobile/mobileFooter";
// 정적 로드 (항상 필요하거나 가벼운 페이지)
import Home from "./pages/home";
import NewHeader from "./common/header/NewHeader";
const FloatingButton = lazy(() => import("./components/chatbot/FloatingButton"));
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

// Solution (lazy 그룹)
const Solution = lazy(() => import("./pages/solution/solution"));
const Energy = lazy(() => import("./pages/solution/Energy"));
const Bems = lazy(() => import("./pages/solution/Bems"));
const HomeAppliance = lazy(() => import("./pages/solution/HomeAppliance"));
const SmartFactory = lazy(() => import("./pages/solution/SmartFactory"));
const Mobility = lazy(() => import("./pages/solution/Mobility"));
const AIInnovation = lazy(() => import("./pages/solution/AIInnovation"));

// iMOVA (lazy 개별)
const IMOVA = lazy(() => import("./pages/product/IMOVA"));
const HumanoidPackage = lazy(
  () => import("./pages/product/HumanoidPackage"),
);

// Dymola (lazy 그룹)
const Dymola = lazy(() => import("./pages/product/dymola/Dymola"));
const Battery = lazy(() => import("./pages/product/dymola/Battery"));
const TIL = lazy(() => import("./pages/product/dymola/TIL"));
const CoolingLibrary = lazy(
  () => import("./pages/product/dymola/CoolingLibrary"),
);
const BrushlessDCDrivesLibrary = lazy(
  () => import("./pages/product/dymola/BrushlessDCDrivesLibrary"),
);
const ElectrifiedPowertrainsLibrary = lazy(
  () => import("./pages/product/dymola/ElectrifiedPowertrainsLibrary"),
);
const FlexibleBodies = lazy(
  () => import("./pages/product/dymola/FlexibleBodies"),
);
const HydrogenLibrary = lazy(
  () => import("./pages/product/dymola/HydrogenLibrary"),
);
const SustainableSupplySystemsLibrary = lazy(
  () => import("./pages/product/dymola/SustainableSupplySystemsLibrary"),
);
const VeSyMaLibrary = lazy(
  () => import("./pages/product/dymola/VeSyMaLibrary"),
);
const VeSyMaSuspensionLibrary = lazy(
  () => import("./pages/product/dymola/VeSyMaSuspensionLibrary"),
);
const VeSyMaPowertrainLibrary = lazy(
  () => import("./pages/product/dymola/VeSyMaPowertrainLibrary"),
);
const BinaryModelExport = lazy(
  () => import("./pages/product/dymola/BinaryModelExport"),
);

// VTD (lazy 그룹)
const VTD = lazy(() => import("./pages/product/vtd/VTD"));
const VTDCreate = lazy(() => import("./pages/product/vtd/VTDCreate"));
const VTDSimulate = lazy(() => import("./pages/product/vtd/VTDSimulate"));
const VTDFullstack = lazy(() => import("./pages/product/vtd/VTDFullstack"));

// PTV (lazy 그룹)
const PTV = lazy(() => import("./pages/product/ptv/PTV"));
const Vissim = lazy(() => import("./pages/product/ptv/Vissim"));
const VissimAutomotive = lazy(
  () => import("./pages/product/ptv/VissimAutomotive"),
);
const Viswalk = lazy(() => import("./pages/product/ptv/Viswalk"));

// Modelon (lazy 그룹)
const Modelon = lazy(() => import("./pages/product/modelon/Modelon"));
const VehicleDynamicsLibrary = lazy(
  () => import("./pages/product/modelon/VehicleDynamicsLibrary"),
);
const ThermalPowerLibrary = lazy(
  () => import("./pages/product/modelon/ThermalPowerLibrary"),
);
const VaporCycleLibrary = lazy(
  () => import("./pages/product/modelon/VaporCycleLibrary"),
);
const ModelonBaseLibrary = lazy(
  () => import("./pages/product/modelon/ModelonBaseLibrary"),
);
const LiquidCoolingLibrary = lazy(
  () => import("./pages/product/modelon/LiquidCoolingLibrary"),
);
const JetPropulsionLibrary = lazy(
  () => import("./pages/product/modelon/JetPropulsionLibrary"),
);
const AircraftDynamicsLibrary = lazy(
  () => import("./pages/product/modelon/AircraftDynamicsLibrary"),
);
const AirCoolingLibrary = lazy(
  () => import("./pages/product/modelon/AirCoolingLibrary"),
);
const FuelCellLibrary = lazy(
  () => import("./pages/product/modelon/FuelCellLibrary"),
);
const HydraulicsLibrary = lazy(
  () => import("./pages/product/modelon/HydraulicsLibrary"),
);
const HeatExchangerLibrary = lazy(
  () => import("./pages/product/modelon/HeatExchangerLibrary"),
);
const FuelSystemLibrary = lazy(
  () => import("./pages/product/modelon/FuelSystemLibrary"),
);
const EnvironmentalControlLibrary = lazy(
  () => import("./pages/product/modelon/EnvironmentalControlLibrary"),
);
const ElectrificationLibrary = lazy(
  () => import("./pages/product/modelon/ElectrificationLibrary"),
);

// Support (lazy 그룹)
const Training = lazy(() => import("./pages/support/Training"));
const Support = lazy(() => import("./pages/support/Support"));
const PrivacyPolicy = lazy(() => import("./components/support/PrivacyPolicy"));

// Company (lazy 그룹)
const Contact = lazy(() => import("./pages/company/Contact"));
const CEO = lazy(() => import("./pages/company/CEO"));
const History = lazy(() => import("./pages/company/History"));
const Partner = lazy(() => import("./pages/company/Partner"));

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
        <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
          <Routes>
            {/** pages */}
            <Route path="/" element={<Home />} />
            {/** Solution */}
            <Route path="/solution" element={<Solution />} />
            <Route path="/solution/energy" element={<Energy />} />
            <Route path="/solution/homeappliance" element={<HomeAppliance />} />
            <Route path="/solution/smartfactory" element={<SmartFactory />} />
            <Route path="/solution/bems" element={<Bems />} />
            <Route path="/solution/mobility" element={<Mobility />} />
            <Route
              path="/solution/aIinnovationhub"
              element={<AIInnovation />}
            />

            {/** Product */}
            <Route
              path="/product/imova/humanoid"
              element={<HumanoidPackage />}
            />
            <Route path="/product/imova" element={<IMOVA />} />
            <Route path="/product/isuite" element={<ComingSoon />} />

            {/** dymola */}
            <Route path="/product/dymola" element={<Dymola />} />
            <Route path="/product/dymola/battery" element={<Battery />} />
            <Route path="/product/dymola/til" element={<TIL />} />
            <Route
              path="/product/dymola/cooling"
              element={<CoolingLibrary />}
            />
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
            <Route path="/product/vtd" element={<VTD />} />
            <Route path="/product/vtd/vtdcreate" element={<VTDCreate />} />
            <Route path="/product/vtd/vtdsimulate" element={<VTDSimulate />} />
            <Route
              path="/product/vtd/vtdfullstack"
              element={<VTDFullstack />}
            />

            {/** ptv */}
            <Route path="/product/ptv" element={<PTV />} />
            <Route path="/product/ptv/vissim" element={<Vissim />} />
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

            {/** 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
      {/** chatbot button */}
      <Suspense fallback={null}>
        <FloatingButton isHomePage={isHomePage} />
      </Suspense>
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
