import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/custom-hooks";
import DataPage from "./DataPage";

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const cols = ["name" , "country" , "city" , "destinationType"]
  const fetchColumns = ["name" , "country" , "city" , "destinationType"] 
  useEffect(()=>{
    fetch("http://localhost:8089/destinations/")
    .then(res => res.json())
    .then(data => setDestinations(data))
  } , [] )
  return (
    <DataPage data={destinations} dataColumns={cols}  dataAddingPath="/dashboard/addDestination" fetchColumns={fetchColumns}/>
  );
}
