import React from "react";
import "../../css/Login.css"; // 스타일 파일을 import 합니다.
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="loginMain">
        <h1 className="loginTitle">로그인</h1>
        <form className="form">
          <input className="input" placeholder="이메일 주소" type="email" />
          <input className="input" placeholder="비밀번호" type="password" />
          <button className="submitButton">로그인</button>

          <div className="socialLoginContainer">
            <button className="socialButtonF">
              <FaFacebook style={{ marginRight: "10px" }} /> Facebook으로 로그인
            </button>
            <button className="socialButtonG">
              <FaGoogle style={{ marginRight: "10px" }} /> Google로 로그인
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
