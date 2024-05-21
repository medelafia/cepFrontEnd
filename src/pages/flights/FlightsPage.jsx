import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Flight from "../../components/Flight"

export default function FlightsPage() {
    const [result , setResult] = useState(["1",""])
    const renderFlights = () => {
        return result.map((flight,index) => <Flight /> )
    }
    return(
        <div className="w-100 page">
            <form className="w-100 d-flex align-items-center justify-content-between no-wrap">
                <input type="text" name="" className="rounded-pill form-control d-inline mx-1" id="from" placeholder="from"/>
                <input type="text" name="" className="rounded-pill form-control d-inline mx-1" id="" placeholder="to"/>
                <input type="date" className="rounded-pill form-control d-inline mx-1" id="" placeholder="depart"/>
                <input type="date" className="rounded-pill form-control d-inline mx-1" id="" placeholder="depart"/>
                <button className="btn custom-btn-primary rounded-pill mx-1">search</button>
            </form>
            <div className="w-100 row">
                <div className="col-md-4 p-4">
                    <div className="custom-border w-100 rounded p-2">
                    filter side
                    </div>
                </div> 
                <div className="col-md-8 py-3">
                    {result.length == 0 ? <p className="text-center custom-text-secondary">no flights</p>: renderFlights()}
                </div>
            </div>

        </div>
    )
}