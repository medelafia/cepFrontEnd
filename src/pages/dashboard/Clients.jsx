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
  const cols = ["first name" , "last name" , "gender" , "age"] ; 
  const colsFetch = ["firstName" , "lastName" , "gender" , "age"] 
  return (
    <DataPage data={clients} dataColumns={cols} fetchColumns={colsFetch} /> 
  );
}
