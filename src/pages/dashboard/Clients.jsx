import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/custom-hooks";
import DataPage from "./DataPage";
export default function Clients() {
  const [clients, setClients] = useState([]);
  const { isLoading, error, data } = useFetch(
    "ACCOUNTS-SERVICES",
    "/costumers/?page=1"
  );
  const cols = ['first name' , "last name" , "age" , "email" ,"profile picture"]; 
  return (
    <DataPage dataColumns={cols} data={data} isLoading={isLoading} error={error} />
  );
}
