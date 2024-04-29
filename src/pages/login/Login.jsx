import { useNavigate } from "react-router-dom"
import image from "../../assets/login.jpg"
import "./login.css"
export default function Login() {
    const navigate = useNavigate()
    const handleBackClick = () => {
        navigate("/")
    }
    return(
        <div className="d-flex w-100 login">
            <div className="image-section w-50">
                <img src={image} className="image-login"/>
            </div>
            <div className="login-section d-flex align-items-center flex-column p-5 w-50 position-relative justify-content-center">
                <button className="back-home custom-btn-outlined-secondary btn position-absolute" onClick={handleBackClick}><i className="fa-solid fa-arrow-left"></i></button>
                <div className="title text-center w-100 my-3">
                    welcome to <span className="custom-text-secondary">travelboot</span>
                </div>
                <form className="w-100 px-5">
                    <div className="form-group my-3">
                        <input type="text" className="form-control" placeholder="enter your username"/> 
                    </div>
                    <div className="form-group my-3">
                        <input type="password" className="form-control" placeholder="enter your password" /> 
                    </div>
                    <div className="form-group my-1 d-flex">
                        <input type="checkbox" className="form-check" id="remember-me"/>
                        <label htmlFor="remember-me" className="text-lowercase mx-1">remember me</label>
                    </div>
                    <button className="custom-btn-secondary btn my-1 w-100">Sign In</button>
                    <div className="text-center my-2">dont have account?<a className="text-primary" href="#">create account</a></div> 
                </form>
            </div>
        </div>
    )
}