import { motion} from "framer-motion"
import SearchBar from "../../../components/SearchBar"
import "./sections.css"
export default function Hero() {
    return (
        <div className="hero-section">
            <div className="custom-container d-flex flex-column align-items-center justify-content-center h-100">
                <div  className="hero-title custom-text-primary text-center text-capitalize" > 
                    explore the world by <br/>travelboot
                </div>
                <div className="hero-text my-4 text-center text-secondary text-capitalize">
                    Welcome to our travel management platform, where every trip is an adventure<br/> to be experienced to the fullest.
                </div>
                <SearchBar />
            </div>
        </div>
    )
}