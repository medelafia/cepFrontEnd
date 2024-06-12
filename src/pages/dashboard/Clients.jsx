import { useRadioGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/custom-hooks";
import DataPage from "./DataPage";
export default function Clients() {
  const [clients, setClients] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:8089/accounts/costumers/")
    .then(res => res.json()) 
    .then(data => setClients(data))
  })
  const columns = [ {field : "id" , headerName : "id"} ,
                    {field : "firstName" , headerName : "First Name"} , 
                    {field : "lastName" , headerName : "Last Name"} , 
                    {field : "gender" , headerName : "Gender"} , 
                    {field : "age" , headerName : "Age"} , 
                  ]
  const rows = [
    {id : 1 , firstName : "mohamed " , lastName : "el afia" , gender : "male"  , age : 20}
  ]
  return (
    <DataPage columns={columns} rows={clients}/> 
  );
}
