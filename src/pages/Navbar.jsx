import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { default as logo } from "../assets/image/logo.PNG";
export const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  function menuOpen() {
    setOpen(!open);
    console.log("clicked", open);
  }
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
      console.log(window.scroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <header className={`${sticky ? "sticky" : ""}`}>
        <nav className="Navcontainer">
          <Link to="/">
            <div className="logo">CityBuilder</div>
          </Link>

          <ul className="desktopMenu">
            <li>
              <NavLink activeClassName="active" to="">Home</NavLink>
           
            </li>
            <li>
            <NavLink activeClassName="active" to="/about">About</NavLink>
            </li>
            <li>
            <NavLink activeClassName="active" to="ourteam">Our Team</NavLink>
            </li>
            <li>
            <NavLink activeClassName="active" to="project">Project</NavLink>
            </li>
            <li>
            <NavLink activeClassName="active" to="blog">Blog</NavLink>
            </li>
            <li>
            <NavLink activeClassName="active" to="contact">Contact</NavLink>
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
            <Link to="">Home</Link>
          </li>
          <li onClick={menuOpen}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={menuOpen}>
            <Link to="ourteam">Our Team</Link>
          </li>
          <li onClick={menuOpen}>
            <Link to="project">Project</Link>
          </li>
          <li onClick={menuOpen}>
            <Link to="blog">Blog</Link>
          </li>
          <li onClick={menuOpen}>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
