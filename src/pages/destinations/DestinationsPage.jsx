import { Skeleton } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useFetcher } from "react-router-dom";
import DefaultSkelton from "../../components/DefaultSkeltom";
import Destination from "../../components/Destination";
import FilterCell from "../../components/FilterCell";
import { useFetch } from "../../hooks/custom-hooks";
export default function DestinationsPage() {
    const [showFilter , setShowFilter ] = useState(false)  ; 
    const [ destinations ,  setDestinations ] = useState([])
    const [ nbDestinations , setNbDestinations ] = useState(6)
    const {data , isLoading , error} = useFetch("http://localhost:8089/destinations/")
    const renderDestintions = () => {
        return destinations.slice(0 , nbDestinations).map((destination ,index) => <Destination destination={destination} key={index}/>)
    }
    const showMoreDestinations = () => {
        if(destinations.length >= nbDestinations + 1) {
            setNbDestinations(prevState => prevState + 1)
        }
    }   
    useEffect(()=>{
        if(data != null ) setDestinations(data) 
    } , [data])
    return(
        <div className="page">
            <div className="w-100 d-flex">
                <input type="text" placeholder="enter the destination name or description" className="form-control mx-1"/>
                <button className="btn custom-btn-secondary mx-1 w-25">search now</button>
            </div>
            <div className="row w-100">
               <div className="col-lg-12 row p-3">
                    <div className="col-lg-12 d-flex align-items-center justify-content-between w-100 p-3">
                        <div>
                            100 destination
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <button className="btn border mx-2 d-flex align-items-center" onClick={()=>setShowFilter(!showFilter)}>
                                <i class="fa-solid fa-filter me-2"></i>
                                <span>filter</span>
                            </button>
                            <select name="" id="" className="form-select">
                                <option value="">recommended</option>
                                <option value="">most </option>
                            </select>
                        </div>
                    </div>
                    { showFilter && 
                        <div className="d-flex align-items-center justify-content-between my-3">
                            <select name="" id="" className="form-select me-2"></select>
                            <select name="" id="" className="form-select mx-1"></select>
                            <select name="" id="" className="form-select ms-2"></select>
                        </div>
                    }
                    {isLoading && 
                        <>
                            <DefaultSkelton /> 
                            <DefaultSkelton />
                            <DefaultSkelton />
                        </>
                    }
                    {renderDestintions()}
                    <div className="col-lg-12 d-flex align-items-center justify-content-center w-100 p-1 my-3">
                        <button className="btn custom-btn-secondary" onClick={showMoreDestinations}>show more</button>
                    </div>
               </div> 
            </div>
        </div>
    )
}