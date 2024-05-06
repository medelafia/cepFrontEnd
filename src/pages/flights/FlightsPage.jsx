import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Flight from "../../components/Flight"

export default function FlightsPage() {
    const [result , setResult] = useState([])
    const renderFlights = () => {
        return result.map((flight,index) => <Flight /> )
    }
    return(
        <div className="w-100 page">
            <div className="w-100 row p-3">
                search bar
            </div>
            <div className="w-100 row">
                <div className="col-md-4 p-4">
                    <div className="custom-border w-100 rounded p-2">
                    filter side
                    </div>
                </div>
                <div className="col-md-8">
                    {result.length == 0 ? <p className="text-center custom-text-secondary">no flights</p>: renderFlights()}
                </div>
            </div>

        </div>
    )
}