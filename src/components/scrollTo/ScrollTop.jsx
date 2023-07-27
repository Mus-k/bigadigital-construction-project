import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const yOffset = window.pageYOffset;

    const scrollThreshold = 300;
    setShowButton(yOffset > scrollThreshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <button className="topbutton" onClick={scrollToTop}>
          <i className="fa-solid fa-circle-chevron-up"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
