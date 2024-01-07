import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
           <Link to="/">Home</Link> 
            </li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li>
            <button className="login" 
            onClick={() => {
              btnNameReact === "Login"
              ?setbtnNameReact("Logout")
              :setbtnNameReact("Login")
            }}>
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
