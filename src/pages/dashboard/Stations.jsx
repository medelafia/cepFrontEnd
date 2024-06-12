import { useEffect, useState } from "react"
import { useFetch } from "../../hooks/custom-hooks";
import DataPage from "./DataPage";

export default function Stations() {
    const {} = useFetch("ACCOUNT-SERVICE" , "/gates/")
    const [stations , setStations ] = useState([]) ;
    useEffect(()=>{
        fetch("http://localhost:8089/gates/")
        .then(res => res.json())
        .then(data => setStations(data))
    } , [])
    const columns = [{field :"name" , headerName : "name"} ,
    {field : "address" , headerName : "address"}  ,
    {field : "country" , headerName : "country" } ,
    {field : "city" , headerName :"city"  } ,
    {field :  "lng" , headerName : "longitue" }, 
    { field : "lat" , headerName : "latitude" },
    {field : "emailContact" , headerName : "email"} , 
    {field : "nbPhoneContact" , headerName : "contact number"}] 
    return (
        <DataPage 
            columns={columns}
            rows={stations} 
            dataAddingPath="/dashboard/addGate"
            deletePath="http://localhost:8089/gates/"
            />
    )
}