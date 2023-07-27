import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { default as logo } from "../assets/icons/logo.png";
export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  function menuOpen() {
    setOpen(!open);
  }
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <header className={`${sticky ? "sticky" : ""}`}>
        <nav className="Navcontainer">
          <Link to="/">
            <div className="logo" onClick={scrollTop}>
              <img src={logo} alt="logo" width="100%" />
              <span className="logo-span">C-co.</span>
            </div>
          </Link>

          <ul className="desktopMenu">
            <li>
              <NavLink
                activeclassname="active"
                to="/"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                delay={1000}
              >
                Home
              </NavLink>
            </li>
            <li onClick={scrollTop}>
              <NavLink activeclassname="active" to="/about">
                About
              </NavLink>
            </li>

            <li onClick={scrollTop}>
              <NavLink activeclassname="active" to="project">
                Project
              </NavLink>
            </li>
            <li onClick={scrollTop}>
              <NavLink activeclassname="active" to="blog">
                Blog
              </NavLink>
            </li>
            <li onClick={scrollTop}>
              <NavLink activeclassname="active" to="contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div
            onClick={menuOpen}
            className={`${open ? "hamburger active" : "hamburger"}`}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
      <div className={`${open ? "mobileMenu active" : "mobileMenu"}`}>
        <ul className="menuUl">
          <li onClick={menuOpen}>
            <Link
              to="/"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={1000}
            >
              Home
            </Link>
          </li>
          <li
            onClick={() => {
              menuOpen();
              scrollTop();
            }}
          >
            <Link to="/about">About</Link>
          </li>

          <li
            onClick={() => {
              menuOpen();
              scrollTop();
            }}
          >
            <Link to="project">Project</Link>
          </li>
          <li
            onClick={() => {
              menuOpen();
              scrollTop();
            }}
          >
            <Link to="blog">Blog</Link>
          </li>
          <li
            onClick={() => {
              menuOpen();
              scrollTop();
            }}
          >
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
