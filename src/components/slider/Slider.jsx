import React from "react";
import {motion} from 'framer-motion'
const Slider = ({ activeIndex, SliderData }) => {
  return (
    <section>
      {SliderData.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides activeSlide" : "inactiveSlide"}
        >
          <img className="slide-image" src={slide.img1}
          srcSet={`${slide.img1} 300w, ${slide.img1} 768w, ${slide.img2} 1280w`} alt={slide.title} />
         
          <motion.p
           className="slide-text"
        initial="hidden"
          whileInView="visible"
          viewport={{ once: true}}
          transition={{ delay: 0.2, duration: 1.1 }}
          variants={{
            hidden: {
              opacity: 0,
              scale: 0,
            },
            visible: {
              opacity: 1,
              scale: 1,
            },
          }}>{slide.description}</motion.p>
          <h2 className="slide-title">{slide.title}</h2>
        </div>
      ))}
    </section>
  );
};

export default Slider;
