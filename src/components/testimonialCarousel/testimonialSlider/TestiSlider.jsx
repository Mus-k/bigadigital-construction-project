import React from "react";
import { default as profile } from "../../../assets/image-testimonial/freestocks.jpg";
import TestiArrows from "./TestiArrows";

const TestiContent = ({ indexActive, slideData, previousSlide, nextSlide }) => {
  return (
    <div className="testi-right">
      <TestiArrows previousSlide={previousSlide} nextSlide={nextSlide} />
 
        {slideData &&
          slideData.map((slide, index) => (
            <div style={{backgroundColor:`${slide.color}`}}
            className={index === indexActive ? "slideDiv aktive" : "inaktive"}
            >
        
              <img
                src={slide.image}
                alt="profile"
                className="profileImage"
                width="100%"
              />
              <p className="profileName">{slide.name}</p>
              <p className="company">{slide.title}</p>
              <div className="line"> </div>
              <p className="slideText">{slide.message}</p>
            </div>
          ))}
        
      
    </div>
  );
};

export default TestiContent;
