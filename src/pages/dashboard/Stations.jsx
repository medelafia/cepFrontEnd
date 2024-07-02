import { useEffect, useState } from "react"
import { useFetch } from "../../hooks/custom-hooks";
import DataPage from "./DataPage";

export default function Stations() {
    const columns = [
    { field : "id" , headerName : "id"} , 
    {field :"name" , headerName : "name"} ,
    {field : "address" , headerName : "address"}  ,
    {field : "country" , headerName : "country" } ,
    {field :  "lng" , headerName : "longitue" }, 
    { field : "lat" , headerName : "latitude" }] 
    return (
        <DataPage columns={columns} dataUrl="http://localhost:8089/admin/gates/" deletePath="http://localhost:8089/admin/gates/" dataAddingPath="/dashboard/addGate"/>
    )
}