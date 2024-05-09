import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/custom-hooks";
export default function Clients() {
  const [clients, setClients] = useState([]);
  const { isLoading, error, data } = useFetch(
    "ACCOUNTS-SERVICES",
    "/costumers/"
  );
  const renderClients = () => {
    return clients.map((client, index) => (
      <tr>
        <td>{client.id}</td>
        <td>{client.email}</td>
        <td>{client.tel}</td>
        <td>{client.authority}</td>
        <td></td>
      </tr>
    ));
  };
  return (
    <table className="table custom-text-secondary text-center">
      <thead>
        <th>client id</th>
        <th>email</th>
        <th>tel</th>
        <th>autority</th>
        <th>actions</th>
      </thead>
      <tbody className="text-secondary">
        {clients.length == 0 ? (
          <tr>
            <td colSpan="5">no items</td>
          </tr>
        ) : (
          renderClients()
        )}
      </tbody>
    </table>
  );
}
