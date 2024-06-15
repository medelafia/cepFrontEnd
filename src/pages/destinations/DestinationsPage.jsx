import { FormControl, FormGroup, InputLabel, MenuItem, Select, Skeleton } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useFetcher } from "react-router-dom";
import DefaultSkelton from "../../components/DefaultSkeltom";
import Destination from "../../components/Destination";
import FilterCell from "../../components/FilterCell";
import InternalError from "../../components/InternalError";
import { useFetch } from "../../hooks/custom-hooks";
export default function DestinationsPage() {
    const [showFilter , setShowFilter ] = useState(false)  ; 
    const [ nbDestinations , setNbDestinations ] = useState(6)
    const {data , isLoading , error} = useFetch("http://localhost:8089/destinations/")
    const renderDestintions = () => {
        return data?.slice(0 , nbDestinations).map((destination ,index) => <Destination destination={destination} key={index}/>)
    }
    const showMoreDestinations = () => {
        if(data?.length >= nbDestinations + 1) {
            setNbDestinations(prevState => prevState + 1)
        }
    }   
    return(
        <div className="page">
            <div className="w-100 d-flex">
                <input type="text" placeholder="enter the destination name or description" className="form-control mx-1"/>
                <button className="btn custom-btn-secondary mx-1 w-25">search now</button>
            </div>
            <div className="row w-100">
               <div className="col-lg-12 row py-3">
                    { isLoading ? 
                        <>
                            <DefaultSkelton /> 
                            <DefaultSkelton />
                            <DefaultSkelton /> 
                        </>
                        :
                        (error ? 
                        <InternalError />
                        :
                        <>
                            <div className="col-lg-12 d-flex align-items-center justify-content-between w-100">
                                <div>
                                    {data?.length} destination
                                </div>
                                <FormControl fullWidth className="w-25">
                                    <InputLabel>sort by</InputLabel>
                                    <Select>
                                        <MenuItem>price</MenuItem>
                                        <MenuItem>recommended</MenuItem>
                                    </Select>
                                </FormControl>
                            </div> 
                            {  data?.length > 0 ?
                                <> {renderDestintions() }
                                <div className="col-lg-12 d-flex align-items-center justify-content-center w-100 p-1 my-3">
                                    <button className="btn custom-btn-secondary" onClick={showMoreDestinations}>show more</button>
                                </div>
                                </>
                                : 
                                <h1 className="text-capitalize text-center text-danger my-5">
                                    not items
                                </h1>
                            }   
                        </>
                    )
                }
                    </div>
            </div>
        </div>
    )
}