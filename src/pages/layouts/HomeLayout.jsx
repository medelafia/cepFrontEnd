import { useState } from "react";
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./layout.css";

export default function HomeLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleSignInClick = () => {
    navigate("/login");
  };
  const toHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="custom-navbar border-bottom sticky-top bg-white d-flex align-items-center justify-content-between custom-container">
        <div
          onClick={toHome}
          className="text-capitalize custom-text-primary d-flex align-items-center justify-content-center title"
        >
          <i className="fa-solid fa-plane plane"></i>
          <span>travelboot</span>
        </div>
        <ul className="d-flex align-items-center justify-content-center custom-text-secondary">
          <Link
            to="/"
            className={`mx-2 custom-text-secondary text-decoration-none hover ${
              pathname == "/" && "active"
            }`}
          >
            home
          </Link>
          <Link
            to="/services"
            className={`mx-2 text-decoration-none custom-text-secondary hover ${
              pathname == "/services" && "active"
            }`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`mx-2 text-decoration-none custom-text-secondary hover ${
              pathname == "/about" && "active"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`mx-2 text-decoration-none custom-text-secondary hover ${
              pathname == "/contact" && "active"
            }`}
          >
            Contact
          </Link>
        </ul>
        <div className="custom-text-primary">
          <button
            onClick={handleSignInClick}
            className="custom-btn btn custom-text-primary rounded-pill"
            data-bs-toggle="tooltip"
            title="sign in"
          >
            <i class="fa-solid fa-user"></i>
          </button>
          <span>|</span>
          <button
            className="btn custom-btn custom-text-primary rounded-pill"
            data-bs-toggle="tooltip"
            title="dark mode"
          >
            <i class="fa-solid fa-circle-half-stroke"></i>
          </button>
        </div>
      </div>
      <Outlet />
      <div className="footer custom-bg-secondary">footer</div>
    </>
  );
}
