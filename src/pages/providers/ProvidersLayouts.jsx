import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { Link, Outlet, useLoaderData, useLocation } from "react-router-dom";
import InternalError from "../../components/InternalError";
import ShowMore from "../../components/ShowMore";
import { useFetch } from "../../hooks/custom-hooks";
import Provider from "./componants/Provider";
import ProviderItemsMenu from "./componants/ProviderItemMenu";
import ProviderSkeleton from "./componants/ProviderSkeleton";

export default function ProvidersLayout() {
  const { pathname } = useLocation();
  const { data , error , isLoading} = useFetch("http://localhost:8089/provider/")
  const [ nbElements , setNbElements ] = useState(8)
  const renderProviders = () => {
    return data?.map((provider , index) => <Provider provider={provider}/>).slice(0, nbElements)
  }
  return (
    <div className="page">
      <div className="custom-container py-1">
        <header className="w-100 d-flex align-items-center justify-content-start p-3 border-bottom">
          <ProviderItemsMenu text="all" active/> 
          <ProviderItemsMenu text="airlines"/> 
          <ProviderItemsMenu text="railways"/> 
          <ProviderItemsMenu text="hotels"/> 
          <ProviderItemsMenu text="cars agencies"/>
          <ProviderItemsMenu text="travels agencies"/>
        </header>
        <div className="d-flex align-items-center justify-content-between my-2">
            <div>{data?.length} result</div>
            <FormControl fullWidth className="w-25">
                <InputLabel>sort by</InputLabel>
                <Select>
                    <MenuItem>recommended</MenuItem>
                    <MenuItem>name</MenuItem>
                </Select>
            </FormControl>
        </div>
        <div className="row">
            {
                isLoading ? 
                <>
                    <ProviderSkeleton /> 
                    <ProviderSkeleton /> 
                    <ProviderSkeleton /> 
                    <ProviderSkeleton /> 
                </>
                : ( 
                    error ? 
                        <><InternalError /></>
                    :
                    <>
                        {renderProviders()}
                        {data?.length > nbElements && <ShowMore callBack={() => setNbElements(nbElements + 8)} />}
                    </>
                )
            }
        </div>
      </div>
    </div>
  );
}
