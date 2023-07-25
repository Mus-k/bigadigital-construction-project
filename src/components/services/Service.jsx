import React from "react";
import "./Services.css";
import { default as expert } from "../../assets/icons/rating.png";
import { default as quality } from "../../assets/icons/high-quality.png";
import { default as hours } from "../../assets/icons/24-hours-support.png";
const Service = () => {
  return (
    <div className="service">
      <div className="serviceContainer">
      <div className="service-nested expert">
        <div className="ser-imgDiv ">
          <p className="serviceImgDiv">
            <img src={expert} alt="experts" width="100%" />
          </p>
        </div>
        <div className="lines">
          <h2 className="serviceTitle">Expert & Professional</h2>
          <p className="service-text">
          High-quality work, demonstrating with experts and dedication to excellence throughout the project.
          </p>
        </div>
      </div>

      {/*  */}
      <div className="service-nested quality">
        <div className="ser-imgDiv">
          <p className="serviceImgDiv">
            <img src={quality} alt="quality" width="100%" />
          </p>
        </div>
        <div className="lines">
          <h2 className="serviceTitle">High Quality Work</h2>
          <p className="service-text">
          High-quality work, demonstrating with experts and dedication to excellence throughout the project.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="service-nested hours">
        <div className="ser-imgDiv">
          <p className="serviceImgDiv">
            <img className="hourImg" src={hours} alt="quality" width="100%" />
          </p>
        </div>
        <div className="lines">
          <h2 className="serviceTitle">24/7 Help Support</h2>
          <p className="service-text">
          Our company provides 24/7 help and support services, ensuring assistance is readily available to our customers.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Service;
