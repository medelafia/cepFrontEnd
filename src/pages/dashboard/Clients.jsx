import { useRadioGroup } from "@mui/material";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/custom-hooks";
import DataPage from "./DataPage";
export default function Clients() {
  const columns = [ {field : "id" , headerName : "id"} ,
                    {field : "firstName" , headerName : "First Name"} , 
                    {field : "lastName" , headerName : "Last Name"} , 
                    {field : "gender" , headerName : "Gender"} , 
                    {field : "age" , headerName : "Age"} , 
                  ]
  return (
    <DataPage dataUrl="http://localhost:8089/accounts/costumers/" columns={columns} /> 
  );
}
