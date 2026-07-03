// common
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { Box, ThemeProvider } from "@mui/material";
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
import NewHeader from "./common/header/Header";
const FloatingButton = lazy(
  () => import("./components/chatbot/FloatingButton"),
);
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

// Solution - 신규 페이지 (lazy 그룹)
const Philosophy = lazy(() => import("./pages/solution/Philosophy"));
const Modelica = lazy(() => import("./pages/solution/Modelica"));
const Asam = lazy(() => import("./pages/solution/Asam"));
const PhysicalAi = lazy(() => import("./pages/solution/PhysicalAi"));
const EngineeringToIndustry = lazy(
  () => import("./pages/solution/EngineeringToIndustry"),
);
const FutureDirections = lazy(
  () => import("./pages/solution/FutureDirections"),
);

// iMOVA (lazy 개별)
const IMOVA = lazy(() => import("./pages/product/IMOVA"));
const HumanoidPackage = lazy(() => import("./pages/product/HumanoidPackage"));

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

// 라우트 정의 배열
const routes: { path: string; element: React.ReactNode }[] = [
  { path: "/", element: <Home /> },
  // Solution
  { path: "solution", element: <Solution /> },
  { path: "solution/philosophy", element: <Philosophy /> },
  { path: "solution/modelica", element: <Modelica /> },
  { path: "solution/asam", element: <Asam /> },
  { path: "solution/physical-ai", element: <PhysicalAi /> },
  {
    path: "solution/engineering-to-industry",
    element: <EngineeringToIndustry />,
  },
  { path: "solution/future-directions", element: <FutureDirections /> },
  { path: "solution/energy", element: <Energy /> },
  { path: "solution/homeappliance", element: <HomeAppliance /> },
  { path: "solution/smartfactory", element: <SmartFactory /> },
  { path: "solution/bems", element: <Bems /> },
  { path: "solution/mobility", element: <Mobility /> },
  { path: "solution/aIinnovationhub", element: <AIInnovation /> },
  // Product - iMOVA
  { path: "product/imova/humanoid", element: <HumanoidPackage /> },
  { path: "product/imova", element: <IMOVA /> },
  { path: "product/isuite", element: <ComingSoon /> },
  // Product - Dymola
  { path: "product/dymola", element: <Dymola /> },
  { path: "product/dymola/battery", element: <Battery /> },
  { path: "product/dymola/til", element: <TIL /> },
  { path: "product/dymola/cooling", element: <CoolingLibrary /> },
  {
    path: "product/dymola/brushlessdcdrives",
    element: <BrushlessDCDrivesLibrary />,
  },
  {
    path: "product/dymola/electrifiedpowertrains",
    element: <ElectrifiedPowertrainsLibrary />,
  },
  { path: "product/dymola/flexiblebodies", element: <FlexibleBodies /> },
  { path: "product/dymola/hydrogen", element: <HydrogenLibrary /> },
  {
    path: "product/dymola/sustainablesupplysystems",
    element: <SustainableSupplySystemsLibrary />,
  },
  { path: "product/dymola/veSyMa", element: <VeSyMaLibrary /> },
  {
    path: "product/dymola/veSyMasuspension",
    element: <VeSyMaSuspensionLibrary />,
  },
  {
    path: "product/dymola/veSyMapowertrain",
    element: <VeSyMaPowertrainLibrary />,
  },
  { path: "product/dymola/binarymodelexport", element: <BinaryModelExport /> },
  // Product - VTD
  { path: "product/vtd", element: <VTD /> },
  { path: "product/vtd/vtdcreate", element: <VTDCreate /> },
  { path: "product/vtd/vtdsimulate", element: <VTDSimulate /> },
  { path: "product/vtd/vtdfullstack", element: <VTDFullstack /> },
  // Product - PTV
  { path: "product/ptv", element: <PTV /> },
  { path: "product/ptv/vissim", element: <Vissim /> },
  { path: "product/ptv/vissimautomotive", element: <VissimAutomotive /> },
  { path: "product/ptv/viswalk", element: <Viswalk /> },
  // Product - Modelon
  { path: "product/modelon", element: <Modelon /> },
  {
    path: "product/modelon/vehicledynamicslibrary",
    element: <VehicleDynamicsLibrary />,
  },
  { path: "product/modelon/thermalpower", element: <ThermalPowerLibrary /> },
  { path: "product/modelon/vaporcycle", element: <VaporCycleLibrary /> },
  { path: "product/modelon/modelonbase", element: <ModelonBaseLibrary /> },
  { path: "product/modelon/liquidcooling", element: <LiquidCoolingLibrary /> },
  { path: "product/modelon/jetpropulsion", element: <JetPropulsionLibrary /> },
  {
    path: "product/modelon/aircraftdynamics",
    element: <AircraftDynamicsLibrary />,
  },
  { path: "product/modelon/aircooling", element: <AirCoolingLibrary /> },
  { path: "product/modelon/fuelcell", element: <FuelCellLibrary /> },
  { path: "product/modelon/hydraulics", element: <HydraulicsLibrary /> },
  { path: "product/modelon/heatexchanger", element: <HeatExchangerLibrary /> },
  { path: "product/modelon/fuelsystem", element: <FuelSystemLibrary /> },
  {
    path: "product/modelon/environmentalcontrol",
    element: <EnvironmentalControlLibrary />,
  },
  {
    path: "product/modelon/electrification",
    element: <ElectrificationLibrary />,
  },
  // Support
  { path: "support/training", element: <Training /> },
  { path: "support", element: <Support /> },
  { path: "support/privacyPolicy", element: <PrivacyPolicy /> },
  // Company
  { path: "company/contact", element: <Contact /> },
  { path: "company/ceo", element: <CEO /> },
  { path: "company/history", element: <History /> },
  { path: "company/partner", element: <Partner /> },
];

