import { useEffect, useState } from "react"

export default function Stations() {
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
        <div className="py-3 px-5 h-75">
            <div className="d-flex align-items-center justify-content-between">
                <div className="custom-text-secondary text-capitalize">dashboard / Cars </div>
                <button className="btn custom-btn-secondary"><i class="fa-solid fa-plus mx-1"></i>add station</button>
            </div>
            <div className="bg-white p-2 rounded my-2 h-100">
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
            </div>
        </div>
    )
}