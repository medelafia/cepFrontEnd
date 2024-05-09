import { useState } from "react"
import { useFetch } from "../../hooks/custom-hooks"  

export default function Rooms() {
    const {isLoading , error , data} = useFetch("OFFERS-SERVICES", "/rooms/")
    const [rooms , setRooms] = useState([]) 
    const renderRooms = () => {
        return rooms.map((room , index) => {
            <tr><td></td></tr>
        })
    }
    return (
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
    )
}