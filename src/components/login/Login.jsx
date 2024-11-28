import React from "react";
import "../../css/Login.css"; // 스타일 파일을 import 합니다.
import { Link, useNavigate } from "react-router-dom";
import { getIconImages } from "../../js/icon/icon";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI_V1;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login`;

  const NAVER_CLIENT_ID = import.meta.env.VITE_NANER_CLIENT_ID;
  const NAVER_REDIRECT_URI = import.meta.env.VITE_NAVER_REDIRECT_URI;
  const NAVER_STAT = Math.random().toString(36).substring(2, 15);
  const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${NAVER_STAT}&redirect_uri=${NAVER_REDIRECT_URI}&auth_type=reauthenticate`;
  const flatFormType = sessionStorage.getItem("flatFormType");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (flatFormType === "K") {
      const kakaoCode = params.get("code");
      if (kakaoCode) {
        axios
          .get("http://localhost:8080/auth/kakao/callback", {
            params: { code: kakaoCode },
          })
          .then((response) => {
            const data = response.data;
            if (data.status === "OK") {
              localStorage.setItem("kakao_access_token", data.access_token);
              navigate(`/login?status=OK&userId=${data.userId}`);
            } else {
              Swal.fire({
                icon: "error",
                title: "등록된 회원이 아닙니다.",
              });
              navigate("/signUp");
            }
          })
          .catch((error) => {
            console.error("로그인 중 오류 발생:", error);
            Swal.fire({
              icon: "error",
              title: "로그인 중 오류가 발생했습니다.",
            });
          });
      }
    } else if (flatFormType === "N") {
      const naverCode = params.get("code");

      if (naverCode) {
        axios
          .get("http://localhost:8080/auth/naver/callback", {
            params: { code: naverCode, state: NAVER_STAT },
          })
          .then((response) => {
            const data = response.data;
            if (data.status === "OK") {
              localStorage.setItem("naver_access_token", data.access_token);
              navigate(`/login?status=OK&userId=${data.userId}`);
            } else {
              Swal.fire({
                icon: "error",
                title: "등록된 회원이 아닙니다.",
              });
              navigate("/signUp");
            }
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              icon: "error",
              title: "로그인 중 오류가 발생했습니다.",
            });
          });
      }
    }
  }, [navigate, flatFormType, NAVER_STAT]);

  const kakaoLogin = () => {
    sessionStorage.setItem("flatFormType", "K");
    window.location.href = kakaoURL;
  };

  const naverLogin = () => {
    sessionStorage.setItem("flatFormType", "N");
    window.location.href = naverURL;
  };

  const googleLogin = () => {
    Swal.fire({
      icon: "error",
      title: "구글미구현",
    });
  };
  //홈페이지 로그인
  const homeLoginClick = () => {
    const id = document.getElementById("id").value;
    const pw = document.getElementById("pw").value;

    if (id === "") {
      Swal.fire({
        icon: "error",
        title: "아이디를 입력해주세요.",
      });
      return;
    }
    if (pw === "") {
      Swal.fire({
        icon: "error",
        title: "비밀번호를 입력해주세요.",
      });
      return;
    }
    //request
    axios
      .post(
        "http://localhost:8080/member/signIn",
        {
          id: id,
          pw: pw,
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "SUCCESS") {
          sessionStorage.setItem(
            "memb_no",
            JSON.stringify(response.data.userInfo.memb_no)
          );
          navigate("/");
        } else {
          Swal.fire({
            icon: "error",
            title: "계정을 확인해주세요.",
          });
          return;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      homeLoginClick();
    }
  };

  return (
    <div className="container">
      <div className="loginMain">
        <h1 className="loginTitle">Login</h1>
        <input
          className="input"
          id="id"
          placeholder="이메일 주소"
          type="email"
        />
        <input
          className="input"
          id="pw"
          placeholder="비밀번호"
          type="password"
          onKeyDown={handleKeyDown}
        />
        <button type="button" className="submitButton" onClick={homeLoginClick}>
          로그인
        </button>
        <div className="socialLoginContainer">
          <span className="line"></span>
          <span id="snsLoginTxt">SNS계정으로 로그인</span>
          <span className="line"></span>
        </div>
        <div id="socialLoginButton">
          <button type="button" className="socialButtons" onClick={kakaoLogin}>
            <img src={getIconImages(5)} />
          </button>
          <button type="button" className="socialButtons" onClick={naverLogin}>
            <img src={getIconImages(6)} />
          </button>
          <button type="button" className="socialButtons" onClick={googleLogin}>
            <img src={getIconImages(7)} />
          </button>
        </div>
        <a className="forgotPassword">비밀번호를 잊으셨나요?</a>
      </div>
      <footer className="loginFooter">
        <p>
          LOCKEY를 처음 사용하시나요?{" "}
          <Link to="/signUp" className="signUp">
            가입하기
          </Link>
        </p>
        <p>LOCKEY 이용 약관과 개인정보 처리 방침에 동의합니다.</p>
      </footer>
    </div>
  );
};

export default Login;
