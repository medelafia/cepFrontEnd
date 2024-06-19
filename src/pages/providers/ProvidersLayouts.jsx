import { Link, Outlet, useLoaderData, useLocation } from "react-router-dom";

export default function ProvidersLayout() {
    const {pathname} = useLocation()
    const currentPath = () => {
        return pathname.substring(pathname.lastIndexOf("/") + 1)
    }
    console.log(currentPath())
     return(
        <div className="page">
            <div className="custom-container">
                <div className="d-flex align-items-center justify-content-between border-bottom p-2">
                    <div className={`${currentPath() == "airlines" && "bg-light"} py-1 px-3`}>
                        <Link className="text-decoration-none text-dark" to="/providers/airlines">airlines</Link>
                    </div>
                    <div className={`${currentPath() == "travel-agencies" && "bg-light"} py-1 px-3`}>
                        <Link className="text-decoration-none text-dark"  to="/providers/travel-agencies">travel agencies</Link>
                    </div>
                    <div className={`${currentPath() == "railways-operators" && "bg-light"} py-1 px-3`}>
                        <Link className="text-decoration-none text-dark"  to="/providers/railways-operators">railway operator</Link>
                    </div>
                    <div className={`${currentPath() == "car-agencies" && "bg-light"} py-1 px-3`}>
                        <Link className="text-decoration-none text-dark"  to="/providers/car-agencies">car agencies</Link>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    )
}