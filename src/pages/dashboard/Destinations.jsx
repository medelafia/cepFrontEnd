import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/custom-hooks";
import DataPage from "./DataPage";

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:8089/destinations/")
    .then(res => res.json())
    .then(data => setDestinations(data))
  } , [] )
  const columns = [
    {field : "name", headerName :"name" }, 
    {field : "country", headerName :"country" }, 
    {field : "city", headerName :"city" }, 
    {field : "destinationType", headerName :"destination type" }
  ]
  return (
    <DataPage columns={columns} rows={destinations}  dataAddingPath="/dashboard/addDestination" />
  );
}
