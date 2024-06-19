import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/custom-hooks";
import DataPage from "./DataPage";

export default function Providers() {
  const columns = [
    {field: "companyName" , headerName : "company name" } ,
    {field: "providerType" , headerName : "provider type"} ,
    {field: "country" , headerName :"country" } 
  ]
  return (
    
    <DataPage columns={columns} dataUrl="http://localhost:8089/provider/" />
  );
}
