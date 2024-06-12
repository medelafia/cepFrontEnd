import { Link } from "react-router-dom"
import Rating from "./Rating"
import image from "../assets/hotel4.jpeg"
export default function Destination({destination}) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12" style={{height : "300px"}}>
            <div className="container-fliud h-100">
                <div className="bg-primary rounded h-50">
                    <img src={image} style={{width : "100%" , height : "100%"}} alt="" className="rounded"/>
                </div>
                <div className="destination-title d-flex justify-content-between">
                    <h4 className="my-2 text-capitalize">{destination?.name}</h4>
                    <div className="d-flex align-items-end  flex-column ">
                        <Rating />
                        <div>200 review</div>
                    </div>
                </div>
                <div className="destination-address">
                    <i class="fa-solid fa-location-dot me-2"></i>
                    <span>{destination?.city} , {destination?.country}</span>
                </div> 
                <Link to={"/offers/destination/"+destination?.id} className="text-secondary">show more details</Link> 
                <div>
                </div>
            </div>
        </div>
    )
}