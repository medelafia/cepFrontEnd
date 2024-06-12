import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useFetch } from "../../hooks/custom-hooks";
import { userSelector } from "../../store/selectors/userSelector";
import DataPage from "./DataPage";

export default function Flights() {
  const [flights, setFlights] = useState([]);
  const user = useSelector(userSelector)
  const cols = ["price" , "number places" , "date", "begin time" , "arrived time" , "distance" , "flight class"]
  useEffect(()=>{
    fetch("http://localhost:8089/flights/"+user.id )
    .then(res => res.json())
    .then(data => setFlights(data)) 
  })
  const fetchColumns = ["price" , "nbOfPlaces" , "startTime" , "endTime" , "distance" , "flightClass"]
  return (
    <DataPage  dataAddingPath="/dashboard/addFlight" />
  );
}
