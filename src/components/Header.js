import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export default Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button classname="login" 
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
