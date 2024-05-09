import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/custom-hooks";

export default function Flights() {
  const [flights, setFlights] = useState([]);
  const { isLoading, error, data } = useFetch("OFFERS-SERVICES", "/flights/");
  const renderFlights = () => {
    return flights.map((flight, index) => {
      <tr></tr>;
    });
  };

  return (
    <table className="table custom-text-secondary text-center">
      <thead>
        <tr>
          <th>id</th>
          <th>price</th>
          <th>number places</th>
          <th>date</th>
          <th>begin time</th>
          <th>arrived time</th>
          <th>distance</th>
          <th>airline name</th>
          <th>flight class</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody className="text-secondary">
        {flights.length == 0 ? (
          <tr>
            <td colSpan="10">no items</td>
          </tr>
        ) : (
          renderFlights()
        )}
      </tbody>
    </table>
  );
}
