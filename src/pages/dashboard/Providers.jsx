import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/custom-hooks";
import DataPage from "./DataPage";

export default function Providers() {
  const [providers, setProviders] = useState([]);
  const cols = ["company name" , "provider type" , "country" ]
  const fetchCols = ["companyName" , "providerType" , "country"]
  useEffect(()=>{
      fetch("http://localhost:8089/accounts/providers/")
      .then(res => res.json())
      .then(data => setProviders(data))
  } , [])
  return (
    
    <DataPage dataColumns={cols} fetchColumns={fetchCols} data={providers}/>
  );
}
