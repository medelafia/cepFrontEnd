import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData, useLocation, useParams } from "react-router-dom";
import InternalError from "../../components/InternalError";
import NoItems from "../../components/NoItems";
import ShowMore from "../../components/ShowMore";
import { useFetch } from "../../hooks/custom-hooks";
import Provider from "./componants/Provider";
import ProviderItemsMenu from "./componants/ProviderItemMenu";
import ProviderSkeleton from "./componants/ProviderSkeleton";

export default function ProvidersPage() {
  const { type } = useParams() 
  const { data , error , isLoading} = useFetch("http://localhost:8089/provider/")
  const [ nbElements , setNbElements ] = useState(8)
  const [ providerType , setProviderType ] = useState("all") 
  const [ providers  , setProviders ] = useState([])
  useEffect(()=>{
    setProviderType(type == undefined ? "all" : type)
  },[])
  useEffect(()=>{
    setProviders(data)
  } , [data])
  useEffect(()=>{
    setNbElements(8)
    if(providerType == "all") {
      setProviders(data)
    }else {
      setProviders( data?.filter((provider , index) => provider.providerType == providerType))
    }
  } , [providerType])
  const renderProviders = () => {
    return providers?.map((provider , index) => <Provider provider={provider}/>).slice(0, nbElements)
  }
  return (
    <div className="page">
      <div className="custom-container py-1">
        <header className="w-100 d-flex align-items-center justify-content-start p-3 border-bottom">
          <ProviderItemsMenu text="all" active={providerType == "all"} onClickFunction={()=>setProviderType("all")}/> 
          <ProviderItemsMenu text="airlines" active={providerType == "AIRLINE"} onClickFunction={()=>setProviderType("AIRLINE")}/> 
          <ProviderItemsMenu text="railways" active={providerType == "RAILWAY_OPERATOR"} onClickFunction={()=>setProviderType("RAILWAYS_OPERATOR")}/> 
          <ProviderItemsMenu text="hotels" active={providerType == "HOTEL"} onClickFunction={()=>setProviderType("HOTEL")}/> 
          <ProviderItemsMenu text="cars agencies" active={providerType == "CARS_AGENCY"} onClickFunction={()=>setProviderType("CARS_AGENCY")}/>
          <ProviderItemsMenu text="travels agencies" active={providerType == "TRAVELS_AGENCY"} onClickFunction={()=>setProviderType("TRAVELS_AGENCY")}/>
        </header>
        <div className="d-flex align-items-center justify-content-between my-2">
            <div>{providers?.length} result</div>
            <FormControl fullWidth className="w-25">
                <InputLabel>sort by</InputLabel>
                <Select>
                    <MenuItem>recommended</MenuItem>
                    <MenuItem>name</MenuItem>
                </Select>
            </FormControl>
        </div>
        <div className="row mb-5">
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
                        {providers?.length != 0 ? renderProviders() : <NoItems />}
                        {providers?.length > nbElements && <ShowMore callBack={() => setNbElements(nbElements + 8)} />}
                    </>
                )
            }
        </div>
      </div>
    </div>
  );
}
