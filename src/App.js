import React from "react";
import {  Routes, Route,  } from "react-router-dom";
import HomePage from "./pages/Homepage.component";
import ShopPage from "./pages/Shop-page.component";
import AboutPage from "./pages/About-page.component";
import ContactPage from "./pages/Contact-page.component";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </>
  );
}

export default App;
