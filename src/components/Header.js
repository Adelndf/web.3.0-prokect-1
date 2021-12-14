import React, { useState } from "react";
import "./Header.css";
import Logo from "../images/cryptopunk-logo.png";
import { SearchIcon, XIcon } from "@heroicons/react/solid";
import { MenuIcon } from "@heroicons/react/outline";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="" />
      </div>
      <div className="header__search">
        <SearchIcon className="searchIcon" />
        <input type="text" placeholder="Collection, item or user.." />
      </div>
      <div onClick={() => setToggle(!toggle)} className="header__menuMobile">
        {toggle ? (
          <XIcon className="menuIcon" />
        ) : (
          <MenuIcon className="menuIcon" />
        )}
      </div>
      <div
        className={toggle ? `header__menu header__menuActive` : `header__menu`}
      >
        <div className="header__menuList" onClick={() => setToggle(false)}>
          <p className="header__menuLink">Drops</p>
          <p className="header__menuLink">Marketplace</p>
          <p className="header__menuLink">Create</p>
        </div>
      </div>
      <div className="header__btns">
        <div className="header__btnContainer">get in now</div>
      </div>
    </div>
  );
}

export default Header;
