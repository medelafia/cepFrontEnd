import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/custom-hooks";
import DataPage from "./DataPage";

export default function Cars() {
  const [cars, setCars] = useState([]);
  const { isLoading, error, data } = useFetch("OFFERS-SERVICES", "/cars/");
  const renderCars = () => {
    return cars.map((car, index) => (
      <tr key={index}>
        <td>{car.id}</td>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{car.color}</td>
        <td>{car["fuel type"]}</td>
        <td>{car["trans type"]}</td>
        <td>{car["style type"]}</td>
        <td>
          <button className="btn text-danger">
            <i class="fa-solid fa-trash"></i>
          </button>
          <button className="btn text-success">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </td>
      </tr>
    ));
  };
  useEffect(() => {
  }, []);
  return (
    <DataPage/>
  );
}
