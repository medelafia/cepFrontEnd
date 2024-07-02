import { AirlineSeatLegroomExtra } from "@mui/icons-material"
import { Rating } from "@mui/material"
import { Link } from "react-router-dom"
export default function Provider({provider}) {
    return (
        <div className="p-2 col-md-6 col-lg-3 ">
            <div className="container border d-flex align-items-center justify-content-center flex-column py-3">
                <h5 className="text-capitalize">{provider.name}</h5>
                <div>
                    <img src={provider.logo?.url} style={{ width : "100%" , height : "100px"} } alt="" />
                </div>
                <Rating 
                    readOnly
                    defaultValue={provider.score }
                />
                <div className="text-secondary">
                    {provider.reviewsCount} review
                </div>
                <button className="btn btn-outline-dark my-3">
                    <Link to={`/provider/${provider.id}`} className="text-decoration-none text-dark">view profile</Link>
                </button>
            </div>
        </div>
    )
}