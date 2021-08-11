import React from "react";
import './Header.scss';
import Nav from './../Nav/Nav'
import logo from './../../../assets/svgs/logo.svg';

const Header = () => {
  return(
    <div className="header">
      <div className="header__inner">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>

        <Nav></Nav>
      </div>
    </div>
  );
}

export default Header;