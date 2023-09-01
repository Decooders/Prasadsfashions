import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.js";
import Pagenotfound from "./pages/Pagenotfound.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} /> */}
      <Route path="*" element={<Pagenotfound />} />
    </Routes>
  );
}

export default App;
