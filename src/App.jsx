import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReactHooks from "./components/ReactHooks";
import Api from "./components/Api";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ReactHooks />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
