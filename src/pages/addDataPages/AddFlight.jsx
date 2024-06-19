import { FormControlContext } from "@mui/base";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { setAutoFreeze } from "immer";
import { useState } from "react"
import AddDataHeader from "../../components/AddDataHeader";
import CurrentPath from "../../components/CurrentPath";
import StopAirport from "../../components/StopAirport";

export default function AddFlight() {
    const [stopAirports , setStopAirports ]  = useState(0 ) ; 
    const [ flightType , setFlightType ] = useState("roundTrip")

    const addStopAirport = (e) => {
        e.preventDefault()
        document.getElementById("stopAirports").append(<StopAirport />)
    }
    return (
        <div className="p-5">
            <CurrentPath />
            <AddDataHeader title={"add flight"} /> 
            <form action="" className="my-5">
                <div className="form-group my-2">
                    <FormControl fullWidth>
                        <InputLabel>flight type</InputLabel>
                        <Select onChange={(e)=>setFlightType(e.target.value)}>
                            <MenuItem value="roundTrip">round trip</MenuItem>
                            <MenuItem value="oneWay">one way</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="form-group my-2 d-flex w-100">
                    <FormControl fullWidth className="me-1">
                        <InputLabel>start airport</InputLabel>
                        <Select onChange={(e)=>setFlightType(e.target.value)}>
                            <MenuItem value="roundTrip">round trip</MenuItem>
                            <MenuItem value="oneWay">one way</MenuItem>
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
                    <TextField label="start date" type="date" fullWidth className="me-1"/>
                    <TextField label="arrived date" type="date" fullWidth className="ms-1"/>
                </div>
                <div className="form-group my-2 d-flex w-100">
                    <TextField label="start date" type="time" fullWidth className="me-1"/>
                    <TextField label="arriced date" type="time" fullWidth className="ms-1"/>
                </div>
                <div className="form-group my-2 w-100 d-flex">
                    <TextField label="number of stops" type="number" className="me-1" fullWidth/> 
                    <TextField label="number of seats" type="number" className="mx-1" fullWidth/> 
                    <TextField label="price" className="mx-1" fullWidth/> 
                    <TextField label="reserved places" type="number" className="mx-1" fullWidth/> 
                    <TextField label="distance" type="number" className="ms-1" fullWidth/> 
                </div>
                <button className="btn custom-btn-primary my-4 w-100">save now</button>
            </form>
        </div>
    )
}