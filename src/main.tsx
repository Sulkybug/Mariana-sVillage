import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./App.tsx";
import AboutUsPage from "./Pages/AboutUsPage.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
