import React from "react";
import "./Mission.css";
import { default as missionImg } from "../../assets/images/about.png";
import AccordionComponent from "../accordion/AccordionComponent";
const Mission = () => {
  return (
    <div className="mission">
      <div className="mLeft">
        <div className="missionLeft">
          <img src={missionImg} alt="3d project" width="100%" />
        </div>
      </div>
      <div className="missionRight">
        <h2 className="missionTitle">Welcome to Construction Co. </h2>
        <h3 className="rightTitle">your trusted partner in construction and development projects. </h3>
        <p className="missionText">
          {" "}
          we believe that every project is an opportunity to create something remarkable.
        </p>
        <div className="accordionDisplay">
          <AccordionComponent />
        </div>
      </div>
    </div>
  );
};

export default Mission;
