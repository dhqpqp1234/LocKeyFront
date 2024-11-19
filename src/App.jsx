import { useState, useEffect } from "react";
import Header from "./components/common/comm/Header";
import Footer from "./components/common/comm/Footer";
import Main from "./components/main/Main";
import Login from "./components/login/Login";
import Join from "./components/login/Join";
import SignUpComplete from "./components/login/SignUpComplete";
import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<Join />} />
          <Route path="/signUpComp" element={<SignUpComplete />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
