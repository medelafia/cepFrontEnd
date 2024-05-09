import { useState } from "react"
import { useFetch } from "../../hooks/custom-hooks" 

export default function Destinations() {
    const [destinations , setDestinations] = useState([]) 
    const {isLoading , error , data } = useFetch("DESTINATION-SERVICE") ; 
    const renderDestinations = () => {
        return destinations.map((destination , index) => <tr><td></td></tr>)
    }
    return (
                <table className="table custom-text-secondary text-center">
                    <thead>
                        <th>id</th>
                        <th>name</th>
                        <th>address</th>
                        <th>country</th>
                        <th>city</th>
                        <th>destination type</th>
                        <th>actions</th>
                    </thead>
                    <tbody className="text-secondary">
                        {
                            destinations.length == 0
                            ? <tr><td colSpan="7">no items</td></tr>
                            : renderDestinations()
                        }
                    </tbody>
                </table>
    )
}