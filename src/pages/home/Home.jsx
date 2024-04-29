import "./home.css"
import Hero from "./sections/Hero.jsx"
import TopDestinations from "./sections/TopDestinations"
export default function Home() {
    return (
        <div className="home">
              <Hero />
              <TopDestinations />
        </div>
    )
}