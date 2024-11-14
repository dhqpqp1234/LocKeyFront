import React from "react";
import "../../css/Login.css"; // 스타일 파일을 import 합니다.
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { getIconImages } from "../../js/icon/icon";
import { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [kakaoCode, setKakaoCode] = useState(null);

  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI_V1;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const NAVER_CLIENT_ID = import.meta.env.VITE_NANER_CLIENT_ID;
  const NAVER_REDIRECT_URI = import.meta.env.VITE_NAVER_REDIRECT_URI;
  const NAVER_STAT = "false";
  const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${NAVER_STAT}&redirect_uri=${NAVER_REDIRECT_URI}`;

  function loginWithKakao() {
    window.Kakao.Auth.authorize({
      redirectUri: "https://developers.kakao.com/tool/demo/oauth",
    });
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (code) {
      setKakaoCode(code);
    }
  }, []);

  useEffect(() => {
    if (kakaoCode) {
      axios
        .get("http://localhost:8080/auth/kakao/callback", {
          params: { code: kakaoCode },
        })
        .then((response) => {
          const data = response.data;
          if (data.status === "OK") {
            localStorage.setItem("kakao_access_token", data.access_token);
            window.location.href = `http://localhost:5174/login?status=OK&userId=${data.userId}`;
          } else {
            alert("등록된 회원이 아닙니다.");
            navigate("/signUp");
          }
        })
        .catch((error) => {
          console.error("로그인 중 오류 발생:", error);
          alert("로그인 중 오류가 발생했습니다.");
        });
    }
  }, [kakaoCode, navigate]);

  const kakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  const naverLogin = () => {
    window.location.href = naverURL;
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
            <button type="button" className="socialButtonG">
              <FaGoogle style={{ marginRight: "10px" }} /> Google로 로그인
            </button>
            <button
              type="button"
              className="socialButtonK"
              onClick={kakaoLogin}
            >
              <img src={getIconImages(5)} />
              Kakao 로그인
            </button>
            <button
              type="button"
              className="socialButtonN"
              onClick={naverLogin}
            >
              <img src={getIconImages(6)} />
              네이버 로그인
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
