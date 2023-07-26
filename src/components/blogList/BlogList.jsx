import React from "react";
import "./BlogList.css";
import { default as rightArrow } from "../../assets/icons/right-arrow-to-details.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const BlogList = ({ blog }) => {
  const {
    id,
    title,
    img1,
    img2,
    description,

    date,
  } = blog;

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <motion.div
    className="blogList"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay: 0.2, duration: 1.1 }}
    variants={{
      hidden: {
        opacity: 0,
        y: 100,
      },
      visible: {
        opacity: 1,
        y: 0,}
    }}>
      <img
        className="blog-images"
        src={img1}
        srcSet={`${img1} 300w, ${img1} 768w, ${img2} 1280w`}
        alt={title}
      />
      <div>
        <div>
          <h3 className="blogListTitle">{title}</h3>
          <p className="blogDate">Date: {date}</p>
        </div>

        <p
          style={{
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            display: "-webkit-box",
          }}
          className="blogDescription"
        >
          {description}
        </p>
        <p onClick={scrollTop}>
          <Link to={`/blog/${id}`} className="moreDeatils">
            {" "}
            read more <img src={rightArrow} alt="right Arrow" width="100%" />
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default BlogList;
