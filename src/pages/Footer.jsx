import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }
  function submitFunc() {
    if (input === "") {
      return;
    }
    setInput("")
  }

  return (
    <footer className="footerContainer">
      <div className="footer">
        <div className="grid-item1">
          <h3>
            <Link to="/" className="header">
              About us
            </Link>
          </h3>
          <p>
            With over decades of experience in the construction industry,{" "}
            <span className="companyName">Construction co.</span> is a trusted
            name known for delivering high-quality projects on time and within
            budget.
          </p>
          <div className="social-right footerIcons">
            <p>
              <i className="fa-brands fa-whatsapp icons"></i>
            </p>
            <p>
              <i className="fa-brands fa-facebook icons"></i>
            </p>
            <p>
              <i className="fa-brands fa-instagram icons"></i>
            </p>
            <p>
              <i className="fa-brands fa-twitter icons"></i>
            </p>
          </div>
        </div>

        <div className="grid-item2">
          <h3>
            <Link to="/" className="header">
              Services
            </Link>
          </h3>
          <p>Contruction</p>
          <p>House Renovation</p>
          <p>Painting</p>
          <p>Archicture Design</p>
        </div>
        <div className="grid-item3">
          <h3>
            <Link to="/about" className="header">
              About
            </Link>
          </h3>
          <p>Staff</p>
          <p>Team</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
        <div className="grid-item4">
          <h3>
            <Link to="/blog" className="header">
              Resources
            </Link>
          </h3>
          <p>Security</p>
          <p>Global</p>
          <p>Charts</p>
          <p>Privacy</p>
        </div>
        <div className="grid-item5">
          <h3 className="header nesLetter">SIGN UP TO OUR NEWSLETTER</h3>
          <div className="inputBtn">
            <input
              type="text"
              value={input}
              className="subscribe"
              placeholder="Enter Your Email"
              onChange={handleChange}
              required
            />
            <button className="subscribeBtn" onClick={submitFunc}>
              Subscribe
            </button>
          
          </div>
        </div>
      </div>
      <div className="copyRight">
        <p>
          © <span className="companyName">Construction co.</span> All Rights
          Reserved.
        </p>
        <p> Designed by bigadigitalagency.com</p>
      </div>
    </footer>
  );
};

export default Footer;
