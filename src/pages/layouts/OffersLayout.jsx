import { Link, Outlet, useLocation, useParams } from "react-router-dom";

export default function OffersLayout() {
    const {pathname} = useLocation()
    return (
        <div className="w-100">
            <div className="px-5 py-2 d-flex align-items-center justify-content-start w-100">
                <ul className="d-flex border-bottom w-100 justify-content-around">
                    <li className={`mx-2 ${pathname == "/offers/cars" && "active"}`}><Link to={"/offers/cars"} className="text-dark text-decoration-none">rental cars</Link></li>
                    <li className={`mx-2 ${pathname == "/offers/hotels" && "active"}`}><Link to={"/offers/hotels"} className="text-dark text-decoration-none">hotels</Link></li>
                    <li className={`mx-2 ${pathname == "/offers/flights" && "active"}`}><Link to={"/offers/flights"} className="text-dark text-decoration-none">flights</Link></li>
                    <li className={`mx-2 ${pathname == "/offers/destinations" && "active"}`}><Link to={"/offers/destinations"} className="text-dark text-decoration-none">destinations</Link></li>
                    <li className={`mx-2 ${pathname == "/offers/destinations" && "active"}`}><Link to={"/offers/destinations"} className="text-dark text-decoration-none">travels</Link></li>
                </ul> 
            </div>  
            <div className="px-5 py-2">
                <Outlet  /> 
            </div>
        </div>
    )
}