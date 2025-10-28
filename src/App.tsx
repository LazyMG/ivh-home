import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Solution from "./pages/solution";
import Product from "./pages/product";
import Service from "./pages/service";
import Company from "./pages/company";
import Energy from "./pages/solution/Energy";
import Bems from "./pages/solution/Bems";
import HomeAppliance from "./pages/solution/HomeAppliance";
import Calendar from "./pages/Calendar";
import SmartFactory from "./pages/solution/SmartFactory";
import Header from "./common/Header/Header";
import MobileHeader from "./common/MobileHeader";
import { useMediaQuery, ThemeProvider } from "@mui/material";
import theme from "./types/theme";
import Mobility from "./pages/solution/Mobility";
import AIInnovation from "./pages/solution/AIInnovation";
import Dymola from "./pages/product/Dymola";
import Battery from "./pages/product/Battery";
import TIL from "./pages/product/TIL";
import ThermalPowerLibrary from "./pages/product/ThermalPowerLibrary";
import VehicleDynamicsLibrary from "./pages/product/VehicleDynamicsLibrary";
import ScrollToTop from "./common/ScrollToTop";
import VTD from "./pages/product/VTD";
import VTDCreate from "./pages/product/VTDCreate";
import VTDSimulate from "./pages/product/VTDSimulate";
import VTDFullstack from "./pages/product/VTDFullstack";
import Vissim from "./pages/product/Vissim";
import VissimAutomotive from "./pages/product/VissimAutomotive";
import Viswalk from "./pages/product/Viswalk";
import Training from "./pages/support/Training";

function App() {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop>
          {isMobile ? <MobileHeader /> : <Header />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/product" element={<Product />} />
            <Route path="/service" element={<Service />} />
            <Route path="/company" element={<Company />} />
            <Route path="/solution/energy" element={<Energy />} />
            <Route path="/solution/homeappliance" element={<HomeAppliance />} />
            <Route path="/solution/smartfactory" element={<SmartFactory />} />
            <Route path="/solution/bems" element={<Bems />} />
            <Route path="/solution/mobility" element={<Mobility />} />
            <Route
              path="/solution/aIinnovationhub"
              element={<AIInnovation />}
            />
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
            <Route path="/product/vtd" element={<VTD />} />
            <Route path="/product/vtd/vtdcreate" element={<VTDCreate />} />
            <Route path="/product/vtd/vtdsimulate" element={<VTDSimulate />} />
            <Route
              path="/product/vtd/vtdfullstack"
              element={<VTDFullstack />}
            />
            <Route path="/product/vissim" element={<Vissim />} />
            <Route
              path="/product/vissim/vissimautomotive"
              element={<VissimAutomotive />}
            />
            <Route path="/product/vissim/viswalk" element={<Viswalk />} />
            <Route path="/support/training" element={<Training />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
