import React from "react";
import "./Intro.css";
import { Link } from "react-router-dom";
import CountUpFunc from "../count up/CountUp";
const Intro = () => {
  return (
    <section className="landingPage">
      <div className="landing-container">
        <h4 className="landingTitle">
          {" "}
          Building a <span className="better">Better</span> Future Together
        </h4>
        <p className="landingText">
          {" "}
          Welcome to <span className="highlight">Construction Co.</span>
          <br /> where we believe in creating exceptional spaces that stand the
          test of time.{" "}
        </p>

        <button className="landingBtn">
          <Link to="/contact">Contact us</Link>
        </button>
      </div>
      <CountUpFunc />
    </section>
  );
};

export default Intro;
