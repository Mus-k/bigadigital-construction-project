import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import Arrows from "./Arrows";
import SliderData from "./SliderData";
import "./Slider.css";
import Dots from "./Dots";
let len = SliderData.length - 1;
const Slides = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <div className="slider-container">
      <Slider activeIndex={activeIndex} SliderData={SliderData} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />

      <Dots
        activeIndex={activeIndex}
        SliderData={SliderData}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Slides;
