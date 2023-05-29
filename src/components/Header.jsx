import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <NavLink className="logo" to="/">
          LOGO
        </NavLink>
        <ul>
          <li>
            <NavLink to="/modal">Modal</NavLink>
          </li>
          <li>
            <NavLink to="/quiz">Quiz</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
