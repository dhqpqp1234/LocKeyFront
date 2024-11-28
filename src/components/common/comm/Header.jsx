import React, { useState } from "react";
import { getIconImages } from "../../../js/icon/icon";
import Tap from "./Tap";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import "../../../css/Header.css";
import Swal from "sweetalert2";

const Header = () => {
  // 메뉴 표시 여부 상태
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [personIconState, setPersonIconState] = useState(false);
  const navigate = useNavigate();
  const memb_no = sessionStorage.getItem("memb_no");

  const otherMenuOnClick = () => {
    // 메뉴 토글
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="header">
      <div className="headerIcon">
        <img
          onClick={() => {
            navigate("/");
          }}
          className="logo"
          id="logo"
          src={getIconImages(1)}
          alt="locKey"
        />
        <div className="headerMenu">
          <Tap className="headerTapDiv" tapNo={0} />
          <Tap className="headerTapDiv" tapNo={1} />
          <Tap className="headerTapDiv" tapNo={2} />
          <Tap className="headerTapDiv" tapNo={3} />
          <Tap className="headerTapDiv" tapNo={4} />
          {memb_no !== null ? (
            <img
              id="headerPeople"
              src={getIconImages(9)}
              onClick={() => {
                setPersonIconState(!personIconState);
              }}
            />
          ) : (
            <Button btnNo={3} />
          )}
          {/* 사람아이콘 */}
          <div className={`personIcon ${personIconState ? "show" : ""}`}>
            <div
              className="menuItem"
              onClick={() => {
                sessionStorage.removeItem("memb_no");
                setPersonIconState(false);
                Swal.fire({
                  icon: "success",
                  title: "로그아웃 되었습니다.",
                });
                navigate("/");
              }}
            >
              로그아웃
            </div>
          </div>
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
