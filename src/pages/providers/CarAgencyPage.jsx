import { useParams } from "react-router-dom"


export default function CarAgencyPage() {
    const {id} = useParams() 
    return (
        <div>
            car agency page {id}
        </div>
    )
}