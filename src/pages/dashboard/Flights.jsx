import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/custom-hooks";
import DataPage from "./DataPage";

export default function Flights() {
  const [flights, setFlights] = useState([]);
  const { isLoading, error, data } = useFetch("OFFERS-SERVICES", "/flights/");
  const renderFlights = () => {
    return flights.map((flight, index) => {
      <tr></tr>;
    });
  };
  const cols = ["price" , "number places" , "date", "begin time" , "arrived time" , "distance" , "airline name" , "flight class"]
  return (
    <DataPage data={data} dataColumns={cols} data_adding_path="/dashboard/addFlight"/>
  );
}
