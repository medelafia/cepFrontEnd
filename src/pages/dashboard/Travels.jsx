import { useState } from "react";

export default function Travels() {
  const [travels, setTravels] = useState([]);
  const renderTravels = () => {
    return travels.map((travel, index) => (
      <tr>
        <td></td>
      </tr>
    ));
  };
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
      <tbody className="text-secondary">
        {travels.length == 0 ? (
          <tr>
            <td colSpan="7">no items</td>
          </tr>
        ) : (
          renderTravels()
        )}
      </tbody>
    </table>
  );
}
