import { useState } from "react"

export default function Cars() {
    const [cars , setCars] = useState([
        {"id":1 , "make" : "mercedes" , "model" : "mnk" , "year" : 2010 , "color" : "white" , "fuel type" : "gasoil" , "trans type" : "automatique" , "style type" : "normal" } , 
        {"id":2 ,"make" : "mercedes" , "model" : "mnk" , "year" : 2010 , "color" : "white" , "fuel type" : "gasoil" , "trans type" : "automatique" , "style type" : "normal" } ,
        {"id":3 ,"make" : "mercedes" , "model" : "mnk" , "year" : 2010 , "color" : "white" , "fuel type" : "gasoil" , "trans type" : "automatique" , "style type" : "normal" } 
    ]) ; 
    const renderCars = () => {
        return cars.map((car,index) => <tr key={index}>
                        <td>{car.id}</td>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
                        <td>{car.year}</td>
                        <td>{car.color}</td>
                        <td>{car["fuel type"]}</td>
                        <td>{car["trans type"]}</td>
                        <td>{car["style type"]}</td>
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
                <button className="btn custom-btn-secondary"><i class="fa-solid fa-plus mx-1"></i>add car</button>
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
                        {cars.length == 0 ? <tr><td colSpan="9">no items</td></tr> : renderCars()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}