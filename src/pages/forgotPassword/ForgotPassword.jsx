import { Link } from "react-router-dom";

export default function ForgotPassword() {
    return (
        <div className="page d-flex align-items-center justify-content-center">
            <div style={{width : "30%"}}>
                <h4 className="text-capitalize text-center">did you forgot your password ?</h4>
                <p className="text-secondary">enter your email you're using for your account bellow</p>
                <div className="form-group">
                    <label htmlFor="" className="form-label">email :</label>
                    <input type="email" placeholder="enter your email" className="form-control"/>
                </div>
                <button className="btn custom-btn-secondary w-100 my-3">request reset link</button>
                <Link to="/" className="custom-text-secondary text-center">back to sign in</Link>
            </div>
        </div>
    )
}