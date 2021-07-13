import React from "react";
import index from "../images/index.png";
import LanguageIcon from "@material-ui/icons/Language";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="leftHeader">
        <img src={index} alt="Logo" />
      </div>
      <div className="rightHeader">
        <div className="language">
          <LanguageIcon />
          <h2>EN</h2>
          <ArrowDropDownIcon />
        </div>
        <div className="links">
          <Link to="/signin">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
