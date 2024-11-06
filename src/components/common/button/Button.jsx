import { useState, useEffect } from "react";
import "../../../css/Button.css";

const Button = ({ btnNo }) => {
  const [buttonState, setbuttonState] = useState(btnNo);

  useEffect(() => {
    switch (btnNo) {
      case 0:
        setbuttonState("App Store");
        break;
      case 1:
        setbuttonState("Google Play");
        break;
      default:
        setbuttonState("버튼");
        break;
    }
  }, [btnNo]);

  return <button className="button">{buttonState}</button>;
};

export default Button;
