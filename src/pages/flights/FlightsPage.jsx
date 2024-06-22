import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Flight from "./componants/Flight";
import ShowMore from "../../components/ShowMore";
import { useFetch } from "../../hooks/custom-hooks";
import FlightSkeleton from "./componants/FlightSkeleton";
import InternalError from "../../components/InternalError";
import NoItems from "../../components/NoItems";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export default function FlightsPage() {
  const [showFilter , setShowFilter] = useState(false)
  const [ nbElements , setNbElements ] = useState(8) 
  const { data , isLoading , error } = useFetch("http://localhost:8089/flights/") 
  const renderFlights = () => {
    return data.map((flight, index) => <Flight />);
  };
  const [flightType , setFlightType] = useState("round") 
  const [ airports , setAirports ] = useState([])
  useEffect(()=> {
    fetch("http://localhost:8089/gates/airports/")
    .then(res => res.json())
    .then(data => setAirports(data))
  } , [])
  const renderAirports = () => {
    return airports?.map((airport , index) => <MenuItem value={airport.id}>{airport.id} ({airport.name})</MenuItem>)
  }
  return (
    <div className="w-100 page">
      <div className="w-100 row">
        <div className="col-md-4 col-sm-12 p-4 border rounded">
            <div className="text-capitalize h4 custom-text-primary">find your flight now !</div>
            <div className="d-flex border-bottom">
                <div className={`me-3 cursor-pointer ${flightType == "round" && "active"}`} onClick={()=>{setFlightType("round")}}>
                    round trip
                </div>
                <div className={`mx-3 cursor-pointer ${flightType == "oneWay" && "active"}`} onClick={()=>{setFlightType("oneWay")}}>
                    one way
                </div>
            </div>
            <form className="w-100 d-flex align-items-center no-wrap justify-content-around p-3 flex-column">
                <div className="form-group my-2 w-100">
                  <FormControl fullWidth>
                      <InputLabel>from</InputLabel>
                      <Select>
                      </Select>
                    </FormControl>
                </div>
                <div className="form-group my-2 w-100">
                    <FormControl fullWidth>
                      <InputLabel>to</InputLabel>
                      <Select>
                      </Select>
                    </FormControl>
                </div>
                <div className="form-group my-2 w-100">
                    <TextField label="dep date" type="date" fullWidth focused/> 
                </div>
                {
                    flightType == "round" && (
                    <div className="form-group my-2 w-100">
                      <TextField label="return date" type="date" fullWidth focused/> 
                    </div>
                    )
                }
                { /*<div className="form-group my-1 w-100">
                    <label htmlFor="" className="from-label">flight class :</label>
                    <select name="" id="" className="form-select rounded-pill">
                        <option value="">premieum</option>
                        <option value="">busniss</option>
                    </select>
              </div>*/}
                
            <button className="btn custom-btn-primary rounded-pill my-3 w-100 ">
              search
            </button>
          </form>
        </div>
        <div className="col-md-8 col-sm-12 py-3">
          { isLoading ? 
          <>
            <FlightSkeleton />
            <FlightSkeleton />
            <FlightSkeleton />
            <FlightSkeleton />
          </>
          : 
          ( error ? 
            <InternalError />
            : 
            <>
              <div className="d-flex align-items-center justify-content-between">
            <div>
              {data?.length} flights
            </div>
            <div className="d-flex">
              <button className="btn border mx-2 d-flex align-items-center" onClick={()=>setShowFilter(!showFilter)}>
                <i class="fa-solid fa-filter me-2"></i>
                <span>filter</span>
              </button>
              <select name="" id="sort" className="form-select">
                <option>recommended</option>
                <option>min price</option>
              </select>
            </div>
            </div> 
            {
              data?.length > 0 ? 
              <>
                {renderFlights()}
                { data?.length > nbElements && <ShowMore /> }
              </>
              : <NoItems />
            }
            </>

          )
          }
        </div>
      </div>
    </div>
  );
}
