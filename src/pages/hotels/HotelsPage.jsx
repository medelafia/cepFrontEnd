import { useState } from "react"
import Flight from "../../components/Flight"

export default function HotelsPage() {
    const [result , setResult] = useState(["hotel 1"])
    const renderHotels = () => {
        return result.map((hotel,index) => <Flight />)
    }
    return (
        <div className="w-100 page">
            <div className="w-100 p-3 d-flex">
                <input type="text" placeholder="enter a hotel name or destination" className="form-control w-25 mx-1"/>
                <button className="btn custom-btn-secondary mx-1">search now</button>
            </div>
            <div className="w-100 row">
                <div className="col-md-4">
                    filter side
                </div>
                <div className="col-md-8">
                    {result.length == 0 ? <p className="text-center custom-text-secondary">no flights</p>: renderHotels()}
                </div>
            </div>

        </div>
    )
}