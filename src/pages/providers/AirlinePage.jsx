import { useParams } from "react-router-dom"
import ImageSlider from "../../components/ImageSlider"
import image from "../../assets/royalAirPic.jpg"
import logo from "../../assets/royalAir.png"
import ProviderPage from "./ProviderPage"

export default function AirlinePage(){
    const {id} = useParams()
    return (
        <ProviderPage />
    )
}