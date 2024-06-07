import { useState } from "react";
import Destination from "../../components/Destination";
import FilterCell from "../../components/FilterCell";
export default function DestinationsPage() {
    const [showFilter , setShowFilter ] = useState(false)  ; 
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
                    <Destination />
                    <Destination /> 
                    <Destination />
                    <Destination />
                    <Destination /> 
                    <Destination />
                    <Destination />
                    <Destination /> 
                    <Destination />
                    <div className="col-lg-12 d-flex align-items-center justify-content-center w-100 p-1">
                        <button className="btn custom-btn-secondary">show more</button>
                    </div>
               </div> 
            </div>
        </div>
    )
}