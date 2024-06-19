import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFetch } from "../../hooks/custom-hooks";
import { userSelector } from "../../store/selectors/userSelector";
import DataPage from "./DataPage";

export default function Cars() {
  const user = useSelector(userSelector); 
  const columns = [
    { field : "id" , headerName : "ID" } , 
    { field : "price" , headerName : "price"} , 
    { field : "make" , headerName : "make" } , 
    { field : "model" , headerName : "model"} , 
    { field : "fuelType" , headerName : "fuel" } , 
    { field : "transType" , headerName : "trans"} , 
    { field : "styleType" , headerName : "style" } , 
    { field : "numberOfSeats" , headerName : "seats"} , 
    { field : "numberOfDoors" , headerName : "doors"} , 
    { field : "numberOfSuitcases" , headerName : "suit cases"} , 
    { field : "airConditioning" , headerName : "air conditioning"} , 
    { field : "freeCancelation" , headerName : "free cancelation"} , 
    { field : "available" , headerName : "available" } 
  ]
  return (
    <DataPage columns={columns} dataUrl={"http://localhost:8089/carsAgencies/"+user.id+"/cars"} dataAddingPath="/dashboard/AddCar"/>
  );
}
