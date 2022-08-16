import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Nabbar/Navbar.css";
// import logo from "../../images/twi.jpeg";
import logo from '../../images/twi.png'

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" />
          <div className="hamburger-lines">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>
          <ul className="menu-items">
            <li>
              {/* <a href="/">Home</a> */}
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            {/* <li>
              <NavLink to={"/aboutus"} className={({isActive}) => isActive ? "active" : ""}>About Us</NavLink>
            </li> */}
            <li>
              {/* <a href="/activities">Activities</a> */}
              <NavLink
                to={"/activities"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Activities
              </NavLink>
            </li>
            <li>
              {/* <a href="/contactus">Contact Us</a> */}
              <NavLink
                to={"/contactus"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="lona">
            <Link to={"/"}>
              <img className="logo" src={logo} alt="logo" />
            </Link>
            <Link to={"/"}>
              <h1> T W I </h1>{" "}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
