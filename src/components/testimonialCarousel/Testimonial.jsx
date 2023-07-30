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
      
      </div>
    </section>
  );
};

export default Testimonial;
