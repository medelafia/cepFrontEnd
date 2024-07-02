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
  const [ isLoading , setIsLoading] = useState(false)
  const [ error , setError ] = useState(true)
  const [ nbElements , setNbElements ] = useState(8)
  const [ providerType , setProviderType ] = useState("all") 
  const [ providers  , setProviders ] = useState([])
  useEffect(()=>{
    setProviderType(type == undefined ? "all" : type)
    fetch("http://localhost:8089/public/providers/")
    .then(res => {
      if(res.status == 200) {
        setIsLoading(false)
        return res.json()
      }else {
        setError("cannot read data") 
        setIsLoading(false)
      }
    })
    .then(data => {
      setProviders(data)
    })
  },[])
  const renderProviders = () => {
    return providerType == "all" ? providers?.map((provider , index) => <Provider provider={provider}/>).slice(0, nbElements)
     : providers?.filter((provider , index) => provider.providerType == providerType)
                .map((provider , index) => <Provider provider={provider}/>).slice(0, nbElements)

  }
  return (
    <div className="page">
      <div className="custom-container py-1">
        <header className="w-100 d-flex align-items-center justify-content-start p-3 border-bottom">
          <ProviderItemsMenu text="all" active={providerType == "all"} onClickFunction={()=>setProviderType("all")}/> 
          <ProviderItemsMenu text="airlines" active={providerType == "AIRLINE"} onClickFunction={()=>setProviderType("AIRLINE")}/> 
          <ProviderItemsMenu text="railways" active={providerType == "RAILWAYOPERATOR"} onClickFunction={()=>setProviderType("RAILWAYOPERATOR")}/> 
          <ProviderItemsMenu text="hotels" active={providerType == "HOTEL"} onClickFunction={()=>setProviderType("HOTEL")}/> 
          <ProviderItemsMenu text="cars agencies" active={providerType == "CARAGENCY"} onClickFunction={()=>setProviderType("CARAGENCY")}/>
          <ProviderItemsMenu text="travels agencies" active={providerType == "TRAVELAGENCY"} onClickFunction={()=>setProviderType("TRAVELAGENCY")}/>
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
                    error == null  ? 
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
