import React, { useState } from "react";
import "./Testimonial.css";

import TestiContent from "./testimonialSlider/TestiSlider";
import TestimonialData from "../../api/TestimonialData";
const len = TestimonialData.length - 1;
const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  function nextSlide() {
    setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
  }
  function previousSlide() {
    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1);
  }
  return (
    <section className="mainTestimonial">
      <div className="testimonial">
        <div className="testi-left">
          <h3 className="testi-title">Testimonial</h3>
          <p className="happyCustomer">Happy customers</p>
          <div className="yellowLine"></div>
          <p className="testi-text">
            We are so delighted with your feedbacks, and we will always provide
            excellence services to all. thanks happy customers.
          </p>
        </div>
        {/* new component */}
        <TestiContent
          indexActive={activeIndex}
          slideData={TestimonialData}
          previousSlide={previousSlide}
          nextSlide={nextSlide}
        />
        {/* <div className="testi-right">
         
          <div className="btns">
            <button className="btnLeft">left</button>
            <button className="btnRight">right</button>
          </div>
          <div className="slideDiv">
            <img
              src={profile}
              alt="profile"
              className="profileImage"
              width="100%"
            />
            <p className="profileName">Musah akamara</p>
            <p className="company">Ceo, of company</p>
            <div className="line"> </div>
            <p className="slideText">
              I couldn't be happier with the service I received. They are
              reliable and attentive to detail, Their customer support is
              wonderful. They went above and beyond to help me.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonial;
