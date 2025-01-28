import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import PrivacyPolicy from "./component/PrivacyPolicy.jsx";
import ContactUs from "./component/ContactUs.jsx";
import TermsAndConditions from "./component/TermsAndConditions.jsx";
import Pricing from "./component/Pricing.jsx";
import RefundPolicy from "./component/RefundPolicy.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Privacy" element={<PrivacyPolicy />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/TermsAndCondition" element={<TermsAndConditions />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Refund" element={<RefundPolicy />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
