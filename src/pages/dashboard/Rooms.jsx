import { useState } from "react"
import { useSelector } from "react-redux"
import { useFetch } from "../../hooks/custom-hooks"  
import { userSelector } from "../../store/selectors/userSelector"
import DataPage from "./DataPage"

export default function Rooms() {
    const user = useSelector(userSelector)
   const columns = [
    {field : "id" , headerName : "ID" } , 
    {field : "nbOfRooms" , headerName : "Rooms" } , 
    {field : "roomType" , headerName : "room type" } , 
    {field : "nbOfAdults" , headerName : "Adults" } , 
    {field : "nbOfChild" , headerName : "Child" }  , 
    {field : "available" , headerName : "available"}
   ]
    return (
        <DataPage columns={columns} dataUrl={"http://localhost:8089/hotels/"+user.id+"/rooms"} deletePath={"http://localhost:8089/hotels/"+user.id+"/rooms/"} dataAddingPath="/dashboard/addRoom"/>
    )
}