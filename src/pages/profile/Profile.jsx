import "./profile.css" ; 
import image from "../../assets/user.png" ; 
import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
export default function Profile() {
    const {pathname} = useLocation() 
    return (
        <div className="page p-5">
            <div className="row">
                <div className="col-lg-4">
                    <div className="container d-flex align-items-center flex-column p-4">
                        <img src={image} id="profileImage" className="border" alt="" style={{width : "200px" , height : "200px" , borderRadius : "50%"}}/>
                        <div className="my-3 d-flex align-items-center justify-content-center flex-column">
                            <h3>username</h3>
                            <div className="text-secondary">full name</div>
                        </div>
                        <div className="my-2">

                        </div>
                        <div className="my-2">

                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="container d-flex align-items-start flex-column p-3 w-100">
                        <ul className="d-flex align-items-center justify-content-start border-bottom w-100">
                            <li className={`me-3 cursor-pointer ${pathname.substring("/profile".length) == "" && "active"} `}>
                                <Link to="/profile" className="text-decoration-none custom-text-secondary">  
                                    user info
                                </Link>
                            </li>
                            <li className={`mx-3 cursor-pointer ${pathname.substring("/profile".length) == "/accountInfo" && "active"}`}>
                                <Link to="/profile/accountInfo" className="text-decoration-none custom-text-secondary">  
                                    account info
                                </Link>
                            </li>
                            <li className={`mx-3 cursor-pointer ${pathname.substring("/profile".length) == "/recommendationProfile" && "active"}`}>
                                <Link to="/profile/recommendationProfile" className="text-decoration-none custom-text-secondary">  
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