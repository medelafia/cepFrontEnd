import { useParams } from "react-router-dom"

export default function HotelPage() {
    const {id} = useParams() 
    return (
        <div>
            hotel {id}
        </div>
    )
}