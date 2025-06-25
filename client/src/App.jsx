import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import HomePage from "./landing_page/Home/homePage";
import Footer from "./footer/Footer";
import SignInPage from "./landing_page/Signin/SignIn";
import SignUpPage from "./landing_page/Signup/signup";
import AboutUs from "./landing_page/Footer/aboutUs";
import ContactUs from "./landing_page/Footer/contactUs";
import PrivacyPolicy from "./landing_page/Footer/privacyPolicy";
import TermsOfService from "./landing_page/Footer/TermsOfService";
import NotFound from "./notfound/NotFound";
import MyStats from "./landing_page/Mystats/OverallMystats";
import { GlobalContextProvider } from "./context/globalContext";

function App() {
  return (
    <>
    <GlobalContextProvider>
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
      </GlobalContextProvider>
    </>
  );
}

export default App;
