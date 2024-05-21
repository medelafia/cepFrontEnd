import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/custom-hooks";

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
    <table className="table custom-text-secondary text-center">
      <thead>
        <th>id</th>
        <th>name</th>
        <th>address</th>
        <th>country</th>
        <th>city</th>
        <th>destination type</th>
        <th>actions</th>
      </thead>
      {dataLoading ? (
        <tr>
          <td colSpan="7">
            <div class="d-flex justify-content-center p-5">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </td>
        </tr>
      )
    :
      <tbody className="text-secondary">
        {destinations.length == 0 ? (
          <tr>
            <td colSpan="7">no items</td>
          </tr>
        ) : (
          renderDestinations()
        )}
      </tbody>}
    </table>
  );
}
