
import { useSelect } from "@mui/base"
import { stepButtonClasses } from "@mui/material"
import { act } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import { logout } from "../../features/userSlice"
import { userSelector } from "../../store/selectors/userSelector"
import "./layout.css"
export default function DashboardLayout() {
    const {pathname} = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate( )
    const user = useSelector(userSelector)
    const [activeLayout , setActiveLayout] = useState(false) 
    const handleClick = (e) => {
        document.querySelectorAll(".dashboard-link").forEach((link)=> {
            link.classList.remove("active-dashboard-link")
        })
        e.currentTarget.classList.add("active-dashboard-link")
    }
    const getCurrentDashboardPage = () => {
        return pathname.substring(pathname.indexOf("/dashboard") + "/dashboard".length)
    }
    const logoutAndExit = () => {
        if(confirm("are you sure")) {
            navigate("/") 
            dispatch(logout())
        }
    }
    const backToHome = () => {
        navigate("/")
    }
    return (
        <div className="d-flex">
            <div className="side-bar border-end d-flex flex-column">
                <div className="custom-text-primary p-3 text-center text-capitalize d-flex align-items-center justify-content-center cursor-pointer" onClick={backToHome}>
                    <i className="fa-solid fa-plane plane"></i>
                    {activeLayout && <span className="title">travelboot</span>}
                </div>
                <div className="d-flex flex-column my-5">
                    <Link to="/dashboard">
                        <div className={`my-1 ${getCurrentDashboardPage() == "" ? "active-dashboard-link" : "custom-text-secondary"} p-2 dashboard-link`} onClick={handleClick}>
                            <i class="fa-solid fa-house mx-2"></i>{activeLayout && "home"}
                        </div>
                    </Link>
                    {user?.providerType == "AIRLINE" && user?.accountType == "PROVIDER" && <Link to="/dashboard/flights">
                        <div className={`my-1 ${getCurrentDashboardPage() == "/flights" ? "active-dashboard-link" : "custom-text-secondary"} p-2 dashboard-link`} onClick={handleClick}>
                            <i className="fa-solid fa-plane mx-2"></i>{activeLayout && "flights"}
                        </div>
                    </Link>}
                    {user?.providerType == "CARS_AGENCY" && user?.accountType == "PROVIDER" && <Link to="/dashboard/cars">
                        <div className={`my-1 p-2 dashboard-link ${getCurrentDashboardPage() == "/cars" ? "active-dashboard-link" : "custom-text-secondary"}`} onClick={handleClick}>
                            <i class="fa-solid fa-car-rear mx-2"></i>{activeLayout && "cars"}
                        </div>
                    </Link> }
                    {user?.providerType == "HOTEL" && user?.accountType == "PROVIDER" && <Link to="/dashboard/rooms">
                        <div className={`my-1 p-2 dashboard-link ${getCurrentDashboardPage() == "/rooms" ? "active-dashboard-link" : "custom-text-secondary"}`} onClick={handleClick}>
                            <i class="fa-solid fa-hotel mx-2"></i>{activeLayout && "rooms"}
                        </div>
                    </Link>}
                    {user?.accountType == "ADMIN" && <Link to="/dashboard/clients">
                        <div className={`my-1 p-2 dashboard-link ${getCurrentDashboardPage() == "/clients" ? "active-dashboard-link" : "custom-text-secondary"}`} onClick={handleClick}>
                            <i class="fa-solid fa-user mx-2"></i>{activeLayout && "clients"}
                        </div>
                    </Link> }
                    {user?.accountType == "ADMIN" && <Link to="/dashboard/providers">
                        <div className={`my-1 p-2 dashboard-link ${getCurrentDashboardPage() == "/providers" ? "active-dashboard-link" : "custom-text-secondary"}`} onClick={handleClick}>
                            <i class="fa-solid fa-user mx-2"></i>{activeLayout && "providers"}
                        </div>
                    </Link> }
                    {user?.accountType == "ADMIN" && <Link to="/dashboard/stations">
                        <div className={`my-1 p-2 dashboard-link ${getCurrentDashboardPage() == "/stations" ? "active-dashboard-link" : "custom-text-secondary"}`} onClick={handleClick}>
                            <i class="fa-solid fa-charging-station mx-2"></i>{activeLayout && "stations"}
                        </div>
                    </Link> }
                    {user?.providerType == "TRAVEL_AGENCY" && user?.accountType == "PROVIDER" && <Link to="/dashboard/travels">
                        <div className={`my-1 p-2 dashboard-link ${getCurrentDashboardPage() == "/travels" ? "active-dashboard-link" : "custom-text-secondary"}`} onClick={handleClick}>
                            <i class="fa-solid fa-earth-americas mx-2"></i>{activeLayout && "travels"}
                        </div>
                    </Link> }
                    {user?.accountType == "ADMIN" && <Link to="/dashboard/destinations">
                        <div className={`my-1 p-2 dashboard-link ${getCurrentDashboardPage() == "/destinations" ? "active-dashboard-link" : "custom-text-secondary"}`} onClick={handleClick}>
                            <i class="fa-solid fa-location-dot mx-2"></i>{activeLayout && "destinations" }
                        </div>
                    </Link>}
                </div>
            </div>
            <div className="w-100">
                <div className="w-100 bg-white custom-navbar d-flex align-items-center justify-content-between">
                    <div className="mx-4 font-secondary custom-text-secondary">
                        <button className="btn custom-btn text-secondary" onClick={()=>{setActiveLayout(!activeLayout)}}><i class="fa-solid fa-bars"></i></button>
                    </div>
                    <div className="me-5 custom-text-secondary">
                        <button className="btn custom-btn custom-text-secondary" data-bs-toggle="tooltip" title="dark mode"><i class="fa-solid fa-bell mx-2"></i></button>
                        <button className="btn custom-btn custom-text-secondary" data-bs-toggle="tooltip" title="logout" onClick={logoutAndExit}><i class="fa-solid fa-right-from-bracket mx-2"></i></button>
                    </div>
                </div>
                <div className="w-100 border-top border-left display">
                    <div className="py-3 px-5 h-75">
                        <div className="d-flex align-items-center justify-content-between">
                        <div className="custom-text-secondary text-capitalize">dashboard / {getCurrentDashboardPage.apply().substring(1).toLowerCase()} </div>
                            <button className="btn custom-btn-secondary"><i class="fa-solid fa-plus mx-1"></i>add {getCurrentDashboardPage.apply().substring(1 )}</button>
                        </div>
                        <div className="bg-white p-3 border rounded my-2 h-100">
                            <Outlet/> 
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}