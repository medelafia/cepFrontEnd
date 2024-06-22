import { Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import AddDataHeader from "../../components/AddDataHeader";
import CurrentPath from "../../components/CurrentPath";
import userSlice from "../../features/userSlice";
import { userSelector } from "../../store/selectors/userSelector";

export default function AddTravel() {
    const user = useSelector(userSelector)
    const originRef = useRef()
    const destinationRef = useRef() 
    const nbPlacesRef = useRef() 
    const nbDaysRef = useRef() 
    const distanceRef = useRef() 
    const startAirportRef = useRef() 
    const departureDateRef = useRef() 
    const departureTimeRef = useRef() 
    const returnDateRef = useRef() 
    const arrivedTimeRef= useRef() 
    const travelDurationRef = useRef()
    const includeHotelRef = useRef() 
    const includeTransRef = useRef() 
    const priceRef = useRef()
    const [airports , setAirports ] = useState([]) 
    const [ placesLimit , setPlacesLimit ] = useState(false)
    const reservedPlacesRef = useRef()
    useEffect(() => {
        fetch("http://localhost:8089/gates/airports/")
        .then(res => res.json())
        .then(data => setAirports(data))
    } , []) 
    const saveTravel = (e) => {
        e.preventDefault() 
        const originValue = originRef.current.value ; 
        const destinationValue = destinationRef.current.value ;  
        const nbDaysValue = nbDaysRef.current.value 
        const nbPlacesValue = nbPlacesRef.current.value ; 
        const startAirportValue = startAirportRef.current.value 
        const departureDateValue = departureDateRef.current.value 
        const departureTimeValue = departureTimeRef.current.value 
        const returnDateValue = returnDateRef.current.value 
        const distanceValue = distanceRef.current.value 
        const arrivedTimeValue = arrivedTimeRef.current.value 
        const travelDurationValue = travelDurationRef.current.value 
        const priceValue = Number.parseFloat(priceRef.current.ref)
        const includeTransValue = includeTransRef.current.checked
        const includeHotelValue = includeHotelRef.current.checked
        const reservedPlacesValue = reservedPlacesRef.current.value 
        fetch("http://localhost:8089/travelAgencies/"+user.id +"/createTravel" ,{
            method : "POST" , 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                } ,
            body : JSON.stringify({
                price : priceValue , 
                //travel info 
                destination : destinationValue , 
                origin : originValue , 
                nbOfPlaces : nbPlacesValue ,
                distance : distanceValue , 
                reservedPlaces : reservedPlacesValue , 
                travelDuration : travelDurationValue , 
                //
                departureDate : departureDateValue  , 
                departurTime : departureTimeValue , 
                //
                returnDate : returnDateValue , 
                //
                arrivedTime : arrivedTimeValue ,
                limitPlaces : placesLimit , 
                nbOfDays : nbDaysValue , 
                includeTrans : includeTransValue , 
                includeHotel : includeHotelValue
            })
        } )
        .then(res => res.json())
        .then(data => console.log(data))
    }
    const renderAirports = () => {
        return airports.map((airport, index) => <MenuItem value={airport.id}>{airport.iata} ({airport.name})</MenuItem>)
    }
   return (
    <div>
        <div className="custom-container py-5">
            <CurrentPath />
            <AddDataHeader title="add travel"/>
            <form className="my-4">
                <div className="form-group my-2 w-100 d-flex ">
                    <TextField  label="origin" fullWidth className="me-1" inputRef={originRef} /> 
                    <TextField  label="destination" fullWidth className="ms-1" inputRef={destinationRef}/> 
                </div>
                <div className="form-group my-2 d-flex justify-content-between">
                    <TextField  type="number" className="me-1" fullWidth label="number of days" inputRef={nbDaysRef}/>
                    <TextField  type="number" label="distance" className="ms-2" inputRef={distanceRef} fullWidth/>
                </div>
                <div className="form-group my-2 d-flex" >
                    <FormControl fullWidth className="me-1">
                        <InputLabel>start airport</InputLabel>
                        <Select fullWidth inputRef={startAirportRef}>
                            {renderAirports()}
                        </Select>
                    </FormControl>
                    <TextField  type="date" className="mx-1" inputRef={departureDateRef}  fullWidth label="departure date" focused/>
                    <TextField  type="time" className="ms-1" inputRef={departureTimeRef} fullWidth label="departure time" focused/>
                </div>
                <div className="form-group my-3 d-flex justify-content-between">
                    <TextField  type="date" className="me-1" fullWidth label="return date" inputRef={returnDateRef} focused/>
                    <TextField type="time"  className="ms-1" fullWidth label="arrived time" inputRef={arrivedTimeRef}  focused/>
                </div>
                <div className="form-group my-3">
                    <TextField  type="number" fullWidth label="price" inputRef={priceRef}/>
                </div>
                <div className="form-group my-2">
                    <TextField label="travel duration" inputRef={travelDurationRef} type="number" fullWidth/>
                </div>
                <div className="form-group my-2">
                    <FormControlLabel control={<Checkbox defaultChecked={placesLimit} onChange={()=>setPlacesLimit(!placesLimit)}/>} label="limit places" />
                    { placesLimit && <div className="d-flex">
                        <TextField type="number" label="the number of places" inputRef={nbPlacesRef} className="me-1" fullWidth/>
                        <TextField type="number" label="reserved places" inputRef={reservedPlacesRef} className="ms-1" fullWidth/>
                    </div> }
                </div>
                <div className="form-group my-2">
                    <FormGroup>
                        <FormControlLabel control={<Checkbox inputRef={includeHotelRef}/>} label="include hotel" />
                        <FormControlLabel control={<Checkbox inputRef={includeTransRef}/>} label="include transport" />
                    </FormGroup>
                </div>
                <button className="my-2 btn custom-btn-primary w-100" onClick={saveTravel}>save</button>
            </form>
        </div> 
        </div> 
    )
}