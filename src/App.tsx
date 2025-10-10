import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Solution from "./pages/solution";
import HomeAppliance from "./pages/home-appliance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/solution/home-appliance" element={<HomeAppliance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
