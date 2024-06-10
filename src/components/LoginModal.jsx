import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { useRef } from "react";
import FacebookLogin from "react-facebook-login";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../features/userSlice";

export default function LoginModal() {
    const username = useRef() ; 
    const password = useRef() ; 
    const rememberMeRef = useRef()
    const [errors , setErrors] = useState({})
    const dispatch = useDispatch() 
    const signIn = (e) => {
      e.preventDefault()
      const usernameValue = username.current.value 
      const passwordValue = password.current.value ;   
      if(usernameValue != "" && passwordValue != "") {
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
        .then(res => {
          if(res.status == 404) {
            alert("you are not registed")
          }else if(res.status == 401) {
            alert("your password is incorrect")
          }
          return res.json() 
        })
        .then(data =>{
          console.log(data)
          dispatch(login(data))  
        } )
      }
    }
    const onSuccesGoogleLogin = (cred) => {
      const details = jwtDecode(cred.credential)
      console.log(details)
      const formData = new FormData()
      formData.append("email" , details.email )
      fetch("http://localhost:8089/accounts/loginByEmail" , {
          method : "POST" , 
          body : formData
        })
        .then(res => {
          if(res.status == 404){
            alert("accounts not found you have to registre") ;
          }
          if(res.ok){
            return console.log(res.json())
          }
          return null })
        .then(data =>{
          dispatch(login({data : data , rememberMe : rememberMeRef.current.checked }))
        } )
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
          <h1 className="custom-text-primary text-capitalize text-center font-secondary">login</h1>
          <div className="modal-body">
          <div className="login-section d-flex align-items-center flex-column p-3 position-relative justify-content-center">
                <form className="w-75 mb-3" >
                    <div className="form-group my-3">
                        <input type="text" className="form-control" placeholder="enter your username" ref={username}/> 
                    </div>
                    <div className="form-group my-3">
                        <input type="password" className="form-control" placeholder="enter your password" ref={password}/> 
                        <div className="d-flex justify-content-end">
                          <Link onClick={()=>{document.querySelector(".btn-close").click()}} to="/forgotPassword">forgot password</Link>
                        </div>
                    </div>
                    <div className="form-group my-1 d-flex">
                        <input type="checkbox" className="form-check" id="remember-me" ref={rememberMeRef}/>
                        <label htmlFor="remember-me" className="text-lowercase mx-1">remember me</label>
                    </div>
                    <button className="custom-btn-secondary btn my-1 w-100" type="submit" onClick={signIn}>Sign In</button>
                    <div className="text-center my-2">dont have account?<a className="text-primary" href="/signUp">create account</a></div> 
                </form>
                <div className="d-flex align-items-center justify-content-center flex-column">
                    <GoogleLogin className="sign" 
                      onSuccess={onSuccesGoogleLogin}
                      />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
