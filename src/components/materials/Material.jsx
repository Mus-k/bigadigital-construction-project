import React from "react";
import "./Material.css";

const Material = () => {
  return (
    <div className="material">
      <div className="material-nested">
        <div className="material-logo">
          <p>
            {" "}
            <i className="fa-solid fa-person-digging"></i>
          </p>
        </div>
        <h3 className="material-Title">Construction</h3>
        <p className="materialText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="material-nested">
        <div className="material-logo">
          <i className="fa-regular fa-building"></i>
        </div>
        <h3 className="material-Title">House Renovation</h3>
        <p className="materialText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="material-nested">
        <div className="material-logo">
          <i className="fa-solid fa-paintbrush"></i>
        </div>
        <h3 className="material-Title">Painting</h3>
        <p className="materialText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="material-nested">
        <div className="material-logo">
          <i className="fa-solid fa-pen-fancy"></i>
        </div>
        <h3 className="material-Title">Architecture Design</h3>
        <p className="materialText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Material;
