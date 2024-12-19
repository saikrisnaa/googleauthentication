import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import DashBoard from "./DashBoard";
import PageError from "./PageError";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const GoogleauthWrap = () => {
    return (
      <GoogleOAuthProvider clientId="866280719793-j4lhp2pcoc9v7gum6hvkn6c579n2387v.apps.googleusercontent.com">
        <Login></Login>
      </GoogleOAuthProvider>
    );
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<GoogleauthWrap />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="*" element={<PageError />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
