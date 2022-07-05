import React from "react";
import {  Routes, Route,  } from "react-router-dom";
import HomePage from "./pages/home/Homepage.component";
import ShopPage from "./pages/shop/Shop-page.component";
import AboutPage from "./pages/about/About-page.component";
import ContactPage from "./pages/contact/Contact-page.component";
import SigninAndSignupPage from "./pages/signin-and-signup/signin-and-sign-up-page.comopnent";
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
        <Route path="signin" element={<SigninAndSignupPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
