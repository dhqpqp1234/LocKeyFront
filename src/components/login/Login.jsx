import React from "react";
import "../../css/Login.css"; // 스타일 파일을 import 합니다.
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { getIconImages } from "../../js/icon/icon";

const Login = () => {
  const navigate = useNavigate();
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <div className="container">
      <div className="loginMain">
        <h1 className="loginTitle">로그인</h1>
        <form className="form">
          <input className="input" placeholder="이메일 주소" type="email" />
          <input className="input" placeholder="비밀번호" type="password" />
          <button className="submitButton">로그인</button>
          <div className="socialLoginContainer">
            <button type="button" className="socialButtonF">
              <FaFacebook style={{ marginRight: "10px" }} /> Facebook으로 로그인
            </button>
            <button type="button" className="socialButtonG">
              <FaGoogle style={{ marginRight: "10px" }} /> Google로 로그인
            </button>
            <button
              type="button"
              className="socialButtonK"
              onClick={handleLogin}
            >
              <img src={getIconImages(5)} />
              Kakao로 로그인
            </button>
          </div>

          <a className="forgotPassword" href="#forgot-password">
            비밀번호를 잊으셨나요?
          </a>
        </form>
      </div>

      <footer className="loginFooter">
        <p>
          넷플릭스를 처음 사용하시나요?{" "}
          <Link to="/signUp" className="signUp">
            가입하기
          </Link>
        </p>
        <p>넷플릭스 이용 약관과 개인정보 처리 방침에 동의합니다.</p>
      </footer>
    </div>
  );
};

export default Login;
