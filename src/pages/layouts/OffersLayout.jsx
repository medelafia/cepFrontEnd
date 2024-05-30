import { Link, Outlet, useLocation, useParams } from "react-router-dom";

export default function OffersLayout() {
    const {pathname} = useLocation()
    return (
        <div className="w-100">
            <div className="px-5 py-2 d-flex align-items-center justify-content-start w-100">
                <ul className="d-flex border-bottom w-100 justify-content-around py-2">
                    <li className={`mx-2 ${pathname == "/offers/cars" && "bg-light" }`}><Link to={"/offers/cars"} className="text-decoration-none text-dark p-3 rounded-pill">rental cars</Link></li>
                    <li className={`mx-2 ${pathname == "/offers/hotels" && "bg-light"}`}><Link to={"/offers/hotels"} className="text-dark text-decoration-none  p-3 rounded-pill">hotels</Link></li>
                    <li className={`mx-2 ${pathname == "/offers/flights" && "bg-light"}`}><Link to={"/offers/flights"} className="text-dark text-decoration-none  p-3 rounded-pill">flights</Link></li>
                    <li className={`mx-2 ${pathname == "/offers/destinations" && "bg-light"}`}><Link to={"/offers/destinations"} className="text-dark text-decoration-none  p-3 rounded-pill">destinations</Link></li>
                    <li className={`mx-2 ${pathname == "/offers/travels" && "bg-light"}`}><Link to={"/offers/travels"} className="text-dark text-decoration-none  p-3 rounded-pill">travels</Link></li>
                </ul> 
            </div>  
            <div className="px-5 py-2">
                <Outlet  /> 
            </div>
        </div>
    )
}