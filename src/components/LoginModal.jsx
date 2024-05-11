import { GoogleLogin } from "@react-oauth/google";
import { useRef } from "react";
import FacebookLogin from "react-facebook-login";

export default function LoginModal() {
    const username = useRef() ; 
    const password = useRef() ; 
    const face = () => {
        return(
            <FacebookLogin
                        appId="324356744030127"
                        autoLoad={true}
                        fields="email,public_profile"
                        callback={()=>{}}
                        cssclassName="btn btn-primary my-2"
                        icon="fa-facebook"
                    />
        )
    }
  return (
    <div className="modal rounded-5" id="loginModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="p-4 d-flex align-items-center justify-content-end">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <h1 className="custom-text-primary text-capitalize text-center title">login</h1>
          <div className="modal-body">
          <div className="login-section d-flex align-items-center flex-column p-3 position-relative justify-content-center">
                <form className="w-75 mb-3">
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
                    <button className="custom-btn-secondary btn my-1 w-100" /*onClick={handleSignInClick}*/>Sign In</button>
                    <div className="text-center my-2">dont have account?<a className="text-primary" href="#">create account</a></div> 
                </form>
                <div className="d-flex align-items-center justify-content-center flex-column">
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
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
