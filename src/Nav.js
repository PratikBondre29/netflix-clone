import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import logo1 from "./logo1.png";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="netflix_logo" src={logo} alt="Netflix Logo" />
      <img className="netflix_avatar" src={logo1} alt="Netflix avatar" />
    </div>
  );
}

export default Nav;
