import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFetch } from "../../hooks/custom-hooks";
import { userSelector } from "../../store/selectors/userSelector";
import DataPage from "./DataPage";

export default function Flights() {
  const user = useSelector(userSelector)
  const columns = [
    {field : "price", headerName : "price"} , 
    {field : "distance", headerName :"Distance" } , 
    {field : "date", headerName : "date"} , 
    {field : "nbOfPlaces", headerName : "number of places"} , 
    {field : "nbOfStops", headerName : "numbers of stops"} , 
    {field : "from", headerName : "from"} ,  
    {field : "to" , headerName : "to"}, 
    {field : "reservedPlaces" , headerName : "reserved places"} , 
    { field : "startTime" , headerName : "start time"} , 
    {field : "endTime" , headerName : "end time"}
  ]
  return (
    <DataPage dataUrl={"http://localhost:8089/airlines/"+ user.id + "/flights"} columns={columns} dataAddingPath="/dashboard/addFlight" />
  );
}
