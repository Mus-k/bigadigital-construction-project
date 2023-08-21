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
          Elevate your vision from blueprint to reality with our comprehensive
          construction services. From groundbreaking to project completion, we
          bring expertise, precision, and a commitment to excellence to every
          phase of your construction project. With meticulous planning, skilled
          craftsmanship, and adherence to the highest industry standards, we
          create structures that stand the test of time.
        </p>
      </div>
      <div className="material-nested">
        <div className="material-logo">
          <i className="fa-regular fa-building"></i>
        </div>
        <h3 className="material-Title">House Renovation</h3>
        <p className="materialText">
          Transform your living space into a reflection of your dreams with our
          house renovation expertise. Whether it's revamping a single room or
          giving your entire home a fresh look, our team of experienced
          professionals ensures that every detail is attended to. From concept
          to execution, we breathe new life into your space while maintaining
          its unique character.
        </p>
      </div>
      <div className="material-nested">
        <div className="material-logo">
          <i className="fa-solid fa-paintbrush"></i>
        </div>
        <h3 className="material-Title">Painting</h3>
        <p className="materialText">
          Add vibrancy and personality to your property with our expert painting
          services. Our skilled painters blend creativity with precision to
          deliver stunning finishes that enhance the aesthetics of your space.
          Whether it's interior or exterior painting, our meticulous approach
          guarantees seamless and lasting results that leave a lasting
          impression.
        </p>
      </div>
      <div className="material-nested">
        <div className="material-logo">
          <i className="fa-solid fa-pen-fancy"></i>
        </div>
        <h3 className="material-Title">Architecture Design</h3>
        <p className="materialText">
          Turn your concepts into captivating structures with our innovative
          architecture design services. Our team of architects translates your
          aspirations into visually appealing and functional designs. With an
          emphasis on aesthetics, functionality, and sustainability, we create
          architectural marvels that not only stand out but also harmonize
          seamlessly with their surroundings.
        </p>
      </div>
    </div>
  );
};

export default Material;
