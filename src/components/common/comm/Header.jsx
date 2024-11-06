import React, { useState } from "react";
import { getIconImages } from "../../../js/icon/icon";
import "../../../css/Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="headerIcon">
          <img
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "skyblue",
            }}
            src={getIconImages(1)}
          />
          <div className="headerMenu">
            <div className="headerTapDiv">tap1</div>
            <div className="headerTapDiv">tap2</div>
            <div className="headerTapDiv">tap3</div>
            <div className="headerTapDiv">tap4</div>
            <div className="headerTapDiv">tap5</div>
            <img style={{ marginLeft: "200px" }} src={getIconImages(0)} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
