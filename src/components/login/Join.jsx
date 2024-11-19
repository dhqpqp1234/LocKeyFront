import React from "react";
import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { filterPhone } from "../../js/regex/regex";
import { filterNullCheckMsg } from "../../js/msg/msg";
import "../../css/Join.css"; // CSS 파일을 임포트
import axios from "axios";
import Swal from "sweetalert2";

const SignUp = () => {
  const [inputState, setInputState] = useState("");
  const [msgState, setMsgState] = useState(0);
  const [smsCheck, setSmsCheck] = useState(false);
  const [pwCheck, setPwCheck] = useState(false);
  const [emailState, setEmailStat] = useState(false);
  const navigate = useNavigate();

  //자동하이픈
  const autoHyphen = (e) => {
    const phoneValue = e.target.value;
    setInputState(phoneValue);
  };

  const phoneValue = filterPhone(inputState);

  //이메일 중복확인
  const emailCheckOnClick = () => {
    const email = document.getElementById("email").value;
    const regExp =
      /^[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*@[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,}$/i;

    if (email === "") {
      Swal.fire({
        icon: "error",
        title: "이메일을 입력해주세요.",
      });
      return;
    }

    if (!regExp.test(email)) {
      Swal.fire({
        icon: "error",
        title: "이메일형식으로 입력해주세요.",
      });
      return;
    }

    const idCheckData = {
      id: email,
    };

    axios
      .post("http://localhost:8080/member/getInfo", idCheckData)
      .then((response) => {
        const data = response.data.id;
        if (data !== undefined) {
          Swal.fire({
            icon: "error",
            title: "사용중인 아이디입니다.",
          });
          return;
        } else {
          setEmailStat(true);
          Swal.fire({
            icon: "success",
            title: "사용가능한 아이디입니다.",
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //등록
  const signUpOnClick = () => {
    if (!smsCheck) {
      Swal.fire({
        icon: "error",
        title: "인증번호를 확인해주세요.",
      });
      return;
    }

    if (!pwCheck) {
      Swal.fire({
        icon: "error",
        title: "비밀번호를 확인해주세요.",
      });
      return;
    }

    if (!emailState) {
      Swal.fire({
        icon: "error",
        title: "중복된 아이디입니다.",
      });
      return;
    }

    // //NULL 체크
    const input = document.getElementsByClassName("input");

    const isAnyEmpty = Array.from(input).some((item) => {
      if (item.value === "") {
        Swal.fire({
          icon: "error",
          title: filterNullCheckMsg(item.id),
        });
        item.focus();
        return true;
      }
      return false;
    });

    if (isAnyEmpty) {
      return;
    }

    //등록요청
    const data = {
      id: document.getElementById("email").value,
      email: document.getElementById("email").value,
      pw: document.getElementById("pw2").value,
      memb_name: document.getElementById("name").value,
      ph: document.getElementById("ph2").value,
      address: document.getElementById("addr").value,
      join_type: "H",
      author: "NORM",
    };
    axios
      .post("http://localhost:8080/member/register", data)
      .then((response) => {
        if (response.data.status === "SUCCESS") {
          Swal.fire({
            icon: "success",
            title: "가입이 완료되었습니다.",
          });
          navigate("/signUpComp");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  //메일인증
  const smsRequestOnclick = () => {
    const phoneNumber = document.getElementById("ph1").value;
    if (phoneNumber === "") {
      Swal.fire({
        icon: "error",
        title: "전화번호를 입력해주세요.",
      });
      return;
    }
    if (phoneNumber.length < 13) {
      Swal.fire({
        icon: "error",
        title: "전화번호 자리수를 확인해주세요.",
      });
      return;
    }
    const randomSmsNumber = 456128; //현질해야 해준데.. 임시로 걍 넣었어 시블
    setMsgState(randomSmsNumber);
    Swal.fire({
      icon: "info",
      title: "인증번호가 요청되었습니다.",
    });
    // axios
    //   .post("http://localhost:8080/sms/send", {
    //     ph: phoneNumber,
    //   })
    //   .then((data) => {
    //     //임시 (잔액충전해야한데 씨불..) 받아서 state에 저장해야해
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  //인증번호를 확인해볼까
  const smsNumberCheck = () => {
    const smsCheckInput = Number(document.getElementById("ph2").value);
    if (smsCheckInput === "") {
      Swal.fire({
        icon: "error",
        title: "인증번호를 입력해주세요.",
      });
      return;
    }
    if (msgState !== smsCheckInput) {
      Swal.fire({
        icon: "error",
        title: "인증번호를 확인해주세요.",
      });
      return;
    } else {
      Swal.fire({
        icon: "success",
        title: "확인되었습니다.",
      });
      setSmsCheck(true);
    }
  };
  //비밀번호확인
  const pwCheckChange = () => {
    const pw1 = document.getElementById("pw1").value;
    const pw2 = document.getElementById("pw2").value;

    if (pw1 === "" || pw2 === "") {
      Swal.fire({
        icon: "error",
        title: "비밀번호를 입력해주세요.",
      });
      return;
    }

    if (pw1 !== pw2) {
      Swal.fire({
        icon: "error",
        title: "비밀번호를 확인해주세요.",
      });
      return;
    } else {
      Swal.fire({
        icon: "success",
        title: "비밀번호가 일치합니다.",
      });
      setPwCheck(true);
    }
  };
  return (
    <div className="containerJ">
      <div className="signUpMain">
        <h1 className="title">회원가입</h1>
        <div className="inputContainer">
          <input
            className="input"
            id="email"
            placeholder="이메일 주소"
            type="email"
            required
          />
          <button
            type="button"
            className="smsSubmitButton"
            onClick={emailCheckOnClick}
          >
            중복확인
          </button>
        </div>
        <input
          className="input"
          id="pw1"
          placeholder="비밀번호"
          type="password"
          required
        />
        <input
          className="input"
          id="pw2"
          placeholder="비밀번호 확인"
          type="password"
          required
          onBlur={pwCheckChange}
        />
        <input
          className="input"
          id="name"
          placeholder="이름"
          type="text"
          maxLength={13}
          required
        />
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
        <button
          type="button"
          className="verifyButton"
          onClick={smsRequestOnclick}
        >
          전화번호 인증하기
        </button>
        <div className="inputContainer">
          <input
            className="input"
            id="ph2"
            placeholder="인증번호 입력"
            type="text"
          />
          <button
            type="button"
            className="smsSubmitButton"
            onClick={smsNumberCheck}
          >
            인증 확인
          </button>
        </div>
        {/* <div className="inputContainer">
          <input
            className="input"
            id="addr"
            placeholder="주소"
            type="text"
            readOnly
          />
          <button type="button" className="smsSubmitButton">
            주소검색
          </button>
        </div> */}
        <input
          className="input"
          placeholder="집 주소"
          id="addr"
          type="text"
          required
        />
        <button onClick={signUpOnClick} className="submitButton">
          가입하기
        </button>
        <div className="socialLoginContainerJ">
          <button className="socialButtonF">
            <FaFacebook style={{ marginRight: "10px" }} /> Facebook으로 가입
          </button>
          <button className="socialButtonG">
            <FaGoogle style={{ marginRight: "10px" }} /> Google로 가입
          </button>
        </div>
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
