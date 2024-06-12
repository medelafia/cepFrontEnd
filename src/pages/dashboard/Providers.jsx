import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/custom-hooks";
import DataPage from "./DataPage";

export default function Providers() {
  const [providers, setProviders] = useState([]);
  useEffect(()=>{
      fetch("http://localhost:8089/providers/")
      .then(res => res.json())
      .then(data => setProviders(data))
  } , [])
  const columns = [
    {field: "companyName" , headerName : "company name" } ,
    {field: "providerType" , headerName : "provider type"} ,
    {field: "country" , headerName :"country" } 
  ]
  return (
    
    <DataPage columns={columns} rows={providers}/>
  );
}
