import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import image from "../../assets/user.jpeg"
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
import Footer from "../../components/Footer";
import Brand from "../../components/Brand";

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
  const navigateToProfile = () => {
    if(user?.accountType == "COSTUMER") {
      navigate("/profile")
    }else {
      navigate("/dashboard")
    }
    
  }
  return (
    <>
      <div className="custom-navbar border-bottom sticky-top bg-white d-flex align-items-center justify-content-between custom-container">
        <Brand />
        <ul className="d-flex align-items-center justify-content-center text-capitalize">
          <Link
            to="/"
            className={`mx-3 text-decoration-none hover pt-3 ${
              pathname == "/" ? "active" : "custom-text-secondary"
            }`}
          >
            home
          </Link>
          <Link
            to="/about"
            className={`mx-3 text-decoration-none hover pt-3 ${
              pathname == "/about"? "active" : "custom-text-secondary"
            }`}
          >
            why chose us? 
          </Link>
          <Link
            to="/"
            className={`mx-3 text-decoration-none hover pt-3 ${
              pathname == "/about"? "active" : "custom-text-secondary"
            }`}
          >
            product
          </Link>
          <Link
            to="/contact"
            className={`mx-3 text-decoration-none pt-3 hover ${
              pathname == "/contact" ? "active" : "custom-text-secondary"
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
            : <div class="dropdown d-inline">
                <button type="button" className="custom-btn btn custom-text-primary rounded-pill" data-bs-toggle="dropdown">
                <img src={image} alt="" style={{width : "30px" , height : "30px" , borderRadius : "50%"}}/>
              </button>
              <ul class="dropdown-menu p-3 rounded-5" style={{width : "300px"}}>
                <div className="d-flex align-items-center justify-content-center flex-column my-3">
                  <img src={image} alt="" style={{width : "60px" , height : "60px" , borderRadius : "50%"}}/>
                  <span className="ms-2 text-capitalize">{user?.username}</span>
                </div>
                <button className="btn custom-btn-outlined-primary w-100 rounded-pill d-flex align-items-center justify-content-center" onClick={navigateToProfile}>
                  <i class="fa-solid fa-gear me-3"></i>
                  <span>manage your account</span>
                </button>
                <hr />
                <div className="d-flex align-items-center justify-content-start p-1 text-secondary cursor-pointer">
                  <i class="fa-solid fa-right-from-bracket"></i>
                  <span className="ms-3" onClick={userLogout}>logout</span>
                </div>
              </ul>
            </div>
          }
        </div>
        </div>
      <LoginModal />
      <Outlet />
      <Footer /> 
    </>
  );
}
