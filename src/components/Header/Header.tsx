import React from "react";
import style from "./Header.module.scss";
import  DropdownLang  from "../DropdownLang/DropdownLang";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className={style.header}>
      <div className="container flex item-center justify-around">
        <img className = {style.logo} src="img/logo.png" alt="logo" />
        <Navigation />
        <DropdownLang />
      </div>
    </header>
  );
};

export default Header;
