import SearchBar from "../../../components/SearchBar"
import "./sections.css"
export default function Hero() {
    return (
        <div className="hero custom-bg-primary">
            <div className="custom-container d-flex flex-column align-items-center justify-content-center h-100">
                <div className="hero-title custom-text-secondary text-center">
                    explore the world by <br/><span>travelboot</span>
                </div>
                <div className="hero-text my-4 text-center custom-text-secondary">
                    Welcome to our travel management platform, where every trip is an adventure<br/> to be experienced to the fullest.
                </div>
                <SearchBar />
            </div>
        </div>
    )
}