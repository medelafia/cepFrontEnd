import { useRef, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Flight from "./componants/Flight";
import ShowMore from "../../components/ShowMore";
import { useFetch } from "../../hooks/custom-hooks";
import FlightSkeleton from "./componants/FlightSkeleton";
import InternalError from "../../components/InternalError";
import NoItems from "../../components/NoItems";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { FlightClassRounded } from "@mui/icons-material";

export default function FlightsPage() {
  const [flightTypeStatus , setFlightTypeStatus ] = useState("oneWay")  
  const {from , to , date} = useParams()
  const [flightType , setFlightType] = useState("oneWay") 
  const [showFilter , setShowFilter] = useState(false)
  const srcAirportRef = useRef() 
  const destAirportRef = useRef() 
  const departureDateRef = useRef() 
  const returnDateRef = useRef() 
  const [ nbElements , setNbElements ] = useState(8) 
  const [ srcAiport , setSrcAirport] = useState(from != undefined)
  const [ destAirport , setDestAirport] = useState(to)
  const [departureDate , setDepartureDate ] = useState(date) 
  const [ returnDate , setReturnDate] = useState() 
  const toSqlDate = (date = "") => {
    let dateArray = date.split("-")
    return dateArray.join("-")
  }
  let flightsResponse = useFetch(`http://localhost:8089/flights/${flightType == "round" ? 'getRoundTrip' : 'getOneWayTrip'}?from=${srcAiport}&to=${destAirport}&depDate=${departureDate}${flightType == "round" ? `&returnDate=${returnDate}` : ''}`)
  const renderFlights = () => {
    return flightsResponse.data?.map((flight, index) => <Flight flight={flight} key={index}/>);
  };
  const search = (e) => {
    e.preventDefault()
    setFlightType(flightTypeStatus)
    setSrcAirport(srcAirportRef.current.value)
    setDestAirport(destAirportRef.current.value) 
    setDepartureDate(toSqlDate(departureDateRef.current.value)) 
    if(flightTypeStatus == "round") setReturnDate(toSqlDate(returnDateRef.current.value))
  }
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
                <div className={`me-3 cursor-pointer ${flightTypeStatus == "round" && "active"}`} onClick={()=>{setFlightTypeStatus("round")}}>
                    round trip
                </div>
                <div className={`mx-3 cursor-pointer ${flightTypeStatus == "oneWay" && "active"}`} onClick={()=>{setFlightTypeStatus("oneWay")}}>
                    one way
                </div>
            </div>
            <form className="w-100 d-flex align-items-center no-wrap justify-content-around p-3 flex-column">
                <div className="form-group my-2 w-100">
                  <FormControl fullWidth>
                      <InputLabel>from</InputLabel>
                      <Select defaultValue={from} inputRef={srcAirportRef}>
                        { renderAirports()}
                      </Select>
                    </FormControl>
                </div>
                <div className="form-group my-2 w-100">
                    <FormControl fullWidth>
                      <InputLabel>to</InputLabel>
                      <Select defaultValue={to} inputRef={destAirportRef}>
                        { renderAirports()} 
                      </Select>
                    </FormControl>
                </div>
                <div className="form-group my-2 w-100">
                    <TextField label="dep date" type="date" fullWidth focused defaultValue={date} inputRef={departureDateRef} /> 
                </div>
                {
                    flightTypeStatus == "round" && (
                    <div className="form-group my-2 w-100">
                      <TextField label="return date" type="date" fullWidth focused inputRef={returnDateRef}/> 
                    </div>
                    )
                }
                
            <button className="btn custom-btn-primary rounded-pill my-3 w-100 " onClick={search}>
              search
            </button>
          </form>
        </div>
        <div className="col-md-8 col-sm-12 py-3">
          { from == undefined && to == undefined && date == undefined ? 
            <div>search your fligths now</div>
            :
          ( flightsResponse.isLoading ? 
          <>
            <FlightSkeleton />
            <FlightSkeleton />
            <FlightSkeleton />
            <FlightSkeleton />
          </>
          : 
          ( flightsResponse.error ? 
            <InternalError />
            : 
            <>
              <div className="d-flex align-items-center justify-content-between">
            <div>
              {flightsResponse.data?.length} flights
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
              flightsResponse?.length > 0 ? 
              <>
                {renderFlights()}
                { flightsResponse.data?.length > nbElements && <ShowMore /> }
              </>
              : <NoItems />
            }
            </>

          )
          )
        }
        </div>
      </div>
    </div>
  );
}
