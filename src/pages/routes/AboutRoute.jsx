import React from "react";
import './Routes.css'
import {default as arrow} from "../../assets/icons/right-arrow.png"
import Mission from "../../components/mission/Mission";
import Gallery from "../../components/gallery/Gallery";
import CountUpFunc from "../../components/count up/CountUp";
import Testimonial from "../../components/testimonialCarousel/Testimonial";
import Footer from "../Footer";
export const AboutRoute = () => {
  return (
    <div className="aboutRoute">

      {/* all top information use  the same css style */}
      <div className="route">
      <div className="topInfo">
        <h1 className="titleRoute">About</h1>
        <p className="bottomText">
          Home <span className="arrowImg"><img src={arrow} alt="Arrow" width="100%"/></span>
          
          <span className="activeRoute">About</span>
        </p>
        </div>
      </div>
      <Mission />
      <CountUpFunc />
      <Testimonial />
      <Gallery />
      <Footer />
      {/* <About/> */}
    </div>
  );
};
