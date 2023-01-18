import React from "react";
import {FiHome, FiLogOut, FiLogIn} from 'react-icons/fi'
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar  navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={'/'} className="navbar-brand">
          Forum
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to={"/"} className="nav-link active" aria-current="page">
              <FiHome /> 
              {" "}
              Home
            </Link>
            <Link to={"/"} className="nav-link">
            <FiLogOut />
              {" "}
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
