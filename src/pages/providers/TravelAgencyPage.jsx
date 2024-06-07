import { useParams } from "react-router-dom"
import ProviderPage from "./ProviderPage"

export default function TravelAgencyPage() {
    const {id} = useParams() 
    return (
        <ProviderPage />
    )
}