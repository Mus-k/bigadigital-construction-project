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
        <h2 className="missionTitle">Welcome to Home Builder </h2>
        <h2 className="rightTitle">We create and turn into reality </h2>
        <p className="missionText">
          {" "}
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
        <div className="accordionDisplay">
          <AccordionComponent />
        </div>
      </div>
    </div>
  );
};

export default Mission;
