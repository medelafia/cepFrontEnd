
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
    const getCurrentDashboardPage = () => {
        return pathname.substring(pathname.indexOf("/dashboard") + "/dashboard".length)
    }
    return (
        <div className="d-flex">
            <div className="side-bar border-end d-flex flex-column">
                <div className="title custom-text-primary p-3 text-center text-capitalize">travelboot</div>
                <div className="d-flex flex-column my-5">
                    <Link to="/dashboard">
                        <div className={`my-1 custom-text-secondary ${getCurrentDashboardPage() == "" && "active-dashboard-link"} p-2 dashboard-link`} onClick={handleClick}>
                            <i className="fa-solid fa-plane mx-2"></i>flights
                        </div>
                    </Link>
                    <Link to="/dashboard/cars">
                        <div className={`my-1 custom-text-secondary p-2 dashboard-link ${getCurrentDashboardPage() == "/cars" && "active-dashboard-link"}`} onClick={handleClick}>
                        <i class="fa-solid fa-car-rear mx-2"></i>cars
                        </div>
                    </Link>
                    <Link to="/dashboard/rooms">
                        <div className={`my-1 custom-text-secondary p-2 dashboard-link ${getCurrentDashboardPage() == "/rooms" && "active-dashboard-link"}`} onClick={handleClick}>
                            <i class="fa-solid fa-hotel mx-2"></i> rooms
                        </div>
                    </Link>
                    <Link to="/dashboard/clients">
                        <div className={`my-1 custom-text-secondary p-2 dashboard-link ${getCurrentDashboardPage() == "/clients" && "active-dashboard-link"}`} onClick={handleClick}>
                            <i class="fa-solid fa-user mx-2"></i>clients
                        </div>
                    </Link>
                    <Link to="/dashboard/providers">
                        <div className={`my-1 custom-text-secondary p-2 dashboard-link ${getCurrentDashboardPage() == "/providers" && "active-dashboard-link"}`} onClick={handleClick}>
                            <i class="fa-solid fa-user mx-2"></i>providers
                        </div>
                    </Link>
                    <Link to="/dashboard/stations">
                        <div className={`my-1 custom-text-secondary p-2 dashboard-link ${getCurrentDashboardPage() == "/stations" && "active-dashboard-link"}`} onClick={handleClick}>
                            <i class="fa-solid fa-charging-station mx-2"></i>stations
                        </div>
                    </Link>
                    <Link to="/dashboard/travels">
                        <div className={`my-1 custom-text-secondary p-2 dashboard-link ${getCurrentDashboardPage() == "/travels" && "active-dashboard-link"}`} onClick={handleClick}>
                            <i class="fa-solid fa-earth-americas mx-2"></i>travels
                        </div>
                    </Link>
                    <Link to="/dashboard/destinations">
                        <div className={`my-1 custom-text-secondary p-2 dashboard-link ${getCurrentDashboardPage() == "/destinations" && "active-dashboard-link"}`} onClick={handleClick}>
                            <i class="fa-solid fa-location-dot mx-2"></i>destinations
                        </div>
                    </Link>
                </div>
            </div>
            <div className="w-100">
                <div className="w-100 bg-white custom-navbar d-flex align-items-center justify-content-between">
                    <div className="mx-4 font-secondary custom-text-secondary">
                        <button className="btn custom-btn text-secondary"><i class="fa-solid fa-bars"></i></button>
                    </div>
                    <div className="me-5 custom-text-secondary">
                        <button className="btn custom-btn custom-text-secondary" data-bs-toggle="tooltip" title="dark mode"><i class="fa-solid fa-bell mx-2"></i></button>
                        <button className="btn custom-btn custom-text-secondary" data-bs-toggle="tooltip" title="logout"><i class="fa-solid fa-right-from-bracket mx-2"></i></button>
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