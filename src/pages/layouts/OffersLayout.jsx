import { Link, Outlet, useLocation, useParams } from "react-router-dom";

export default function OffersLayout() {
    const {pathname} = useLocation()
    return (
        <div className="w-100">
            <div className="px-5 py-2 d-flex align-items-center justify-content-start w-100">
                <ul className="d-flex w-100 justify-content-around text-capitalize border-bottom">
                    <li className={`mx-2 pb-2 ${pathname == "/offers/cars" && "custom-border-bottom" }`}><Link to={"/offers/cars"} className="text-decoration-none text-dark p-3 rounded-pill">rental cars</Link></li>
                    <li className={`mx-2 pb-2 ${pathname == "/offers/hotels" && "custom-border-bottom"}`}><Link to={"/offers/hotels"} className="text-dark text-decoration-none  p-3 rounded-pill">hotel rooms</Link></li>
                    <li className={`mx-2 pb-2 ${pathname == "/offers/flights" && "custom-border-bottom"}`}><Link to={"/offers/flights"} className="text-dark text-decoration-none  p-3 rounded-pill">flights</Link></li>
                    <li className={`mx-2 pb-2 ${pathname == "/offers/travels" && "custom-border-bottom"}`}><Link to={"/offers/travels"} className="text-dark text-decoration-none  p-3 rounded-pill">travels</Link></li>
                    <li className={`mx-2 pb-2 ${pathname == "/offers/trainTravels" && "custom-border-bottom"}`}><Link to={"/offers/trainTravels"} className="text-dark text-decoration-none  p-3 rounded-pill">train travels</Link></li>
                </ul> 
            </div>  
            <div className="px-5 py-2">
                <Outlet  /> 
            </div>
        </div>
    )
}