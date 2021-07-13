import React from "react";
import Fade from "react-reveal/Fade";
import { useHistory } from "react-router-dom";
const Banner = ({ title, description, button, url, right }) => {
  const history = useHistory();
  return (
    <div className="banner">
      <img src={url} alt="" />

      <div className={right ? "bannerInfoRight" : "bannerInfo"}>
        <Fade bottom>
          <h1 className="bannerText">{title}</h1>

          <p className="bannerText2">{description}</p>
        </Fade>

        <div className="button" onClick={() => history.push("/signin")}>
          {button}
        </div>
      </div>
    </div>
  );
};

export default Banner;
