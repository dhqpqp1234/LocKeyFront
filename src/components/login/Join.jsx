import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../css/Join.css"; // CSS 파일을 임포트

const SignUp = () => {
  return (
    <div className="container">
      <div className="signUpMain">
        <h1 className="title">회원가입</h1>
        <form className="form">
          {/* 이메일 주소 입력 */}
          <input
            className="input"
            placeholder="이메일 주소"
            type="email"
            required
          />

          {/* 비밀번호 입력 */}
          <input
            className="input"
            placeholder="비밀번호"
            type="password"
            required
          />

          {/* 비밀번호 확인 입력 */}
          <input
            className="input"
            placeholder="비밀번호 확인"
            type="password"
            required
          />

          {/* 전화번호 입력 */}
          <input
            className="input"
            placeholder="전화번호"
            type="text"
            required
          />

          {/* 전화번호 인증 버튼 */}
          <button type="button" className="verifyButton">
            전화번호 인증하기
          </button>

          {/* 인증번호 입력 */}
          <div className="inputContainer">
            <input className="input" placeholder="인증번호 입력" type="text" />
            <button type="button" className="smsSubmitButton">
              인증 확인
            </button>
          </div>

          {/* 집 주소 입력 */}
          <input className="input" placeholder="집 주소" type="text" required />

          {/* 가입하기 버튼 */}
          <button className="submitButton">가입하기</button>

          {/* 소셜 로그인 버튼 */}
          <div className="socialLoginContainer">
            <button className="socialButtonF">
              <FaFacebook style={{ marginRight: "10px" }} /> Facebook으로 가입
            </button>
            <button className="socialButtonG">
              <FaGoogle style={{ marginRight: "10px" }} /> Google로 가입
            </button>
          </div>

          {/* 로그인 유도 텍스트 */}
          <p className="signInPrompt">
            이미 계정이 있나요?{" "}
            <Link to="/login" className="signInLink">
              로그인하기
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
