import { useState } from "react"

export default function Cars() {
    const [carsTable , setCarTable] = useState([
        {"make" : "mercedes" , "model" : "mnk" , "year" : 2010 , "color" : "white" , "fuel type" : "gasoil" , "trans type" : "automatique" , "style type" : "normal" } , 
        {"make" : "mercedes" , "model" : "mnk" , "year" : 2010 , "color" : "white" , "fuel type" : "gasoil" , "trans type" : "automatique" , "style type" : "normal" } ,
        {"make" : "mercedes" , "model" : "mnk" , "year" : 2010 , "color" : "white" , "fuel type" : "gasoil" , "trans type" : "automatique" , "style type" : "normal" } 
    ]) ; 
    const displayCars = () => {
        console.log(carsTable)
        return carsTable.map((car,index) => <tr key={index}>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
                        <td>{car.year}</td>
                        <td>{car.color}</td>
                        <td>{car["fuel type"]}</td>
                        <td>{car["trans type"]}</td>
                        <td>{car["style type"]}</td>
                </tr>
                )
    }
    return (
        <div className="py-3 px-5 h-75">
            <div className="d-flex align-items-center justify-content-between">
                <div className="custom-text-secondary text-capitalize">dashboard / Cars </div>
                <button className="btn custom-btn-secondary"><i class="fa-solid fa-plus mx-1"></i>add car</button>
            </div>
            <div className="bg-white p-2 rounded my-2 h-100">
                <table className="table custom-text-secondary text-center">
                    <thead>
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
                        {displayCars}
                    </tbody>
                </table>
            </div>
            <div className="bg-white rounded p-2">
                 x,,d
            </div>
        </div>
    )
}