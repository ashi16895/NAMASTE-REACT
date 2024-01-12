import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from "../utils/UserContext";

export default Header = () => {
  
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  return (
    <div className="flex justify-between shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4">
          <li className="px-4">Online Status : {onlineStatus? "🟢" : "🔴"}</li>
          <li className="px-4">
           <Link to="/">Home</Link> 
            </li>
          <li className="px-4"><Link to="/about">About us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <button className="login" 
            onClick={() => {
              btnNameReact === "Login"
              ?setbtnNameReact("Logout")
              :setbtnNameReact("Login")
            }}>
              {btnNameReact}
            </button>
          </li>
          <li>
            <h4 className="font-bold">{loggedInUser}</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};
