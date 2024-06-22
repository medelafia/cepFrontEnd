import { FormControlContext } from "@mui/base";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { setAutoFreeze } from "immer";
import { useMemo } from "react";
import { useState } from "react"
import AddDataHeader from "../../components/AddDataHeader";
import CurrentPath from "../../components/CurrentPath";
import StopAirport from "../../components/StopAirport";
import { useFetch } from "../../hooks/custom-hooks";

export default function AddFlight() {
    const [stopAirports , setStopAirports ]  = useState(0 ) ; 
    const [ flightType , setFlightType ] = useState("roundTrip")
    const [ airports , setAirport] = useState([]) 
    const {data , isLoading , error } = useFetch("http://localhost:8089/gates/airports/") ; 
    const addStopAirport = (e) => {
        e.preventDefault()
        document.getElementById("stopAirports").append(<StopAirport />)
    }
    const renderAirport = useMemo(()=> {
        return data?.map((airport , index) => <MenuItem value={airport.id}>{airport.iata} ({airport.name})</MenuItem>)
    } , [data])
    return (
        <div className="p-5">
            <CurrentPath />
            <AddDataHeader title={"add flight"} /> 
            <form action="" className="my-5">
                <div className="form-group my-2">
                    <FormControl fullWidth>
                        <InputLabel>flight type</InputLabel>
                        <Select onChange={(e)=>setFlightType(e.target.value)}>
                            {renderAirport}
                        </Select>
                    </FormControl>
                </div>
                <div className="form-group my-2 d-flex w-100">
                    <FormControl fullWidth className="me-1">
                        <InputLabel>start airport</InputLabel>
                        <Select onChange={(e)=>setFlightType(e.target.value)}>
                            { renderAirport }
                        </Select>
                    </FormControl>
                    <FormControl  fullWidth className="ms-1">
                        <InputLabel>arrived airport</InputLabel>
                        <Select onChange={(e)=>setFlightType(e.target.value)}>
                            <MenuItem value="roundTrip">round trip</MenuItem>
                            <MenuItem value="oneWay">one way</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="form-group my-2 d-flex w-100">
                    <TextField label="start date" type="date" fullWidth className="me-1" focused/>
                    <TextField label="return date" type="date" fullWidth className="ms-1" focused/>
                </div>
                <div className="form-group my-2 d-flex w-100">
                    <TextField label="start time" type="time" fullWidth className="me-1" focused/>
                    <TextField label="arriced time" type="time" fullWidth className="ms-1" focused/>
                </div>
                <div className="form-group my-2 w-100 d-flex">
                    <TextField label="number of stops" type="number" className="me-1" fullWidth/> 
                    <TextField label="number of seats" type="number" className="mx-1" fullWidth/> 
                    <TextField label="price" className="mx-1" fullWidth/> 
                    <TextField label="reserved places" type="number" className="ms-1" fullWidth/> 
                </div>
                <div className="form-group my-2 w-100 d-flex">
                    <TextField label="distance" type="number" className="me-1" fullWidth/> 
                    <TextField label="travel hours" type="number" className="ms-1" fullWidth /> 
                </div>
                <button className="btn custom-btn-primary my-4 w-100">save now</button>
            </form>
        </div>
    )
}