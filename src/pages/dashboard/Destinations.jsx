import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/custom-hooks";
import DataPage from "./DataPage";

export default function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const renderDestinations = () => {
    return destinations.map((destination, index) => (
      <tr>
        <td></td>
      </tr>
    ));
  };
  useEffect(() => {
    setDataLoading(true);
    fetch("http://localhost:8888/DESTINATIONS-SERVICES/destinations/")
        .then(res => {
            console.log(res.status)
            if(res.status != 200) {
                 
                setDataLoading(false) ; 
            }else {
                return res.json()
            }
        })
        .then(data => {
            setDestinations(data) ; 
            setDataLoading(false) 
        })
  });
  return (
    <DataPage dataColumns={["name","address" , "country" , "city" , "destination type" ]} data={destinations}/> 
  );
}
