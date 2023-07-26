import React from "react";
import { motion } from "framer-motion";
import "./Blog.css";
import detailsData from "../api/BlogDetailsData";
import BlogList from "../components/blogList/BlogList";
export const Blog = () => {
  return (
    <motion.div
      className="blog"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mainList">
        {detailsData &&
          detailsData.map((blog) => <BlogList blog={blog} key={blog.id} />)}
      </div>
    </motion.div>
  );
};
