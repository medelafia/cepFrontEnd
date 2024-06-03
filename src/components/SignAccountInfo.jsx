import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import ReactFacebookLogin from "react-facebook-login";

export default function SignAccountInfo() {
    const googleSignUpSuccess = (cred) => {
        const details = jwtDecode(cred.credential)
        console.log(details) ; 
    }
  return (
    <div>
        <div className="d-flex align-items-center justify-content-center flex-column">
            <GoogleLogin onSuccess={googleSignUpSuccess} onError={console.log("invalid data")} /> 
            <span className="text-secondary">or</span>
            <ReactFacebookLogin className="rounded"/> 
        </div>
        <hr className="my-3"/>
      <div className="form-group my-3 d-flex align-items-center justify-content-between">
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="enter the username"
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
        />
      </div>
      <div className="form-group my-3">
        <select name="" id="" className="form-select text-secondary">
          <option value="">costumer</option>
          <option value="">provider</option>
        </select>
      </div>
    </div>
  );
}
