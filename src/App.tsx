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
import Header from "./common/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<Service />} />
        <Route path="/company" element={<Company />} />
        <Route path="/solution/energy" element={<Energy />} />
        <Route path="/solution/home-appliance" element={<HomeAppliance />} />
        <Route path="/solution/smartfactory" element={<SmartFactory />} />
        <Route path="/solution/bems" element={<Bems />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
