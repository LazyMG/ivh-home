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
import NewDymola from "./pages/product/dymola/NewDymola";
import NewBattery from "./pages/product/dymola/NewBattery";
import TIL from "./pages/product/dymola/TIL";
// VTD
import NewVTD from "./pages/product/vtd/NewVTD";
import VTDCreate from "./pages/product/vtd/VTDCreate";
import VTDSimulate from "./pages/product/vtd/VTDSimulate";
import VTDFullstack from "./pages/product/vtd/VTDFullstack";
// PTV
import PTV from "./pages/product/ptv/PTV";
import NewVissim from "./pages/product/ptv/NewVissim";
import VissimAutomotive from "./pages/product/ptv/VissimAutomotive";
import Viswalk from "./pages/product/ptv/Viswalk";
// Modelon
import Modelon from "./pages/product/modelon/Modelon";
import VehicleDynamicsLibrary from "./pages/product/modelon/VehicleDynamicsLibrary";
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

          {/** dymola */}
          <Route path="/product/dymola" element={<NewDymola />} />
          <Route path="/product/dymola/battery" element={<NewBattery />} />
          <Route path="/product/dymola/til" element={<TIL />} />
          <Route
            path="/product/dymola/vehicledynamicslibrary"
            element={<VehicleDynamicsLibrary />}
          />

          {/** 26.01.23 미사용 */}
          {/* <Route
            path="/product/dymola/thermalpowerlibrary"
            element={<ThermalPowerLibrary />}
          /> */}

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
