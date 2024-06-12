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
import Products from "../../components/Products";
import Alert from "../../components/Alert";
import { useRef } from "react";
import ReviewModal from "../../components/ReviewModal";

export default function HomeLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = useSelector(userSelector) ; 
  const dispatch = useDispatch() ; 
  const [showUserProfile , setShowUserProfile] = useState(false) ; 
  const [showAlert ,  setShowAlert] = useState(false) ; 
  const loginBtn = useRef() ; 
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
  const [showProduct , setShowProduct] = useState(false) ; 
  const toogleProduct = () => {
    setShowProduct(!showProduct) ; 
  }
  const showAlertToogler = (type , text) => {
    setShowAlert(!showAlert ) ; 
  }
  return (
    <div className="position-relative">
      <div className="custom-navbar border-bottom sticky-top bg-white d-flex align-items-center justify-content-between custom-container" style={{zIndex : 10 }}>
        <Brand />
        <div className="d-lg-flex d-sm-none flex-lg-row align-items-center justify-content-center text-capitalize">
          <Link
            to="/"
            className={`mx-3 text-decoration-none hover ${
              pathname == "/" ? "active" : "custom-text-secondary"
            }`}
          >
            home
          </Link>
          <Link
            to="/about"
            className={`mx-3 text-decoration-none hover ${
              pathname == "/about"? "active" : "custom-text-secondary"
            }`}
          >
            why chose us? 
          </Link>
          <button className="btn" onClick={toogleProduct}>
            <span>product</span>
            {!showProduct ? <i class="fa-solid fa-chevron-down"></i> : <i class="fa-solid fa-chevron-up  ms-1"></i> }
          </button>
          <Link
            to="/contact"
            className={`mx-3 text-decoration-none hover ${
              pathname == "/contact" ? "active" : "custom-text-secondary"
            }`}
          >
            Contact 
          </Link>
        </div>
        <div className="custom-text-primary">
              <div class="dropdown d-inline">
                <button type="button" className="custom-btn btn custom-text-primary rounded-pill" data-bs-toggle="dropdown">
                  <i className="fa-solid fa-user"></i>
                </button>
                <ul class="dropdown-menu p-3 rounded-5" style={{width : "300px"}}>
                {user != null ? <div>
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
                </div> : 
                <div className="d-flex align-items-center justify-content-center flex-column w-100">
                  <Brand className="mb-3"/> 
                  <button className="btn custom-btn-primary my-2 w-100 rounded-pill"
                    data-bs-toggle="modal" 
                    data-bs-target="#loginModal"
                    ref={loginBtn}
                  >login</button>
                  <button className="btn custom-btn-outlined-primary my-2 w-100 rounded-pill"
                    onClick={()=>navigate("/signUp")}
                  >sign in</button>
                </div>
                } 
              </ul> 
              </div>
              <button className="btn ms-1 custom-text-primary rounded-circle"><i class="fa-solid fa-lightbulb"></i></button>
              <button className="btn ms-1 custom-text-primary rounded-circle" onClick={()=>{navigate("/card")}}><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
        </div>
      <LoginModal />
      <ReviewModal />
      { showAlert && <Alert /> } 
      {showProduct && <Products close={toogleProduct}/>}
      <Outlet />
      <Footer /> 
    </div>
  );
}