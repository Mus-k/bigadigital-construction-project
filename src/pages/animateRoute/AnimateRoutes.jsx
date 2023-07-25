import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Home";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "../Navbar";
import { Social } from "../../components/Social";
import { AboutRoute } from "../routes/AboutRoute";
import { BlogRoute } from "../routes/BlogRoute";
import { ContactRoute } from "../routes/ContactRoute";
import { ProjectRoute } from "../routes/ProjectRoute";

export default function AnimateRoute() {
  const location = useLocation();

  return (
    <>
      <div className="social">
        <Social />
      </div>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutRoute />} />

          <Route path="/project" element={<ProjectRoute />} />
          <Route path="/blog" element={<BlogRoute />} />
          <Route path="/contact" element={<ContactRoute />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
