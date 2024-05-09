import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/custom-hooks";

export default function Cars() {
  const [cars, setCars] = useState([
    {
      id: 1,
      make: "mercedes",
      model: "mnk",
      year: 2010,
      color: "white",
      "fuel type": "gasoil",
      "trans type": "automatique",
      "style type": "normal",
    },
    {
      id: 2,
      make: "mercedes",
      model: "mnk",
      year: 2010,
      color: "white",
      "fuel type": "gasoil",
      "trans type": "automatique",
      "style type": "normal",
    },
    {
      id: 3,
      make: "mercedes",
      model: "mnk",
      year: 2010,
      color: "white",
      "fuel type": "gasoil",
      "trans type": "automatique",
      "style type": "normal",
    },
  ]);
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
  useEffect(() => {}, []);
  return (
    <table className="table custom-text-secondary text-center">
      <thead>
        <th>id</th>
        <th>make</th>
        <th>model</th>
        <th>year</th>
        <th>color</th>
        <th>fuel type</th>
        <th>trans type</th>
        <th>style type</th>
        <th>actions</th>
      </thead>
      <tbody className="text-secondary">
        {cars.length == 0 ? (
          <tr>
            <td colSpan="9">no items</td>
          </tr>
        ) : (
          renderCars()
        )}
      </tbody>
    </table>
  );
}
