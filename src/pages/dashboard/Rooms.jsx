import { useState } from "react"

export default function Rooms() {
    const [rooms , setRooms] = useState([]) 
    const renderRooms = () => {
        return rooms.map((room , index) => {
            <tr><td></td></tr>
        })
    }
    return (
        <div className="py-3 px-5 h-75">
            <div className="d-flex align-items-center justify-content-between">
                <div className="custom-text-secondary text-capitalize">dashboard / Rooms </div>
                <button className="btn custom-btn-secondary"><i class="fa-solid fa-plus mx-1"></i>add room</button>
            </div>
            <div className="bg-white p-2 rounded my-2 h-100">
                <table className="table custom-text-secondary text-center">
                    <thead>
                        <th>id</th>
                        <th>make</th>
                        <th>model</th>
                        <th>year</th>
                        <th>color</th>
                        <th>fuel type</th>
                        <th>trans type</th>
                        <th>style type</th>
                        <th>actions</th>
                    </thead>
                    <tbody className="text-secondary">
                        {
                            rooms.length == 0 
                            ? <tr><td colSpan="9">no items</td></tr>
                            : renderRooms() 
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}