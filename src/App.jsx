import { useState, useEffect } from "react";
import Header from "./components/common/comm/Header";
import Footer from "./components/common/comm/Footer";
import Main from "./components/main/Main";
import Login from "./components/login/Login";
import Join from "./components/login/Join";
import SignUpComplete from "./components/login/SignUpComplete";
import "./css/App.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8080/test")
      .then((response) => {
        setData(response.data); // 응답 데이터에 바로 접근 가능
        setLoading(false); // 로딩 완료
      })
      .catch((error) => {
        setError(error); // 오류 처리
        setLoading(false); // 로딩 완료
      });
  }, []);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<Join />} />
          <Route path="/signUpComp" element={<SignUpComplete />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