// /:lang prefix 가드 — 지원 언어(ko는 prefix 없음)가 아니면 404 처리.
// 이게 없으면 `:lang`이 아무 첫 세그먼트나 받아 Home 인덱스로 떨어짐.
const PREFIX_LANGS: string[] = ["en"];
function LangGuard() {
  const { lang } = useParams<{ lang?: string }>();
  return PREFIX_LANGS.includes(lang ?? "") ? <Outlet /> : <NotFound />;
}

function AppContent() {
  const { isMobile, isTablet } = useBreakpoint();
  const location = useLocation();

  // 헤더/푸터를 숨길 페이지 경로 (lang prefix 고려)
  const hideLayout =
    location.pathname === "/support/privacyPolicy" ||
    location.pathname.endsWith("/support/privacyPolicy");

  return (
    // sticky footer: 콘텐츠가 뷰포트보다 짧아도 푸터가 화면 하단에 붙도록
    // 전체를 최소 뷰포트 높이의 flex column으로 만들고 main이 남는 높이를 흡수
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        // 모바일 주소창 높이 변화를 반영하는 dvh 지원 시 사용
        "@supports (min-height: 100dvh)": { minHeight: "100dvh" },
      }}
    >
      <ScrollToTop>
        {/** header */}
        {!hideLayout &&
          (isMobile || isTablet ? <MobileHeader /> : <NewHeader />)}
        <Box component="main" sx={{ flex: 1 }}>
          <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
            <Routes>
              {/* 기존 경로 = ko (prefix 없음) */}
              {routes.map((r) => (
                <Route key={r.path} path={r.path} element={r.element} />
              ))}
              {/* 다국어 경로 = /:lang/ prefix */}
              <Route path="/:lang" element={<LangGuard />}>
                {routes.map((r) => (
                  <Route
                    key={`lang-${r.path}`}
                    path={r.path === "/" ? "" : r.path}
                    element={r.element}
                  />
                ))}
              </Route>
              {/** 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Box>
      </ScrollToTop>
      {/** chatbot button */}
      <Suspense fallback={null}>
        <FloatingButton />
      </Suspense>
      {/** footer */}
      {!hideLayout && (isMobile || isTablet ? <MobileFooter /> : <Footer />)}
    </Box>
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
