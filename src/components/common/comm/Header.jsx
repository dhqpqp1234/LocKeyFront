import React, { useState } from "react";
import { getIconImages } from "../../../js/icon/icon";
import Tap from "./Tap";
import Button from "../button/Button";
import "../../../css/Header.css";

const Header = () => {
  // 메뉴 표시 여부 상태
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const otherMenuOnClick = () => {
    // 메뉴 토글
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="header">
      <div className="headerIcon">
        {/* <img
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "skyblue",
          }}
          src={getIconImages(1)}
          alt="icon"
        /> */}
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
        />
        <div className="headerMenu">
          <Tap className="headerTapDiv" tapNo={0} />
          <Tap className="headerTapDiv" tapNo={1} />
          <Tap className="headerTapDiv" tapNo={2} />
          <Tap className="headerTapDiv" tapNo={3} />
          <Tap className="headerTapDiv" tapNo={4} />
          <Button btnNo={3} />
          {/* 더보기 아이콘 */}
          <img
            id="mainOtherTap"
            onClick={otherMenuOnClick}
            style={{ cursor: "pointer" }}
            src={getIconImages(0)}
            alt="더보기"
          />

          {/* 메뉴가 보일 때만 아래 항목들이 표시됨 */}
          <div className={`additionalMenu ${isMenuVisible ? "show" : ""}`}>
            <div className="menuItem">추가 메뉴 1</div>
            <div className="menuItem">추가 메뉴 2</div>
            <div className="menuItem">추가 메뉴 3</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
