import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/custom-hooks";
import DataPage from "./DataPage";

export default function Providers() {
  const columns = [
    { field : "id" , headerName : "user id"} , 
    {field: "name" , headerName : "company name" } ,
    {field: "providerType" , headerName : "provider type"} ,
    {field: "email" , headerName :"email" }  , 
    {field: "webSiteUrl" , headerName :"web Site Url" }  ,
    {field: "nbPhone" , headerName :"number of phone" }  
  ]
  return (
    <DataPage columns={columns} dataUrl="http://localhost:8089/provider/" />
  );
}
