import { useState, useEffect, useRef } from "react";
import "../../../css/Button.css";

const Button = ({ btnNo }) => {
  const [buttonState, setbuttonState] = useState(btnNo);
  const buttonRef = useRef(0);

  useEffect(() => {
    switch (btnNo) {
      case 1:
        setbuttonState("App Store");
        buttonRef.current = 1;
        break;
      case 2:
        setbuttonState("Google Play");
        buttonRef.current = 2;
        break;
      case 3:
        setbuttonState("로그인");
        buttonRef.current = 3;
        break;
      case 4:
        setbuttonState("로그아웃");
        buttonRef.current = 4;
        break;
      default:
        setbuttonState("버튼");
        break;
    }
  }, [btnNo]);

  const onButtonClick = () => {
    alert(buttonRef.current);
  };

  return (
    <button onClick={onButtonClick} className={`button${btnNo}`}>
      {buttonState}
    </button>
  );
};

export default Button;
