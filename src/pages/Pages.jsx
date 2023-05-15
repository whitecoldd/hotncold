import Cuisine from "./Cuisine";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
const Pages = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:ct" element={<Cuisine />} />
      </Routes>
  );
};

export default Pages;
