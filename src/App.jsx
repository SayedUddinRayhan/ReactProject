import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReactHooks from "./components/ReactHooks";
import Api from "./components/Api";
import Userdata from "./components/Userdata";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ReactHooks />} />
        <Route path="/api" element={<Api />} />
        <Route path="/user/:userId" element={<Userdata />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
