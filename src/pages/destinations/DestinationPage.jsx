import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../../assets/chefchaouen.jpg" ; 
import Hotel from "../../components/Hotel";
import GoogleMapReact from "google-map-react"
import ReviewsSlider from "../../components/ReviewsSlider";
export default function DestinationPage() {
    const [showFullDesc , setShowFullDesc] = useState(false) ; 
    const description = "Jemaa el-Fnaa is a square and market place in Marrakesh's medina quarter \
    It remains the main square of Marrakesh, used by locals and tourists." ; 
    const {id} = useParams() 
    const changeShowFullDesc = () => {
        setShowFullDesc(!showFullDesc) ; 
    }
    const [ destination , setDestination ] = useState(null)
    useEffect(()=>{
        fetch("http://localhost:8089/destinations/"+id )
        .then(res => res.json())
        .then(data => setDestination(data)) 
    })
    return (
        <div className="custom-container">
            <div className="d-flex align-items-center justify-content-start p-2 text-secondary">
                {destination?.country} / {destination?.city} / {destination?.name}
            </div>
            <img src={image} alt="" className="rounded" style={{width : "100%" , height : "500px"}}/>
            <div className="py-4">
                <h1 className="text-capitalize custom-text-secondary">
                    {destination?.name}
                </h1>
                <div className="row">
                    <div>
                        <i class="fa-solid fa-location-dot me-2"></i>
                        <span>{destination?.city} , {destination?.country}</span>
                    </div> 
                    <div className="col-md-6 mt-2">
                        <div>
                            {description}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <GoogleMapReact 
                            defaultCenter={{
                            lat: 10.99835602,
                            lng: 77.01502627}}
                            yesIWantToUseGoogleMapApiInternals
                            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                        >

                        </GoogleMapReact>
                    </div>
                </div>
            </div>
            <hr />
            <div className="d-flex align-items-center justify-content-between">
                <h3 className="custom-text-primary text-capitalize">reviews</h3>
                <button className="btn btn-outline-dark">write review</button>
            </div>  
            <ReviewsSlider reviews={["je" , "jjfj", "ejje" , "hfhhf" , "djjdjd" , "hfhf" , "fhfh"]}/>
            <div className="py-4">
                <div className="d-flex align-items-center justify-content-between">
                    <h3 className="text-capitalize">most near hotels</h3>
                    <div className="cursor-pointer text-decoration-underline">see all</div>
                </div>
                <div className="row py-2">
                        <Hotel />
                        <Hotel />
                        <Hotel />
                    </div>
            </div>
        </div>
    )
}