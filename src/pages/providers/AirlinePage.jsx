import { useParams } from "react-router-dom"
import ImageSlider from "../../components/ImageSlider"
import image from "../../assets/royalAirPic.jpg"
import logo from "../../assets/royalAir.png"

export default function AirlinePage(){
    const {id} = useParams()
    return (
        <div className="custom-container py-4">
            <div className="d-flex align-items-center justify-content-between w-100 py-2">
                <h1 className="text-capitalize">Royal Air Maroc</h1>
                <img src={logo} alt="" style={{width:"200px" , height : "100px"}}/>
            </div>
            <div className="w-100 py-3 d-flex align-items-center justify-content-between">
                <div className="text-capitalize">
                    <div>
                        <i class="fa-solid fa-location-dot mx-2"></i>Complexe Arena Beach Martil, Martil 93150 Morocco
                    </div>
                    <div>
                        <i class="fa-solid fa-globe mx-2"></i><a href="https://www.royalairmaroc.com/ma-fr" className="text-lowercase text-decoration-none custom-text-secondary">www.royalairmaroc.com</a>
                    </div>
                </div>
                <button className="btn custom-btn-primary">view deals</button>
            </div>
            <div>
                <ImageSlider /> 
            </div>
            <div className="my-3 rounded border p-3">
                <div className="h4 text-capitalize custom-text-secondary">
                    location
                </div>
                <div className="text-secondary">
                    <i class="fa-solid fa-location-dot mx-2"></i>Complexe Arena Beach Martil, Martil 93150 Morocco
                </div>
                <hr />
            </div>
            <div>
                <h1 className="text-secondary text-capitalize">users reviews</h1>
            </div>
        </div>
    )
}