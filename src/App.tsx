// common
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { useIsMobile } from "./hooks/useIsMobile";
import theme from "./types/theme";
import ScrollToTop from "./common/ScrollToTop";
// Header
import Header from "./common/Header/Header";
import MobileHeader from "./common/MobileHeader";
// pages
import Home from "./pages/home";
import Product from "./pages/product";
import Service from "./pages/service";
import Company from "./pages/company";
// Solution
import Solution from "./pages/solution";
import Energy from "./pages/solution/Energy";
import Bems from "./pages/solution/Bems";
import HomeAppliance from "./pages/solution/HomeAppliance";
import SmartFactory from "./pages/solution/SmartFactory";
import Mobility from "./pages/solution/Mobility";
import AIInnovation from "./pages/solution/AIInnovation";
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

function App() {
  const isMobile = useIsMobile();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop>
          {isMobile ? <MobileHeader /> : <Header />}
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
            <Route
              path="/solution/aIinnovationhub"
              element={<AIInnovation />}
            />
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
            <Route
              path="/product/vtd/vtdfullstack"
              element={<VTDFullstack />}
            />
            {/** vissim */}
            <Route path="/product/vissim" element={<Vissim />} />
            <Route
              path="/product/vissim/vissimautomotive"
              element={<VissimAutomotive />}
            />
            <Route path="/product/vissim/viswalk" element={<Viswalk />} />
            {/** calendar */}
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
