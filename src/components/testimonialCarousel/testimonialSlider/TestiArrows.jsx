import React from "react";

const TestiArrows = ({ previousSlide, nextSlide }) => {
  return (
    <div className="btns">
      <button className="btnLeft" onClick={previousSlide}>&#10094;</button>
      <button className="btnRight" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default TestiArrows;
