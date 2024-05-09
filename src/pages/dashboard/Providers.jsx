import { useState } from "react";
import { useFetch } from "../../hooks/custom-hooks";

export default function Providers() {
  const [providers, setProviders] = useState([]);
  const {} = useFetch("ACCOUNT-SERVICE", "/providers/");
  const renderProviders = () => {
    return providers.map((provider, index) => (
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
        {providers.length == 0 ? (
          <tr>
            <td colSpan="7">no items</td>
          </tr>
        ) : (
          renderProviders()
        )}
      </tbody>
    </table>
  );
}
