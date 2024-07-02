
import { useSelect } from "@mui/base"
import { stepButtonClasses } from "@mui/material"
import { act } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import { logout } from "../../features/userSlice"
import { userSelector } from "../../store/selectors/userSelector"
import "./layout.css"
import image from "../../assets/user.jpeg" ; 
import CustomAlert from "../../components/CustomAlert"
import Swal from "sweetalert2"
export default function DashboardLayout() {
    const {pathname} = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(userSelector)
    const [activeLayout , setActiveLayout] = useState(false) 
    const [showSettingList , setShowSettingList] = useState(false ) ;  
    const handleClick = (e) => {
        document.querySelectorAll(".dashboard-link").forEach((link)=> {
            link.classList.remove("active-dashboard-link")
        })
        e.currentTarget.classList.add("active-dashboard-link")
    }
    const getCurrentDashboardPage = () => {
        return pathname.substring(pathname.indexOf("/dashboard") + "/dashboard".length )
    }
    const logoutAndExit = () => {
        Swal.fire({
            title: "do you want to logout ?",
            showCancelButton: true,
            confirmButtonText: "yes",
            showLoaderOnConfirm: true,
            preConfirm: () => {
                navigate("/") 
                dispatch(logout())
            }
          })
    }
    const backToHome = () => {
        navigate("/")
    }
    const handleShowSettingClick = () => {
        setShowSettingList(!showSettingList) ; 
    }
    return (
        <div className="d-flex">
            <div className="d-md-hidden side-bar border-end d-flex flex-column">
                <div className="custom-text-primary p-3 text-center text-capitalize d-flex align-items-center justify-content-center cursor-pointer" onClick={backToHome}>
                    <i className="fa-solid fa-plane plane"></i>
                    {activeLayout && <span className="title">travelboot</span>}
                </div>
                <div className="d-flex flex-column my-5">
                    <Link to="/dashboard" className="text-decoration-none">
                        <div className={`my-1 ${getCurrentDashboardPage() == "" ? "active-dashboard-link" : "custom-text-secondary"} p-2 dashboard-link`} onClick={handleClick}>
                            <i class="fa-solid fa-house mx-2"></i>{activeLayout && "home"}
                        </div>
                    </Link>
                    {user?.authority == "PROVIDER_AIRLINE" && <Link to="/dashboard/flights"  className="text-decoration-none">
                        <div className={`my-1 ${getCurrentDashboardPage() == "/flights" ? "active-dashboard-link" : "custom-text-secondary"} p-2 dashboard-link`} onClick={handleClick}>
                            <i className="fa-solid fa-plane mx-2"></i>{activeLayout && "flights"}
                        </div>
                    </Link>}
                    {user?.authority == "PROVIDER_CARAGENCY"  && <Link to="/dashboard/cars"  className="text-decoration-none">
                        <div className={`my-1 p-2 dashboard-link ${getCurrentDashboardPage() == "/cars" ? "active-dashboard-link" : "custom-text-secondary"}`} onClick={handleClick}>
                            <i class="fa-solid fa-car-rear mx-2"></i>{activeLayout && "cars"}
                        </div>
                    </Link> }
                    {user?.authority == "PROVIDER_HOTEL" && <Link to="/dashboard/rooms"  className="text-decoration-none">
                        <div className={`my-1 p-2 dashboard-link ${getCurrentDashboardPage() == "/rooms" ? "active-dashboard-link" : "custom-text-secondary"}`} onClick={handleClick}>
                            <i class="fa-solid fa-hotel mx-2"></i>{activeLayout && "rooms"}
                        </div>
                    </Link>}
                    {user?.authority == "ADMIN" && <Link to="/dashboard/clients"  className="text-decoration-none">
                        <div className={`my-1 p-2 dashboard-link ${getCurrentDashboardPage() == "/clients" ? "active-dashboard-link" : "custom-text-secondary"}`} onClick={handleClick}>
                            <i class="fa-solid fa-user mx-2"></i>{activeLayout && "clients"}
                        </div>
                    </Link> }
                    {user?.authority == "ADMIN" && <Link to="/dashboard/providers"  className="text-decoration-none">
                        <div className={`my-1 p-2 dashboard-link ${getCurrentDashboardPage() == "/providers" ? "active-dashboard-link" : "custom-text-secondary"}`} onClick={handleClick}>
                            <i class="fa-solid fa-user mx-2"></i>{activeLayout && "providers"}
                        </div>
                    </Link> }
                    {user?.authority == "ADMIN" && <Link to="/dashboard/stations"  className="text-decoration-none">
                        <div className={`my-1 p-2 dashboard-link ${getCurrentDashboardPage() == "/stations" ? "active-dashboard-link" : "custom-text-secondary"}`} onClick={handleClick}>
                            <i class="fa-solid fa-charging-station mx-2"></i>{activeLayout && "stations"}
                        </div>
                    </Link> }
                    {user?.authority == "PROVIDER_TRAVELAGENCY" && <Link to="/dashboard/travels"  className="text-decoration-none">
                        <div className={`my-1 p-2 dashboard-link ${getCurrentDashboardPage() == "/travels" ? "active-dashboard-link" : "custom-text-secondary"}`} onClick={handleClick}>
                            <i class="fa-solid fa-earth-americas mx-2"></i>{activeLayout && "travels"}
                        </div>
                    </Link> }
                    {user?.authority == "PROVIDER_RAILWAYOPERATOR" && <Link to="/dashboard/train-travels"  className="text-decoration-none">
                        <div className={`my-1 p-2 dashboard-link ${getCurrentDashboardPage() == "/train-travels" ? "active-dashboard-link" : "custom-text-secondary"}`} onClick={handleClick}>
                            <i class="fa-solid fa-train mx-2"></i>{activeLayout && "train travels"}
                        </div>
                    </Link> }
                    {user?.authority.startsWith("PROVIDER") && <Link to="/dashboard/images"  className="text-decoration-none">
                        <div className={`my-1 p-2 dashboard-link ${getCurrentDashboardPage() == "/images" ? "active-dashboard-link" : "custom-text-secondary"}`} onClick={handleClick}>
                        <i class="fa-solid fa-image mx-2"></i>{activeLayout && "images"}
                        </div>
                    </Link> }
                    {user?.authority.startsWith("PROVIDER") && <Link to="/dashboard/reservations"  className="text-decoration-none">
                        <div className={`my-1 p-2 dashboard-link ${getCurrentDashboardPage() == "/reservations" ? "active-dashboard-link" : "custom-text-secondary"}`} onClick={handleClick}>
                        <i class="fa-solid fa-money-bill-transfer mx-2"></i>{activeLayout && "reservations"}
                        </div>
                    </Link> }
                    <Link to="/dashboard/settings"  className="text-decoration-none" style={{transition : "1s ease"}}>
                        <div className={`d-flex align-items-center justify-content-between my-1 p-2 dashboard-link ${pathname.match("settings") ? "active-dashboard-link" : "custom-text-secondary"}`} onClick={handleShowSettingClick}>
                            <div><i class="fa-solid fa-gear mx-2"></i>{activeLayout && "settings" }</div>
                            {activeLayout && <div><i class={showSettingList ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-right"} style={{fontSize : "10px"}}></i></div> }
                        </div>
                    </Link>
                </div>
            </div>
            <div className="w-100 position-relative">
                <div className="w-100 bg-white custom-navbar d-flex align-items-center justify-content-between">
                    <div className="mx-4 font-secondary custom-text-secondary">
                        <button className="btn custom-btn text-secondary" onClick={()=>{setActiveLayout(!activeLayout)}}><i class="fa-solid fa-bars"></i></button>
                    </div>
                    <div className="me-5 custom-text-secondary">
                        <button className="btn custom-btn custom-text-secondary" data-bs-toggle="tooltip" title="dark mode"><i class="fa-solid fa-bell mx-2"></i></button>
                        <img className="border mx-2" src={image} alt="" style={{width :"30px"  , height : "30px" , borderRadius : "50%"}}/>
                        <button className="btn custom-btn custom-text-secondary" data-bs-toggle="tooltip" title="logout" onClick={logoutAndExit}><i class="fa-solid fa-right-from-bracket mx-2"></i></button>
                    </div>
                </div>
                <div className="border-top border-left display">
                    <Outlet />
                </div>
            </div>

        </div>
    )
}