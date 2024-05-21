import { Link } from "react-router-dom"
import image from "../assets/hotel4.jpeg"
export default function Destination() {
    return (
        <div className="col-lg-4" style={{height : "300px"}}>
            <div className="container-fliud h-100">
                <div className="bg-primary rounded h-50">
                    <img src={image} style={{width : "100%" , height : "100%"}} alt="" className="rounded"/>
                </div>
                <div className="destination-title"></div>
                <div className="d-flex align-items-center justify-content-start p-1">
                    <div>sjsj</div>
                    <div>200</div>
                </div>
                <div className="destination-address">
                    morroco
                </div> 
                <Link to="/offers/destination/1" className="text-secondary">show more details</Link> 
            </div>
        </div>
    )
}