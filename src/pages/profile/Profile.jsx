import "./profile.css" ; 
import image from "../../assets/user.jpeg" ; 
import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelect } from "@mui/base";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/selectors/userSelector";
export default function Profile() {
    const {pathname} = useLocation() 
    const user = useSelector(userSelector) 
    const getCurrentPath = () => {
        return pathname.substring("/profile".length) ; 
    } 
    return (
        <div className="page p-3 bg-light">
            <div className="row">
                <div className="col-lg-4">
                    <div className="bg-white container d-flex align-items-start flex-column my-5 py-2 rounded">
                        <div className={`my-2 d-flex py-2 px-3 rounded-pill align-items d-flex align-items-center justify-content-start ${getCurrentPath() == "/accountInfo" && "bg-light" }`}>
                            <i class="fa-solid fa-bell me-2"></i>
                            <Link className="text-capitalize text-decoration-none text-dark" to="/profile/accountInfo">account</Link>
                        </div>
                        <div className={`my-2 d-flex py-2 px-3 rounded-pill align-items d-flex align-items-center justify-content-start ${getCurrentPath() == "" && "bg-light" }`}>
                            <i class="fa-regular fa-address-card me-2"></i>
                            <Link className="text-capitalize text-decoration-none text-dark" to="/profile">personal</Link>
                        </div>
                        <div className={`my-2 d-flex py-2 px-3 rounded-pill align-items d-flex align-items-center justify-content-start ${getCurrentPath() == "/recommendationProfile" && "bg-light" }`}>
                            <i class="fa-solid fa-bell me-2"></i>
                            <Link className="text-capitalize text-decoration-none text-dark" to="/profile/recommendationProfile">recommendation</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <header className="d-flex text-capitalize align-items-center justify-content-center flex-column">
                        <span className="font-secondary custom-text-primary">
                            {getCurrentPath() == "" && "Personal information" }
                            {getCurrentPath() == "/accountInfo" && "Account information" }
                            {getCurrentPath() == "/recommendationProfile" && "recommendation profile" }
                        </span>
                        <p className="text-secondary">personal information setting</p>
                    </header>
                    <div className="px-5 py-5 w-100 bg-white rounded">
                        <Outlet /> 
                    </div>
                </div>
            </div>
        </div>
    )
}