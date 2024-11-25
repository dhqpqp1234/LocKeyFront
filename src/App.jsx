import { useState, useEffect } from "react";
import Header from "./components/common/comm/Header";
import Footer from "./components/common/comm/Footer";
import Main from "./components/main/Main";
import Login from "./components/login/Login";
import Join from "./components/login/Join";
import FoodMap from "./components/contents/FoodMap";
import SignUpComplete from "./components/login/SignUpComplete";
import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MapStory from "./components/contents/MapStory";
import DateCalendar from "./components/contents/DateCalendar";

function App() {
  const memb_no = sessionStorage.getItem("memb_no");
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<Join />} />
          <Route path="/signUpComp" element={<SignUpComplete />} />
          <Route path="/map" element={<MapStory />} />
          <Route path="/calendar" element={<DateCalendar />} />
          <Route path="/foodMap" element={<FoodMap />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
