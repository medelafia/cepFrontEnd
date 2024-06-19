import { NavigateNextRounded } from "@mui/icons-material";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function ForgotPassword() {
    const emailRef = useRef() 
    const navigate = useNavigate()
    const changePassword = () => {
        const emailValue = emailRef.current.value 
        if(emailValue.trim() != "") {
            fetch("http://localhost:8089/accounts/resetPasswordByEmail/" + emailValue , {
                method : "POST" , 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    }, 
            })
            .then(res => {
                if (res.status == 200) {
                    Swal.fire({
                        icon : "success" ,
                        title : "reset link is sended , check your email" ,
                        timer : 2000 
                    })
                    navigate("/")
                }else if(res.status == 404){
                    Swal.fire({
                        icon : "error" ,
                        title : "your email not found , register" ,
                        timer : 2000 
                    })
                }
            })
        }
    }
    return (
        <div className="page d-flex align-items-center justify-content-center">
            <div style={{width : "30%"}}>
                <h4 className="text-capitalize text-center">did you forgot your password ?</h4>
                <p className="text-secondary">enter your email you're using for your account bellow</p>
                <div className="form-group">
                    <label htmlFor="" className="form-label">email :</label>
                    <input type="email" placeholder="enter your email" className="form-control" ref={emailRef}/>
                </div>
                <button className="btn custom-btn-secondary w-100 my-3" onClick={changePassword}>request reset link</button>
                <Link to="/" className="custom-text-secondary text-center">back to sign in</Link>
            </div>
        </div>
    )
}