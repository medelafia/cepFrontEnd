import "./home.css"
import Hero from "./sections/Hero.jsx"
import Section3 from "./sections/Section3"
import Section4 from "./sections/Section4"
import Section5 from "./sections/Section5"
import Section6 from "./sections/Section6"
import TopDestinations from "./sections/TopDestinations"
export default function Home() {
    return (
        <div className="home">
              <Hero />
              <TopDestinations />
              <Section3 /> 
              <Section6 />
              <Section4 /> 
              <Section5 />
        </div>
    )
}