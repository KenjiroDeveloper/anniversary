import { Routes, Route } from "react-router-dom";
import { Home, About, NotFound } from "./pages";
import { AboutUs, OurMission } from "./pages/About/views";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Ruta padre About us */}
      <Route path="/about" element={<About />}>
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="ourmission" element={<OurMission />} />
      </Route>
      
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
//
