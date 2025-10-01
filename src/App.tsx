import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Solution from "./pages/solution";
import Energy from "./pages/solution/Energy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/solution/energy" element={<Energy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
