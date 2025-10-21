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

function App() {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
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
          <Route path="/solution/aIinnovationhub" element={<AIInnovation />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
