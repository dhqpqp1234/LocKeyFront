import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

const MainMiddle = () => {
  const [textState, setTextState] = useState("");

  //랜더링시 애니메이션
  useEffect(() => {
    const text = "블라블라줄바꿀거야\n블라블라블라블라블라블라블라블라";
    const timer = setTimeout(() => {
      setTextState(text);
    }, 2000);
  }, []);
  return <div className="mainMiddleArea">{textState}</div>;
};

export default MainMiddle;
