import { Info, NestCamWiredStand } from "@mui/icons-material";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useRef } from "react";
import { useState } from "react";
import ReactFacebookLogin from "react-facebook-login";

export default function SignAccountInfo({currentInfo , onChangeFunct , next}) {
  const usernameRef = useRef()
  const emailRef = useRef() 
  const passwordRef = useRef() 
  const nbPhoneRef = useRef() 
  const accountTypeRef = useRef("costumer") 
  const googleSignUpSuccess = (cred) => {
    const details = jwtDecode(cred.credential)
    onChangeFunct("username" , details.email.substring(0 , details.email.indexOf("@")))    
    onChangeFunct("registerByGoogle" , true)
    onChangeFunct("emailVerified" , details.email_verified)
    onChangeFunct("email" , details.email)
    next()
  }
  return (
    <div>
      <div className="form-group my-3">
        <label htmlFor="">account type : </label>
        <select name="" id="" className="form-select text-secondary"
          ref={accountTypeRef}
          onChange={()=>{onChangeFunct("accountType" , accountTypeRef.current.value)}} 
          defaultChecked={currentInfo.accoubtType}
        >
          <option value="costumer">costumer</option>
          <option value="provider">provider</option>
        </select>
      </div>
      <div className="form-group my-3">
        <label htmlFor="">username : </label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="enter the username"
          ref={usernameRef}
          onChange={()=>{onChangeFunct("username" , usernameRef.current.value)}}
          defaultValue={currentInfo.username}
        />
      </div>
      <div className="form-group my-3 d-flex align-items-center justify-content-between">
        <div className="form-group me-1 w-50">
          <label htmlFor=""> password : </label>
          <input
            type="text"
            className="form-control"
            id="password"
            placeholder="enter the password"
          />
        </div>
        <div className="form-group ms-1 w-50">
          <label htmlFor="">confirm your password : </label>
          <input
            type="text"
            className="form-control"
            id="password"
            placeholder="enter the password"
          />
        </div>
      </div>
      <div className="form-group my-3">
        <label htmlFor=""> email : </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="enter your email"
          ref={emailRef}
          onChange={()=>{onChangeFunct("email" , emailRef.current.value)}}
          defaultValue={currentInfo.email}
        />
      </div>
      <div className="form-group my-3 d-flex align-items-center">
        <select
          name=""
          id=""
          className="form-select me-1"
          style={{ width: "100px" }}
        >
          <option value="">+212</option>
          <option value="">+212</option>
          <option value="">+212</option>
        </select>
        <input
          type="tel"
          className="form-control"
          placeholder="enter the number phone"
          ref={nbPhoneRef}
          onChange={()=>{onChangeFunct("tel" , nbPhoneRef.current.value)}}
          defaultValue={currentInfo.tel}
        />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <span>or</span>
      </div>
      <div className="d-flex align-items-center justify-content-center w-100">
            <button className="btn btn-outline-dark me-2 rounded-circle">
              <i class="fa-brands fa-google"></i> 
            </button>
            <button className="btn custom-btn-outlined-primary ms-2 rounded-circle">
              <i class="fa-brands fa-facebook"></i>
            </button>
        </div>
    </div>
  );
}
