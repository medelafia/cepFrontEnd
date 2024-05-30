import { useState } from "react"
import { useFetch } from "../../hooks/custom-hooks"  
import DataPage from "./DataPage"

export default function Rooms() {
    const {isLoading , error , data} = useFetch("OFFERS-SERVICES", "/rooms/")
    const [rooms , setRooms] = useState([]) 
    const renderRooms = () => {
        return rooms.map((room , index) => {
            <tr><td></td></tr>
        })
    }
    const cols = ["col1" , "col 2" , "col 3"]
    return (
        <DataPage dataColumns={cols} data={rooms}/>
    )
}