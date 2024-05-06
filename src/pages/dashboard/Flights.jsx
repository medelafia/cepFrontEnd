import { useState } from "react"

export default function Flights(){
    const [ flights , setFlights ] =useState([]) 
    const renderFlights = () => {
        return flights.map((flight , index ) => {
            <tr>
            
            </tr>
        })
    }
    return (
        <div className="py-3 px-5 h-75">
            <div className="d-flex align-items-center justify-content-between">
                <div className="custom-text-secondary text-capitalize">dashboard / flights</div>
                <button className="btn custom-btn-secondary"><i class="fa-solid fa-plus mx-1"></i>add flight</button>
            </div>
            <div className="bg-white p-2 rounded my-2 h-100">
                <table className="table custom-text-secondary text-center">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>price</th>
                            <th>number places</th>
                            <th>date</th>
                            <th>begin time</th>
                            <th>arrived time</th>
                            <th>distance</th>
                            <th>airline name</th>
                            <th>flight class</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-secondary">
                        {flights.length == 0 ? <tr><td colSpan="10">no items</td></tr> : renderFlights()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}