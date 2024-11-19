import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import "../../../css/Button.css";

const Button = ({ btnNo }) => {
  const [buttonState, setbuttonState] = useState(btnNo);
  const [urlState, setUrlState] = useState("");
  const buttonRef = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    switch (btnNo) {
      case 1:
        setbuttonState("Apple Store");
        setUrlState("https://www.apple.com/kr");
        buttonRef.current = 1;
        break;
      case 2:
        setbuttonState("Google Play");
        buttonRef.current = 2;
        setUrlState("https://play.google.com/store/games");
        break;
      case 3:
        setbuttonState("로그인");
        buttonRef.current = 3;
        setUrlState("/login");
        break;
      case 4:
        setbuttonState("로그아웃");
        buttonRef.current = 4;
        break;
      case 5:
        break;
      default:
        setbuttonState("버튼");
        break;
    }
  }, [btnNo]);

  function buttonClick() {
    if (urlState.startsWith("http")) {
      window.location.href = urlState;
    } else {
      navigate(urlState);
    }
  }

  return (
    <button onClick={buttonClick} className={`button${btnNo}`}>
      {buttonState}
    </button>
  );
};

export default Button;
