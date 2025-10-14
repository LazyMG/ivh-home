import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Solution from "./pages/solution";
import Energy from "./pages/solution/Energy";
import Bems from "./pages/solution/Bems";
import HomeAppliance from "./pages/solution/HomeAppliance";
import Calendar from "./pages/Calendar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/solution/energy" element={<Energy />} />
        <Route path="/solution/home-appliance" element={<HomeAppliance />} />
        <Route path="/solution/bems" element={<Bems />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
