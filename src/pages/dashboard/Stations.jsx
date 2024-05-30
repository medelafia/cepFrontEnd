import { useEffect, useState } from "react"
import { useFetch } from "../../hooks/custom-hooks";
import DataPage from "./DataPage";

export default function Stations() {
    const {} = useFetch("GATES-SERVICES" , "/gates/")
    const [stations , setStations ] = useState([]) ;
    useEffect(()=>{
        fetch("http://localhost:8084/airports/")
        .then(res => res.json())
        .then(data => setStations(data))
    } , [])
    const cols = ["name" , "address" , "country" , "city" , "long" , "lat" , "email" , "phone" , "phone" , "type"] 
    return (
        <DataPage dataColumns={cols} data={stations}/>
    )
}