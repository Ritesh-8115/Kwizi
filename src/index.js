import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Navbar from './Navbar'
import HomePage from './landing_page/Home/homePage';
import Footer from './Footer';
import Signup from './landing_page/Signup/signup'
import Login from './landing_page/Login/login'
import AboutUs from './landing_page/Footer/aboutUs';
import ContactUs from './landing_page/Footer/contactUs';
import PrivacyPolicy from './landing_page/Footer/privacyPolicy';
import TermsOfService from './landing_page/Footer/TermsOfService';
import NotFound from './NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/termsOfService" element={<TermsOfService />} />
      <Route path="*" element={ <NotFound/>} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

  
