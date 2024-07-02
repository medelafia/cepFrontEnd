import { Info, NestCamWiredStand, NetworkCell } from "@mui/icons-material";
import {
  collapseClasses,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useRef } from "react";
import { useState } from "react";
import ReactFacebookLogin from "react-facebook-login";

export default function SignAccountInfo({
  currentInfo,
  onChangeFunction,
  next,
  errors,
  setErrors,
  setStepValidity
}) {
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const nbPhoneRef = useRef();
  const accountTypeRef = useRef("costumer");
  const addressRef = useRef()
  const signUpWithGoogle = useGoogleLogin({
    onSuccess: (google_res) => {
      fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${google_res.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${google_res.access_token}`,
            Accept: "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          onChangeFunction(
            "username",
            data.email.substring(0, data.email.indexOf("@"))
          );
          onChangeFunction("registerByGoogle", true);
          onChangeFunction("emailVerified", data.email_verified);
          onChangeFunction("email", data.email);
          onChangeFunction("firstName", data.given_name);
          onChangeFunction("lastName", data.family_name);
          next();
        });
    },
    onError: (error) => {
      Swal.fire({
        text: error,
        title: "registration error",
        icon: "error",
        timer: 2000,
      });
    },
  });
  const check = () => {
    if( errors.username == null && errors.password == null && errors.confirmPassword == null && errors.email == null) { 
      setStepValidity(true)
    }
  }
  return (
    <div>
      <div className="form-group my-3">
        <FormControl fullWidth>
          <InputLabel>account type</InputLabel>
          <Select
            inputRef={accountTypeRef}
            defaultValue="COSTUMER"
            onChange={(e) => onChangeFunction("accountType", e.target.value)}
            required
          >
            <MenuItem value="costumer">costumer</MenuItem>
            <MenuItem value="provider">provider</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="form-group my-3 d-flex ">
        <TextField
          label="username"
          defaultValue={currentInfo.username}
          fullWidth
          className="ms-1"
          inputRef={usernameRef}
          onChange={() =>
            onChangeFunction("username", usernameRef.current.value)
          }
          onMouseLeave={() => {
            if (usernameRef.current.value.length < 8){
              setErrors({ ...errors, username: "the username is invalid" });
              setStepValidity(false)
            }
            else {
              setErrors({ ...errors, username: null });
              check
            }
          }}
          error={errors.username != null}
          helperText={errors?.username}
        />
        <TextField
          label="email"
          defaultValue={currentInfo.email}
          fullWidth
          className="ms-1"
          inputRef={emailRef}
          onChange={() => onChangeFunction("email", emailRef.current.value)}
          onMouseLeave={() => {
            if (!emailRef.current.value.match(/^[a-zA-Z]{2,15}@[a-z]{2,}\.[a-z]{2,4}$/)){
              setErrors({ ...errors, email: "invalid email" });
              setStepValidity(false)
            }
            else {
              setErrors({ ...errors, email: null });
              check()
            }
          }}
          helperText={errors.email}
          error={errors.email != null}
        />
      </div>
      <div className="form-group my-3 d-flex ">
        <TextField
          required
          type="password"
          defaultValue={currentInfo.password}
          label="password"
          inputRef={passwordRef}
          onChange={() =>
            onChangeFunction("password", passwordRef.current.value)
          }
          fullWidth
          className="ms-1"
          onMouseLeave={() => {
            if (passwordRef.current.value.length < 8) {
              setErrors({ ...errors, password: "the password is not strong" });
              setStepValidity(false)
            }
            else {
              setErrors({ ...errors, password: null });
              check()
            }
          }}
          error={errors?.password != null}
          helperText={errors.password}
        />
        <TextField
          type="password"
          label="confirm password"
          fullWidth
          className="ms-1"
          inputRef={confirmPasswordRef}
          onMouseLeave={() => {
            if (confirmPasswordRef.current.value != passwordRef.current.value){
              setErrors({
                ...errors,
                confirmPassword:
                  "the password and password confirmation not identical",
              });
              setStepValidity(false)
            }
            else {
              setErrors({ ...errors, confirmPassword: null });
              check()
            }
          }}
          error={errors?.confirmPassword != null}
          helperText={errors.confirmPassword}
        />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <span>or</span>
      </div>
      <div className="d-flex align-items-center justify-content-center w-100">
        <button
          className="btn btn-outline-dark me-2 rounded-pill"
          onClick={signUpWithGoogle}
        >
          <i class="fa-brands fa-google me-3"></i>
          <span>signUp with google</span>
        </button>
      </div>
    </div>
  );
}
