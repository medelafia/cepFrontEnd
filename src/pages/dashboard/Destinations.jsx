import { Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/custom-hooks";
import DataPage from "./DataPage";

export default function Destinations() {
  const columns = [
    {field : "name", headerName :"name" }, 
    {field : "country", headerName :"country" }, 
    {field : "city", headerName :"city" }, 
    {field : "destinationType", headerName :"destination type" } 
  ]
  return (
    <DataPage dataUrl="http://localhost:8089/destinations/" deletePath="http://localhost:8089/destinations/" columns={columns} dataAddingPath="/dashboard/addDestination" />
  );
}
