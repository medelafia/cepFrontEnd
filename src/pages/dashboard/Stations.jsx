import { useEffect, useState } from "react"
import { useFetch } from "../../hooks/custom-hooks";
import DataPage from "./DataPage";

export default function Stations() {
    const columns = [
    { field : "id" , headerName : "id"} , 
    {field :"name" , headerName : "name"} ,
    {field : "address" , headerName : "address"}  ,
    {field : "country" , headerName : "country" } ,
    {field : "city" , headerName :"city"  } ,
    {field :  "lng" , headerName : "longitue" }, 
    { field : "lat" , headerName : "latitude" },
    {field : "emailContact" , headerName : "email"} , 
    {field : "nbPhoneContact" , headerName : "contact number"}] 
    return (
        <DataPage columns={columns} dataUrl="http://localhost:8089/gates/" dataAddingPath="/dashboard/addGate"/>
    )
}