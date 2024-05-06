import "./home.css"
import Hero from "./sections/Hero.jsx"
import Section3 from "./sections/Section3"
import TopDestinations from "./sections/TopDestinations"
export default function Home() {
    return (
        <div className="home">
              <Hero />
              <TopDestinations />
              <Section3 /> 
        </div>
    )
}