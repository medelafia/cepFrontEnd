import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./layout.css";
import {userSelector} from "../../store/selectors/userSelector" ; 
import { logout } from "../../features/userSlice";
import LoginModal from "../../components/LoginModal";
import UserProfile from "../../components/UserProfile";

export default function HomeLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = useSelector(userSelector) ; 
  const dispatch = useDispatch() ; 
  const [showUserProfile , setShowUserProfile] = useState(false) ; 
  const toHome = () => {
    navigate("/");
  };
  const userLogout = () => {
    if(confirm("are you sure?")) {
      dispatch(logout()) 
    }
  }
  return (
    <>
      <div className="custom-navbar border-bottom sticky-top bg-white d-flex align-items-center justify-content-between custom-container position-relative">
        <div
          onClick={toHome}
          className="text-capitalize custom-text-primary d-flex align-items-center justify-content-center"
        >
          <i className="fa-solid fa-plane plane"></i>
          <span className="title">travelboot</span>
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
          { user == null  
            ? <button
              className="custom-btn btn custom-text-primary rounded-pill"
              data-bs-toggle="modal" 
              data-bs-target="#loginModal"
            >
              <i className="fa-solid fa-user"></i>
            </button>
            : <button
                onClick={userLogout}
                className="custom-btn btn custom-text-primary rounded-pill"
                data-bs-toggle="tooltip"
                title="sign out"
              >
                <i className="fa-solid fa-right-from-bracket"></i>
              </button>
          }
          <span>|</span>
          <button
            className="btn custom-btn custom-text-primary rounded-pill"
            data-bs-toggle="tooltip"
            title="dark mode"
          >
            <i className="fa-solid fa-circle-half-stroke"></i>
          </button>
          {user?.accountType == "PROVIDER_ACCOUNT" &&
            <button className="btn custom-btn custom-text-primary rounded-pill">
              <Link to="/dashboard">d</Link>
            </button>
          }
        </div>
        </div>
      <LoginModal />
      <Outlet />
      <div className="footer custom-bg-secondary">footer</div>
    </>
  );
}
