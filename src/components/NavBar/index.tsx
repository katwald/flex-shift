import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

import "./index.scss";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar__container">
        <div className="nav-bar__nav">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="nav-bar__nav">
          <NavLink to="/products">product</NavLink>
        </div>
        <div className="nav-bar__nav">
          <NavLink to="/services">Services</NavLink>
        </div>
        <div className="nav-bar__nav">
          <NavLink to="/about">About us</NavLink>
        </div>
      </div>
      <div className="nav-bar__cart">
        <FiShoppingCart className="nav-bar__cart__icon" />
        <span className="nav-bar__cart__badge">10</span>
      </div>
    </div>
  );
};

export default Navbar;
