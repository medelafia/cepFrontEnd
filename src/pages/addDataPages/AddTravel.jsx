import { Checkbox, FormControlLabel, FormGroup, TextField } from "@mui/material";
import { useRef } from "react";
import AddDataHeader from "../../components/AddDataHeader";
import CurrentPath from "../../components/CurrentPath";

export default function AddTravel() {
    const cityRef = useRef()
    const countryRef = useRef() 
    const nbPlacesRef = useRef() 
    const nbDaysRef = useRef() 
    const distanceRef = useRef() 
    const startAirportRef = useRef() 
    const dateRef = useRef() 
    const startTime = useRef() 
    const arrivedTime = useRef() 
    const includeHotelRef = useRef() 
    const includeTrans = useRef() 
   return (
    <div>
        <div className="custom-container py-5">
            <CurrentPath />
            <AddDataHeader title="add travel"/>
            <form>
                <div className="form-group my-2 w-100 d-flex ">
                    <TextField variant="standard" label="city" fullWidth className="me-2"/> 
                    <TextField variant="standard" label="country" fullWidth className="ms-2" /> 
                </div>
                <div className="form-group my-2 d-flex justify-content-between">
                    <TextField variant="standard" type="number" className="me-2" fullWidth label="number of places"/>
                    <TextField variant="standard" type="number" className="mx-2" fullWidth label="number of days"/>
                    <TextField variant="standard" type="number" label="distance" className="ms-2"  fullWidth/>
                </div>
                <div className="form-group my-2">
                    <TextField variant="standard" label="start airport" fullWidth/> 
                </div>
                <div className="form-group my-3 d-flex justify-content-between">
                    <TextField variant="standard" type="date" className="me-2"  fullWidth/>
                    <TextField variant="standard" type="date" className="ms-2" fullWidth />
                </div>
                <div className="form-group my-3 d-flex justify-content-between">
                    <TextField variant="standard" type="time" className="me-2"  fullWidth/>
                    <TextField variant="standard" type="time"  className="ms-2" fullWidth />
                </div>
                <div className="form-group my-2">
                    <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="include hotel" />
                        <FormControlLabel control={<Checkbox />} label="include transport" />
                    </FormGroup>
                </div>

                <button className="my-2 btn custom-btn-primary w-100">save</button>
            </form>
        </div> 
        </div> 
    )
}