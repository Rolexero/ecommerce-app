import React from "react";
import {  Routes, Route,  } from "react-router-dom";
import HomePage from "./pages/Homepage.component";
import ShopPage from "./pages/Shop-page.component";
import AboutPage from "./pages/About-page.component";
import ContactPage from "./pages/Contact-page.component";
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer.component";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
