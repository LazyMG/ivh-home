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
import MultiCommunicateTech from "./pages/solution/mobility/MultiCommunicateTech";
import AiDrivingAbilityTest from "./pages/solution/mobility/AiDrivingAbilityTest";
import VirtualDurability from "./pages/solution/mobility/VirtualDurability";
import AIInnovation from "./pages/solution/AIInnovation";
import SuspensionEquipment from "./pages/solution/mobility/SuspensionEquipment";
import EV from "./pages/solution/mobility/EV";
// Dymola
import Dymola from "./pages/product/dymola/Dymola";
import Battery from "./pages/product/dymola/Battery";
import TIL from "./pages/product/dymola/TIL";
import ThermalPowerLibrary from "./pages/product/dymola/ThermalPowerLibrary";
import VehicleDynamicsLibrary from "./pages/product/dymola/VehicleDynamicsLibrary";
// VTD
import VTD from "./pages/product/vtd/VTD";
import VTDCreate from "./pages/product/vtd/VTDCreate";
import VTDSimulate from "./pages/product/vtd/VTDSimulate";
import VTDFullstack from "./pages/product/vtd/VTDFullstack";
// Vissim
import Vissim from "./pages/product/vissim/Vissim";
import VissimAutomotive from "./pages/product/vissim/VissimAutomotive";
import Viswalk from "./pages/product/vissim/Viswalk";
// Calendar
import Calendar from "./pages/Calendar";
// Support
import Training from "./pages/support/Training";
import Header from "./common/Header/Header";
import PrivacyPolicy from "./components/support/PrivacyPolicy";
import Contact from "./pages/company/Contact";

function AppContent() {
  const { isMobile, isTablet } = useBreakpoint();
  const location = useLocation();

  // 헤더/푸터를 숨길 페이지 경로
  const hideLayout = location.pathname === "/support/privacyPolicy";

  return (
    <>
      <ScrollToTop>
        {!hideLayout && (isMobile || isTablet ? <MobileHeader /> : <Header />)}
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
          <Route path="/solution/mobility" element={<MultiCommunicateTech />} />
          <Route
            path="/solution/mobility/multiCommunicateTech"
            element={<MultiCommunicateTech />}
          />
          <Route
            path="/solution/mobility/aiDrivingAbilityTest"
            element={<AiDrivingAbilityTest />}
          />
          <Route
            path="/solution/mobility/virtualDurability"
            element={<VirtualDurability />}
          />
          <Route
            path="/solution/mobility/suspensionEquipment"
            element={<SuspensionEquipment />}
          />
          <Route path="/solution/mobility/ev" element={<EV />} />
          <Route path="/solution/aIinnovationhub" element={<AIInnovation />} />
          {/** dymola */}
          <Route path="/product/dymola" element={<Dymola />} />
          <Route path="/product/dymola/battery" element={<Battery />} />
          <Route path="/product/dymola/til" element={<TIL />} />
          <Route
            path="/product/dymola/thermalpowerlibrary"
            element={<ThermalPowerLibrary />}
          />
          <Route
            path="/product/dymola/vehicledynamicslibrary"
            element={<VehicleDynamicsLibrary />}
          />
          {/** vtd */}
          <Route path="/product/vtd" element={<VTD />} />
          <Route path="/product/vtd/vtdcreate" element={<VTDCreate />} />
          <Route path="/product/vtd/vtdsimulate" element={<VTDSimulate />} />
          <Route path="/product/vtd/vtdfullstack" element={<VTDFullstack />} />
          {/** vissim */}
          <Route path="/product/vissim" element={<Vissim />} />
          <Route
            path="/product/vissim/vissimautomotive"
            element={<VissimAutomotive />}
          />
          <Route path="/product/vissim/viswalk" element={<Viswalk />} />
          {/** support */}
          <Route path="/support/training" element={<Training />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/support/privacyPolicy" element={<PrivacyPolicy />} />

          {/** company */}
          <Route path="/company/contact" element={<Contact />} />
        </Routes>
      </ScrollToTop>
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
