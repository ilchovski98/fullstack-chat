import React from 'react';
import { NavLink } from "react-router-dom";
import './Nav.scss';

const Nav = () => {

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink className="nav__link" to="/login">Login</NavLink>
        </li>

        <li>
        <NavLink className="nav__link" to="/register">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;