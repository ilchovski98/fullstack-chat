import React from "react";
import './Header.scss';
import Nav from './../Nav/Nav'
import { Link } from "react-router-dom";
import logo from './../../../assets/svgs/logo.svg';

const Header = () => {
  return(
    <div className="header">
      <div className="header__inner">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <Nav></Nav>
      </div>
    </div>
  );
}

export default Header;