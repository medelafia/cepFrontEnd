import { useSelect } from "@mui/base";
import { useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/selectors/userSelector";
import DataPage from "./DataPage";

export default function Travels() {
  const user = useSelector(userSelector) 
  const columns = [
    { field :  "id" , headerName : "ID" } , 
    { field :  "price", headerName : "price"} , 
    { field :  "distance", headerName : "distance"} , 
    { field :  "departureDate", headerName : "date"} , 
    { field : "departureTime" , headerName : "start time"} , 
    { field : "arrivedTime" , headerName : "end time"} , 
    { field : "nbOfPlaces" , headerName : "nbOfPlaces"} ,
    { field : "nbOfStops" , headerName : "Stops"} , 
    { field : "reservedPlaces" , headerName : "reserved"} , 
    { field : "nbDays" , headerName : "days"} , 
    { field : "origin" , headerName : "origin"} , 
    { field : "destination" , headerName : "destination"} , 
    { field : "includeTrans" , headerName : "include Transort"} , 
    { field : "includeHotel" , headerName : "include hotel"} , 
  ]
  return (
    <DataPage dataUrl={"http://localhost:8089/travelAgencies/"+user.id+"/organizedTravels"} dataAddingPath={"/dashboard/addTravel"} columns={columns} />
  );
}
 