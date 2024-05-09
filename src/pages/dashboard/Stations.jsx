import { useEffect, useState } from "react"
import { useFetch } from "../../hooks/custom-hooks";

export default function Stations() {
    const {} = useFetch("GATES-SERVICES" , "/gates/")
    const [stations , setStations ] = useState([]) ;
    useEffect(()=>{
        fetch("http://localhost:8084/airports/")
        .then(res => res.json())
        .then(data => setStations(data))
    } , [])
    const renderTable = () => {
        return stations.map((station , index) => 
            <tr key={index}>
                <td>{station.id}</td>
                <td>{station.name}</td>
                <td>{station.address}</td>
                <td>{station.country}</td>
                <td>{station.city}</td>
                <td>{station.lng}</td>
                <td>{station.lat}</td>
                <td>{station.nbPhoneContact}</td>
                <td>{station.emailContact}</td>
                <td>{station.id}</td>
                <td>
                    <button className="btn text-danger"><i class="fa-solid fa-trash"></i></button>
                    <button className="btn text-success"><i class="fa-solid fa-pen-to-square"></i></button>
                </td>
            </tr>
        )
    }
    return (
        <table className="table custom-text-secondary text-center">
            <thead>
                <th>id</th>
                <th>name</th>
                <th>address</th>
                <th>country</th>
                <th>city</th>
                <th>long</th>
                <th>lat</th>
                <th>email</th>
                <th>phone</th>
                <th>type</th>
                <th>actions</th>
            </thead>
            <tbody className="text-secondary">
                {(stations.length != 0) ?  renderTable() :<tr><td colSpan="11">no items</td></tr> }
            </tbody>
        </table> 
    )
}