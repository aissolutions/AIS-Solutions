import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import Home from "./Home";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="home-navbar-outer-cont ">
      <div className="home-nav-cont nav">
        <div
          className="logo-cont pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            navigate("/");
          }}
        >
          <img src="/logo.png" alt="Logo" />
        </div>
        <div
          className="nav-name"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            navigate("/");
          }}
        >
          <h1>
            &nbsp;<span className="navname">AIS </span>{" "}
            <div className="space"></div> | <div className="space"></div>
            <span className="navname">A</span>pplied{" "}
            <div className="space"></div>
            <span className="navname">I</span>n
            <span className="navname">S</span>ights
          </h1>
        </div>
      </div>
      <div className="nav-hover-btn2"></div>
    </div>
  );
};

export default Navbar;
