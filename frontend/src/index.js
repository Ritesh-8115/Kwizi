import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import Navbar from "./Navbar";
import HomePage from "./landing_page/Home/homePage";
import Footer from "./Footer";
import SignInPage from "./landing_page/Signin/SignIn";
import SignUpPage from "./landing_page/Signup/signup";
import AboutUs from "./landing_page/Footer/aboutUs";
import ContactUs from "./landing_page/Footer/contactUs";
import PrivacyPolicy from "./landing_page/Footer/privacyPolicy";
import TermsOfService from "./landing_page/Footer/TermsOfService";
import NotFound from "./NotFound";
import MyStats from './landing_page/Mystats/OverallMystats'
const root = ReactDOM.createRoot(document.getElementById("root"));

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

root.render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mystats" element={<MyStats />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/termsOfService" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </ClerkProvider>
);
