import { Link, Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./layout.css"

export default function HomeLayout(){
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const handleSignInClick = () => {
        navigate("/login")
    }
    return (
        <>
            <div className="custom-navbar sticky-top custom-bg-primary d-flex align-items-center justify-content-between custom-container"> 
                <div className="custom-text-secondary d-flex align-items-center justify-content-center title">
                    <i className="fa-solid fa-plane plane"></i><span>travelboot</span>
                </div>
                <ul className="d-flex align-items-center justify-content-center custom-text-secondary">
                    <Link to="/" className={`mx-2 custom-text-secondary text-decoration-none hover ${pathname == "/" && "active"}`}>home</Link>
                    <Link to='/services' className={`mx-2 text-decoration-none custom-text-secondary ${pathname == "/services" && "active"}`}>Services</Link>
                    <Link to="/about" className={`mx-2 text-decoration-none custom-text-secondary hover ${pathname == "/about" && "active"}`}>About</Link>
                    <Link to="/contact" className={`mx-2 text-decoration-none custom-text-secondary hover ${pathname == "/contact" && "active"}`}>Contact</Link>
                </ul>
                <div>
                    <button className="btn custom-btn-secondary mx-2" onClick={handleSignInClick}>Sign In</button>
                </div>
            </div>
            <Outlet />
            <div className="footer custom-bg-secondary">
                footer    
            </div> 
        </> 

    )
}