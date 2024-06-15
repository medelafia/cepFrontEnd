import { Info, NestCamWiredStand } from "@mui/icons-material";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
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
  const telPrefixRef =useRef()
  const [ errors , setErrors ]  = useState({
    username : null, 
    password : null , 
    passwordConfirmation : null , 
    email : null , 
    tel : null 
  })
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
        <FormControl fullWidth  >
          <InputLabel>account type</InputLabel>
          <Select inputRef={accountTypeRef} defaultValue="COSTUMER" >
            <MenuItem value="COSTUMER">costumer</MenuItem>
            <MenuItem value="PROVIDER">provider</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="form-group my-3 d-flex ">
        <TextField label="username" fullWidth className="ms-1" onInput={(e , newText)=>console.log(newText)} inputRef={usernameRef} error={ errors.username != null} helperText={errors.username}/>
        <TextField label="email" fullWidth className="ms-1" inputRef={emailRef} error={ errors.email != null} />
      </div>
      <div className="form-group my-3 d-flex ">
        <TextField type="password" label="password" fullWidth className="ms-1" inputRef={passwordRef} error={ errors.password != null} />
        <TextField type="password" label="confirm password" fullWidth className="ms-1" error={ errors.passwordConfirmation != null}/>
      </div>
      <div className="form-group my-3 d-flex align-items-center">
        <FormControl style={{width : "100px" }} className="me-2">
          <InputLabel>prefix</InputLabel>
          <Select>

          </Select>
        </FormControl>
        <TextField fullWidth label="number phone" className="ms-2" inputRef={nbPhoneRef} error={ errors.tel != null}/>
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
