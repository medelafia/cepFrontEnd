import { useState } from "react";
import { useFetch } from "../../hooks/custom-hooks";
import DataPage from "./DataPage";

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
    
    <DataPage dataColumns={["name" , "provider type" , "logo" ]} data={providers}/>
  );
}
