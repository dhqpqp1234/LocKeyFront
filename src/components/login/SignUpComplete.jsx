import React from "react";
import { Link } from "react-router-dom"; // 리액트 라우터를 사용하여 로그인 페이지로 이동
import "../../css/SignUpComplete.css"; // CSS 파일을 임포트

const SignUpComplete = () => {
  return (
    <div className="container">
      <div className="completeMain">
        <h1 className="completeTitle">회원가입 완료!</h1>
        <p className="completeMessage">
          축하합니다! 회원가입이 성공적으로 완료되었습니다.
        </p>

        {/* 로그인 페이지로 이동하는 버튼 */}
        <Link to="/login" className="loginButton">
          로그인하기
        </Link>

        {/* 홈으로 이동하는 버튼 */}
        <Link to="/" className="homeButton">
          홈으로 가기
        </Link>
      </div>
    </div>
  );
};

export default SignUpComplete;
