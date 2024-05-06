import { useState } from "react"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import image from "../../assets/login.jpg"
import "./login.css"
export default function Login() {
    const navigate = useNavigate()
    const [error ,setError] = useState(null)
    const handleBackClick = () => {
        navigate("/")
    }
    const username = useRef("") ; 
    const password = useRef(""); 
    const handleSignInClick = (e) => {
        e.preventDefault()
        const usernameValue = username.current.value ; 
        const passwordValue = password.current.value ; 
        if(passwordValue == "" || username == "") {
            setError({errorContent : "all fields are required"})
        } else {
            const data = {
                username : usernameValue , 
                password : passwordValue 
            }
            const requestOptions = {
                method : "POST" , 
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify(data) 
            }
            fetch("http://localhost:8089/accounts/login" , requestOptions)
            .then(res => console.log(res)) 
        }

    }
    return(
        <div className="d-flex w-100 login">

            <div className="image-section w-50">
                <img src={image} className="image-login"/>
            </div>
            <div className="login-section d-flex align-items-center flex-column p-5 w-50 position-relative justify-content-center bg-light">
                <button className="back-home btn-light btn position-absolute" onClick={handleBackClick}><i className="fa-solid fa-arrow-left"></i></button>
                { error!=null &&
                     <div className="alert alert-danger position-absolute w-75 alert-dismissible d-flex">
                        all fields are required
                        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                    </div>
                }
                <div className="title text-center w-100 my-3 text-capitalize">
                    welcome to <span className="custom-text-secondary">travelboot</span>
                </div>
                <form className="w-100 px-5">
                    <div className="form-group my-3">
                        <input type="text" className="form-control" placeholder="enter your username" ref={username}/> 
                    </div>
                    <div className="form-group my-3">
                        <input type="password" className="form-control" placeholder="enter your password" ref={password}/> 
                    </div>
                    <div className="form-group my-1 d-flex">
                        <input type="checkbox" className="form-check" id="remember-me"/>
                        <label htmlFor="remember-me" className="text-lowercase mx-1">remember me</label>
                    </div>
                    <button className="custom-btn-secondary btn my-1 w-100" onClick={handleSignInClick}>Sign In</button>
                    <div className="text-center my-2">dont have account?<a className="text-primary" href="#">create account</a></div> 
                </form>
            </div>
        </div>
    )
}