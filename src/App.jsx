import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home"; // Page principale du site
import CMS from "./pages/CMS"; // Interface CMS

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<CMS />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
