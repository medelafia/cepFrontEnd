import { useState } from "react"
import { useSelector } from "react-redux"
import { useFetch } from "../../hooks/custom-hooks"  
import { userSelector } from "../../store/selectors/userSelector"
import DataPage from "./DataPage"

export default function Rooms() {
    const user = useSelector(userSelector)
   const columns = [
    {field : "id" , headerName : "ID" } , 
    { field : "price" , header : "price"} , 
    {field : "roomType" , headerName : "room type" } , 
    {field : "adults" , headerName : "Adults" } , 
    {field : "childs" , headerName : "Child" }  , 
    {field : "available" , headerName : "available"} , 
    {field : "hasTv" , headerName : "has tv" } , 
    {field : "freeWifi" , headerName : "free wifi" }  , 
    {field : "airConditioning" , headerName : "air conditioning"}
   ]
    return (
        <DataPage columns={columns} dataUrl={"http://localhost:8089/hotels/rooms"} deletePath={"http://localhost:8089/hotels/rooms/"} dataAddingPath="/dashboard/addRoom"/>
    )
}