import { useParams } from "react-router-dom"
import ProviderPage from "./ProviderPage"

export default function RailWayOperatorPage() {
    const {id} = useParams() 
    return(
        <ProviderPage />
    )
} 