import { useParams } from "react-router-dom"

export default function RailWayOperatorPage() {
    const {id} = useParams() 
    return(
        <div>
            railway operator page {id}
        </div>
    )
} 