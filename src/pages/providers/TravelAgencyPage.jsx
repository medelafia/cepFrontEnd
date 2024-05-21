import { useParams } from "react-router-dom"

export default function TravelAgencyPage() {
    const {id} = useParams() 
    return (
        <div className="page"> 
            travel agency page {id}
        </div>
    )
}