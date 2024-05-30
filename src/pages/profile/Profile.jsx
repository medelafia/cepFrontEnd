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
    return (
        <div className="page p-3">
            <div className="row">
                <div className="col-lg-4 border-end">
                    <div className="container d-flex align-items-center flex-column p-4">
                        <img src={image} id="profileImage" className="border" alt="" style={{width : "150px" , height : "150px" , borderRadius : "50%"}}/>
                        <div className="my-3 d-flex align-items-center justify-content-center flex-column">
                            <h3>{user?.username}</h3>
                            <div className="text-secondary">{user?.userInfo.firstName +" " +user?.userInfo.lastName}</div>
                        </div>
                        <div className="my-2">

                        </div>
                        <div className="my-2">

                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="container d-flex align-items-start flex-column w-100">
                        <ul className="d-flex align-items-center justify-content-start border-bottom w-100">
                            <li className={`me-3 cursor-pointer ${pathname.substring("/profile".length) == "" ? "active" : "custom-text-secondary"} `}>
                                <Link to="/profile" className="text-decoration-none">  
                                    user info
                                </Link>
                            </li>
                            <li className={`mx-3 cursor-pointer ${pathname.substring("/profile".length) == "/accountInfo" ? "active" : "custom-text-secondary"}`}>
                                <Link to="/profile/accountInfo" className="text-decoration-none">  
                                    account info
                                </Link>
                            </li>
                            <li className={`mx-3 cursor-pointer ${pathname.substring("/profile".length) == "/recommendationProfile" ? "active" : "custom-text-secondary"}`}>
                                <Link to="/profile/recommendationProfile" className="text-decoration-none">  
                                    recommendation profile
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="p-3 w-100">
                        <Outlet /> 
                    </div>
                </div>
            </div>
        </div>
    )
}