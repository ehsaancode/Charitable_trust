import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div class="container-fluid"></div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg rounded-top p-1.5">
        <div className="container-fluid">
          <Link class="navbar-brand" to="/">
            <img
              src="./images/logo.jpg"
              alt="Logo"
              width="40"
              height="40"
              class="d-inline-block align-text-top"
            />
          </Link>
          <Link className="navbar-brand" to="/">
            NIMCT
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/donate">
                  Donate❤️
                </Link>
              </li>
            </ul>
            <span className="navbar-text">Regd No.: IV-190400313</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
