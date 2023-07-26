import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footer">
        <div className="grid-item1">
          <h3>
            <Link to="" className="header">
              About us
            </Link>
          </h3>
          <p>
            With over decades of experience in the construction industry,{" "}
            <span className="companyName">Construction co.</span> is a trusted name
            known for delivering high-quality projects on time and within
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
            <Link to="" className="header">
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
            <Link to="" className="header">
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
            <Link to="" className="header">
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
              className="subscribe"
              placeholder="Enter Your Email"
            />
            <button className="subscribeBtn">Subscribe</button>
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
