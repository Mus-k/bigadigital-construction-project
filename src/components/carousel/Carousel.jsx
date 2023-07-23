import React, { useState } from "react";
import "./Carousel.css";
import CarouselItem from "./CarouselItem";
import { default as im1 } from "../../assets/image/x-desktop-second.jpg";
const Carousel = () => {
  const [activeIndex, setActive] = useState(0);
  const items = [
    { id: 1, description: "blah blah", imag: im1 },
    { id: 2, description: "blah blah", imag: im1 },
    { id: 3, description: "blah blah", imag: im1 },
  ];
  const updateIndex = (newIndex) => {
    console.log("hello world");
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length - 1) {
      newIndex = items.length - 1;
    }
    setActive(newIndex);
  };
  return (
    <div className="carouselSlider">
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {items &&
            items.map((item) => {
              return (
                <CarouselItem
                  item={item}
                  activeIndex={activeIndex}
                  updateIndex={updateIndex}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
