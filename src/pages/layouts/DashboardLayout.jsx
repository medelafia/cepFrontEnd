
import { Link, Outlet, useLocation } from "react-router-dom"
import "./layout.css"
export default function DashboardLayout() {
    const {pathname} = useLocation()
    const handleClick = (e) => {
        document.querySelectorAll(".dashboard-link").forEach((link)=> {
            link.classList.remove("active-dashboard-link")
        })
        e.currentTarget.classList.add("active-dashboard-link")
    }
    return (
        <div className="d-flex">
            <div className="side-bar custom-bg-secondary d-flex flex-column">
                <div className="title custom-text-primary p-3 text-center">travelboot</div>
                <div className="d-flex flex-column my-5">
                    <Link to="/dashboard">
                        <div className={`my-1 custom-text-primary ${pathname == "/dashboard" && "active-dashboard-link"} p-2 dashboard-link`} onClick={handleClick}>
                            <i className="fa-solid fa-plane mx-2"></i>flights
                        </div>
                    </Link>
                    <Link to="/dashboard/cars">
                        <div className={`my-1 custom-text-primary p-2 dashboard-link ${pathname == "/dashboard/cars" && "active-dashboard-link"}`} onClick={handleClick}>
                        <i class="fa-solid fa-car-rear mx-2"></i>cars
                        </div>
                    </Link>
                    <Link to="/dashboard/rooms">
                        <div className={`my-1 custom-text-primary p-2 dashboard-link ${pathname == "/dashboard/rooms" && "active-dashboard-link"}`} onClick={handleClick}>
                            <i class="fa-solid fa-hotel mx-2"></i> rooms
                        </div>
                    </Link>
                    <Link to="/dashboard/clients">
                        <div className={`my-1 custom-text-primary p-2 dashboard-link ${pathname == "/dashboard/clients" && "active-dashboard-link"}`} onClick={handleClick}>
                            <i class="fa-solid fa-user mx-2"></i>clients
                        </div>
                    </Link>
                    <Link to="/dashboard/providers">
                        <div className={`my-1 custom-text-primary p-2 dashboard-link ${pathname == "/dashboard/providers" && "active-dashboard-link"}`} onClick={handleClick}>
                            <i class="fa-solid fa-user mx-2"></i>providers
                        </div>
                    </Link>
                    <Link to="/dashboard/stations">
                        <div className={`my-1 custom-text-primary p-2 dashboard-link ${pathname == "/dashboard/stations" && "active-dashboard-link"}`} onClick={handleClick}>
                            <i class="fa-solid fa-charging-station mx-2"></i>stations
                        </div>
                    </Link>
                    <Link to="/dashboard/travels">
                        <div className={`my-1 custom-text-primary p-2 dashboard-link ${pathname == "/dashboard/travels" && "active-dashboard-link"}`} onClick={handleClick}>
                            <i class="fa-solid fa-earth-americas mx-2"></i>travels
                        </div>
                    </Link>
                    <Link to="/dashboard/destinations">
                        <div className={`my-1 custom-text-primary p-2 dashboard-link ${pathname == "/dashboard/destinations" && "active-dashboard-link"}`} onClick={handleClick}>
                            <i class="fa-solid fa-location-dot mx-2"></i>destinations
                        </div>
                    </Link>
                </div>
            </div>
            <div className="w-100">
                <div className="w-100 bg-white custom-navbar d-flex align-items-center justify-content-between">
                    <div className="mx-4 font-secondary custom-text-secondary"><i class="fa-solid fa-bars"></i></div>
                    <div className="me-5 custom-text-secondary">
                        <i class="fa-solid fa-bell mx-2"></i>
                        <i class="fa-solid fa-right-from-bracket mx-2"></i>
                    </div>
                </div>
                <div className="w-100 custom-bg-primary display">
                    <Outlet /> 
                </div>
            </div>

        </div>
    )
}