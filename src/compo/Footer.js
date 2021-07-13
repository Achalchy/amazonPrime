import React from "react";
import index from "../images/index.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerImage">
        <img src={index} alt="" />
      </div>
      <div className="footerInfo">
        <a href="">Terms and Privacy Notice</a>
        <a href="">Send us feedback</a>
        <a href="">Help</a>
        <p>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default Footer;
