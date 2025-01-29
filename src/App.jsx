import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

import Home from "./pages/Home";
import Admin from "./pages/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
