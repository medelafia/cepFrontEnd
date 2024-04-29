import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import "./layout.css"

export default function HomeLayout(){
    const navigate = useNavigate()
    const handleSignInClick = () => {
        navigate("/login")
    }
    return (
        <>
            <div className="custom-navbar custom-bg-primary d-flex align-items-center justify-content-between custom-container"> 
                <div className="custom-text-secondary d-flex align-items-center justify-content-center title">
                    <i className="fa-solid fa-plane plane"></i><span>travelboot</span>
                </div>
                <ul className="d-flex align-items-center justify-content-center custom-text-secondary">
                    <Link to="/" className="mx-2 active custom-text-secondary text-decoration-none hover">home</Link>
                    <Link to='/services' className="mx-2 text-decoration-none custom-text-secondary hover">Services</Link>
                    <Link to="/about" className="mx-2 text-decoration-none custom-text-secondary hover">About</Link>
                    <Link to="/contact" className="mx-2 text-decoration-none custom-text-secondary hover">Contact</Link>
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