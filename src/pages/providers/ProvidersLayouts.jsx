import { Link, Outlet } from "react-router-dom";

export default function ProvidersLayout() {
    return(
        <div className="page">
            <div className="custom-container">
                <div className="d-flex align-items-center justify-content-between border-bottom p-2">
                    <div className="bg-light py-1 px-3">
                        <Link className="text-decoration-none text-dark" to="/providers/airlines">airlines</Link>
                    </div>
                    <div className="bg-light py-1 px-3">
                        <Link className="text-decoration-none text-dark"  to="/providers/travel-agencies">travel agencies</Link>
                    </div>
                    <div className="bg-light py-1 px-3">
                        <Link className="text-decoration-none text-dark"  to="/providers/railways-operators">railway operator</Link>
                    </div>
                    <div className="bg-light py-1 px-3">
                        <Link className="text-decoration-none text-dark"  to="/providers/car-agencies">car agencies</Link>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    )
}