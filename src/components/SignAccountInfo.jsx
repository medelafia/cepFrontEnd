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
  const accountTypeRef = useRef() 
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
      <div className="form-group my-3 d-flex align-items-center justify-content-between">
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
        <div className="form-group me-1">
          <input
            type="text"
            className="form-control"
            id="password"
            placeholder="enter the password"
          />
        </div>
        <div className="form-group ms-1">
          <input
            type="text"
            className="form-control"
            id="password"
            placeholder="enter the password"
          />
        </div>
      </div>
      <div className="form-group my-3">
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
      <div className="form-group my-3">
        <select name="" id="" className="form-select text-secondary"
          ref={accountTypeRef}
          onChange={()=>{onChangeFunct("accountType" , accountTypeRef.current.value)}} 
          defaultChecked={currentInfo.accoubtType}
        >
          <option value="costumer">costumer</option>
          <option value="provider">provider</option>
        </select>
      </div>
      <div className="d-flex align-items-center">
        <hr />
        <span>or</span>
        <hr />
      </div>
      <div className="d-flex align-items-center justify-content-center flex-column">
            <GoogleLogin onSuccess={googleSignUpSuccess} onError={console.log("invalid data")} /> 
        </div>
    </div>
  );
}
