import { motion} from "framer-motion"
import SearchBar from "../../../components/SearchBar"
import "./sections.css"
import image from "../../../assets/hero.jpeg"
export default function Hero() {
    return (
        <div className="hero-section">
            <div className="custom-container row w-100">
                <div className="col-md-6 col-sm-12 d-flex flex-column align-items-center justify-content-start py-5">
                    <div className="container py-5">
                        <div  className="hero-title text-capitalize bold" > 
                            explore the world by <span className="custom-text-primary text-capitalize">travelboot</span>
                        </div>
                        <div className="hero-text my-4 text-secondary text-capitalize">
                            Welcome to our travel management platform, where every trip is an adventure<br/> to be experienced to the fullest.
                        </div>
                        <div className="d-flex align-items-center my-3">
                            <button className="btn custom-btn-primary py-2 px-5 text-capitalize">let find travel !</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-none d-flex align-items-center justify-content-end h-100 py-5">
                    <img src={image} style={{width : "450px" , height : "450px"}}/>
                </div>
            </div>
        </div>
    )
}