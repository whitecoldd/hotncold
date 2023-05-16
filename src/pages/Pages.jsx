import Cuisine from "./Cuisine";
import Home from "./Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Results from "./Results";
import Dish from "./Dish";
import { AnimatePresence } from "framer-motion";
const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:ct" element={<Cuisine />} />
        <Route path="/results/:dish" element={<Results />} />
        <Route path="/:dish" element={<Dish />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
