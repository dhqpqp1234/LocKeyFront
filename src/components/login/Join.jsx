import React from "react";
import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { filterPhone } from "../../js/regex/regex";
import { filterNullCheckMsg } from "../../js/msg/msg";
import "../../css/Join.css"; // CSS 파일을 임포트

const SignUp = () => {
  const [inputState, setInputState] = useState("");
  const [msgState, setMsgState] = useState("");

  //자동하이픈
  const autoHyphen = (e) => {
    const phoneValue = e.target.value;
    setInputState(phoneValue);
  };

  const phoneValue = filterPhone(inputState);

  //등록 function
  const signUpOnClick = () => {
    //NULL 체크
    const input = document.getElementsByClassName("input");

    const isAnyEmpty = Array.from(input).some((item) => {
      if (item.value === "") {
        alert(filterNullCheckMsg(item.id));
        item.focus();
        return true;
      }
      return false;
    });

    if (isAnyEmpty) {
      return;
    }
  };

  return (
    <div className="container">
      <div className="signUpMain">
        <h1 className="title">회원가입</h1>
        {/* 이메일 주소 입력 */}
        <input
          className="input"
          id="email"
          placeholder="이메일 주소"
          type="email"
          required
        />

        {/* 비밀번호 입력 */}
        <input
          className="input"
          id="pw1"
          placeholder="비밀번호"
          type="password"
          required
        />

        {/* 비밀번호 확인 입력 */}
        <input
          className="input"
          id="pw2"
          placeholder="비밀번호 확인"
          type="password"
          required
        />

        {/* 전화번호 입력 */}
        <input
          onChange={autoHyphen}
          className="input"
          id="ph1"
          placeholder="전화번호"
          type="text"
          value={phoneValue}
          maxLength={13}
          required
        />

        {/* 전화번호 인증 버튼 */}
        <button type="button" className="verifyButton">
          전화번호 인증하기
        </button>

        {/* 인증번호 입력 */}
        <div className="inputContainer">
          <input
            className="input"
            id="ph2"
            placeholder="인증번호 입력"
            type="text"
          />
          <button type="button" className="smsSubmitButton">
            인증 확인
          </button>
        </div>

        {/* 집 주소 입력 */}
        <input
          className="input"
          placeholder="집 주소"
          id="addr"
          type="text"
          required
        />

        {/* 가입하기 버튼 */}
        <button onClick={signUpOnClick} className="submitButton">
          가입하기
        </button>

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
      </div>
    </div>
  );
};

export default SignUp;
