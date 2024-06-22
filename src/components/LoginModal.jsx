import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useRef } from "react";
import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../features/userSlice";
import {showAlert , hideAlert, ALERT_TYPE} from "../features/pageSlice"
import { TextField } from "@mui/material";
import Swal from "sweetalert2";

export default function LoginModal() {
    const username = useRef() ; 
    const password = useRef() ; 
    const rememberMeRef = useRef()
    const [errors , setErrors] = useState(null)
    const dispatch = useDispatch() 
    const closeLoginModal = () => {
      document.querySelector(".btn-close").click()
    }
    const navigate = useNavigate()
    const verifierLogin = (res) => {
      switch(res.status) {
        case 200 : return res.json() ; 
        case 404 : setErrors("you are not registred") ; 
          return null 
        case 401 : setErrors("incorrect password")
          return null 
      }
    }
    const loginSuccess = (userInfo ) => {
      dispatch(login(userInfo))
      closeLoginModal() ;   
      if(userInfo.accountType ==( "PROVIDER" || "ADMIN")) navigate("/dashboard/")
      Swal.fire({
        timer : 2000 , 
        text : "the login successful" , 
        text : "welcome" , 
        icon: "success"
      })
    }
    const loginHandling = (e) => {
      e.preventDefault()
      const usernameValue = username.current.value 
      const passwordValue = password.current.value ;   
      if(usernameValue.trim() != "" && passwordValue.trim() != "") {
        fetch("http://localhost:8089/accounts/login" , {
          method : "POST" , 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
          body : JSON.stringify({
            username : usernameValue  , 
            password : passwordValue 
          })
        })
        .then(res => verifierLogin(res))
        .then(data  => {
          if(data != null)loginSuccess(data)
        })
      }
    }
    const onSuccesGoogleLogin = (cred) => {
      const details = jwtDecode(cred.credential)
      const formData = new FormData()
      formData.append("email" , details.email )
      fetch("http://localhost:8089/accounts/loginByEmail" , {
          method : "POST" , 
          body : formData
        })
        .then(res => verifierLogin(res)) 
        .then(data => {
          console.log(data)
          if( data != null ) {
            loginSuccess(data)
          }
        })
    }
  return (
    <div className="modal custom-rounded" id="loginModal">
      <div className="modal-dialog">
        <div className="modal-content"> 
          <div className="p-4 d-flex align-items-center justify-content-end">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            { errors && <div className="px-3">
              <div className="alert alert-danger alert-dissmisble alert-dismissible">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                {errors}
              </div>
            </div> }
            <h1 className="custom-text-primary text-capitalize text-center font-secondary">login</h1>
            <div className="login-section d-flex align-items-center flex-column p-3 position-relative justify-content-center">
                <form className="w-75 mb-3" >
                    <div className="form-group my-3">
                        <TextField label="username or email" fullWidth inputRef={username} />
                    </div>
                    <div className="form-group my-3">
                        <TextField label="password" fullWidth inputRef={password} />
                        <div className="d-flex justify-content-end">
                          <Link onClick={closeLoginModal} to="/forgotPassword">forgot password</Link>
                        </div>
                    </div>
                    <div className="form-group my-1 d-flex">
                        <input type="checkbox" className="form-check" id="remember-me" ref={rememberMeRef}/>
                        <label htmlFor="remember-me" className="text-lowercase mx-1">remember me</label>
                    </div>
                    <button className="custom-btn-secondary btn my-1 w-100" type="submit" onClick={loginHandling}>Sign In</button>
                    <div className="text-center my-2">dont have account?<a className="text-primary" href="/signUp">create account</a></div> 
                </form>
                <div className="d-flex align-items-center justify-content-center flex-column">
                    <GoogleLogin className="sign" 
                      onSuccess={onSuccesGoogleLogin}
                      onError= {(e)=>{
                        Swal.fire({
                          title : "error to login with this account" , 
                          icon : "error" , 
                          timer :  2000 , 
                        })
                      }}
                      />
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
  );
}
