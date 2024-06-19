import { AirlineSeatLegroomExtra } from "@mui/icons-material"
import { Rating } from "@mui/material"
import { Link } from "react-router-dom"
import image from "../assets/royalAir.png"
export default function Airline({airline}) {
    return (
        <div className="p-2 col-md-3">
            <div className="container border d-flex align-items-center justify-content-center flex-column py-3">
                <h5 className="text-capitalize">morrocan airline</h5>
                <div>
                    <img src={airline.logo?.url} style={{ width : "100%" , height : "100px"} } alt="" />
                </div>
                <Rating 
                    readOnly
                    defaultValue={airline.score }
                />
                <div className="text-secondary">
                    {airline.nbReviews} review
                </div>
                <button className="btn btn-outline-dark my-3">
                    <Link to="/providers/provider/1" className="text-decoration-none text-dark">view profile</Link>
                </button>
            </div>
        </div>
    )
}