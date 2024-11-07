import { useState } from "react";
import Header from "./components/common/comm/Header";
import Footer from "./components/common/comm/Footer";
import Main from "./components/main/Main";
import Login from "./components/login/Login";
import Join from "./components/login/Join";
import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<Join />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
