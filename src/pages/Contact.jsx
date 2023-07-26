import React, { useState } from "react";
import "./Contact.css";
import { default as location } from "../assets/icons/location.png";
import { default as email } from "../assets/icons/mail.png";
import { default as facebook } from "../assets/icons/facebook-logo.png";

import Map from "../components/map/Map";
import { motion } from "framer-motion";
export const Contact = () => {
  const [info, setInfo] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (
      !info.fname ||
      !info.email ||
      !info.message ||
      !info.lname ||
      !info.number
    ) {
      alert("All field is to be fill");
      return;
    }
    console.log(info.fname);
    setInfo({
      fname: "",
      lname: "",
      email: "",
      number: "",
      message: "",
    });
  }
  return (
    <motion.section
      className="contact"
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
          y: 0,
        },
      }}
    >
      <h2 className="title">Contact Us</h2>

      <div className="contact-Container">
        <div className="boxOne">
          <p className="reachUs">Reach us:</p>
          <div className="boxInner">
            <span className="iconSpan">
              <img src={location} alt="" width="100%" />{" "}
            </span>
            <p>Türkiye, Istanbul, sariyer</p>
          </div>
          <div className="boxInner">
            <span className="iconSpan">
              <img src={email} alt="" width="100%" />{" "}
            </span>
            <p>info@bigadigitalagency.com</p>
          </div>
          <div className="boxInner">
            <span className="iconSpan">
              <img src={facebook} alt="" width="100%" />{" "}
            </span>
            <p>+90505054948</p>
          </div>
        </div>
        {/* <div className="boxTwo"> */}
        <Map />
        {/* </div> */}
        <div className="boxThree formBox">
          <h3 className="sendMsg">Send a message</h3>
          <form className="form" onSubmit={handleSubmit}>
            <div className="nestedBox">
              <div className="box1">
                <input
                  type="text"
                  placeholder="First Name"
                  className="firstName"
                  name="fname"
                  value={info.fname}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="lastName"
                  name="lname"
                  value={info.lname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="nestedBox">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="email"
                  name="email"
                  value={info.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="+90505054948"
                  className="phone"
                  name="number"
                  value={info.number}
                  onChange={handleChange}
                />
              </div>
            </div>
            <EditPost message={info.message} handleChange={handleChange} />
            <button className="sendBtn">Send a message</button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

function EditPost({ message, handleChange }) {
  return (
    <textarea
      className="textarea"
      name="message"
      value={message}
      onChange={handleChange}
      placeholder="write your message here"
      rows={9}
      cols={40}
    />
  );
}
