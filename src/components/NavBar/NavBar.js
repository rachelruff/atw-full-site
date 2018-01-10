import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "./Logo.png";

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="navbar-container">
          <div className="logo-container">
            <Link to="/">
              <img className="logo-image" src={Logo} alt="" />
            </Link>
          </div>
          <div className="navbar-links-container">
            <ul className="navbar-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/storefront">Gear Rentals</Link>
              </li>
              <li>
                <Link to="/videoform">Video Editing</Link>
              </li>
              <li>
                <Link to="/myaccount">My Account</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default NavBar;
