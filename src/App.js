import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavbarComponents from "./components/navbar/NavbarComponents";
import HomePage from "./pages/main/HomePage";
import AboutPage from "./pages/main/AboutPage";
import ContactPage from "./pages/main/ContactPage";
import PricingPage from "./pages/main/PricingPage";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";

function App() {
  return (
    <div className="App">
      <NavbarComponents />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/pricing" Component={PricingPage} />
        <Route path="/contact" Component={ContactPage} />
        <Route path="/signin" Component={SignInPage} />
        <Route path="/signup" Component={SignUpPage} />
        <Route path="/forgotpassword" Component={ForgotPasswordPage} />
      </Routes>
    </div>
  );
}

export default App;
