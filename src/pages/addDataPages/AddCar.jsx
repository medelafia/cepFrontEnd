import { Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, NativeSelect, Select, TextField } from "@mui/material";
import { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {userSelector} from "../../store/selectors/userSelector"

import AddDataHeader from "../../components/AddDataHeader";
import CurrentPath from "../../components/CurrentPath";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddCar() {
    const [ step , setStep ] = useState(1) ; 
    const makeRef = useRef() 
    const modelRef = useRef() 
    const priceRef = useRef() 
    const fuelTypeRef = useRef() 
    const transmissionRef = useRef() 
    const styleRef = useRef() 
    const seatsRef = useRef()
    const doorsRef = useRef() 
    const suitCasesRef = useRef( ) 
    const airCondRef = useRef() 
    const freeCancRef = useRef() 
    const user = useSelector(userSelector)
    const navigate = useNavigate()
    const availableRef = useRef() 
    const addCar = (e) => {
        e.preventDefault()
        const makeValue = makeRef.current.value 
        const modelValue = modelRef.current.value 
        const priceValue = Number.parseFloat(priceRef.current.value) 
        const fuelTypeValue = fuelTypeRef.current.value 
        const transValue = transmissionRef.current.value 
        const styleValue = styleRef.current.value 
        const seatsValue = seatsRef.current.value 
        const doorsValue = doorsRef.current.value 
        const suitCasesValue = suitCasesRef.current.value 
        const airCondValue  = airCondRef.current.checked
        const freeCancelValue = freeCancRef.current.checked
        const availableValue = availableRef.current.checked
        console.log(priceValue )
        fetch("http://localhost:8089/carsAgencies/"+user.id , {
            method : "POST" ,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },  
            body : JSON.stringify({
                price : priceValue , 
                make : makeValue , 
                model : modelValue  , 
                fuelType : fuelTypeValue , 
                transType : transValue , 
                styleType : styleValue , 
                numberOfSeats : seatsValue , 
                numberOfDoors : doorsValue , 
                numberOfSuitcases : suitCasesValue , 
                airConditioning : airCondValue  , 
                freeCancelation : freeCancelValue  , 
                available : availableValue
            })
        })
        .then(res => {
            if( res .status == 200) {
                Swal.fire({
                    icon : "success" , 
                    timer : 2000 , 
                    title : "success" , 
                    text : "the car created successfully"
                })
                navigate("/dashboard/cars")
            }
        }).catch(err => {
            Swal.fire({
                icon : "error" , 
                timer : 2000 , 
                title : "cannot create car" , 
                text : err
            })
        })
    }
return (
    <div>
        <div className="custom-container py-5">
            <CurrentPath />
            <AddDataHeader title="add car"/>
            <form >
                <div className="my-3 d-flex justify-content-between">
                    <TextField  className="me-1" label="car make" fullWidth  inputRef={makeRef} required/>
                    <TextField  className="ms-1" label="car model" fullWidth  inputRef={modelRef} required/>
                </div>
                <div className="my-3">
                    <TextField  className="me-1" label="price" fullWidth  inputRef={priceRef} required/>
                </div>
                <div className="form-group my-3 d-flex justify-content-between">
                    <FormControl fullWidth className="me-1">
                        <InputLabel  htmlFor="uncontrolled-native">
                            fuel 
                        </InputLabel>
                        <Select
                            defaultValue={30}
                            required
                            inputRef={fuelTypeRef}
                        >
                            <MenuItem value="DIESEL">DIESEL</MenuItem>
                            <MenuItem value="GASOLINE">GASOLINE</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth className="mx-1">
                        <InputLabel  htmlFor="uncontrolled-native">
                            transmission
                        </InputLabel>
                        <Select
                            required
                            defaultValue={30}
                            inputRef={transmissionRef}
                        >
                            <MenuItem value="MANUEL">MANUEL</MenuItem>
                            <MenuItem value="AUTOMATIC">AUTOMATIC</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth className="ms-1">
                        <InputLabel  htmlFor="uncontrolled-native">
                            style
                        </InputLabel>
                        <Select
                            required
                            defaultValue={30}
                            inputRef={styleRef}
                        >
                            <MenuItem value="COUPE">coupe</MenuItem>
                            <MenuItem value="SUV">suv</MenuItem>
                            <MenuItem value="SEDAN">sedan</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="form-group my-3 d-flex">
                    <TextField required type="number" fullWidth  label="seats" className="me-1"  inputRef={seatsRef}/>
                    <TextField required type="number"  fullWidth label="doors" className="mx-1" inputRef={doorsRef}/>
                    <TextField required type="number"  fullWidth label="suit cases" className="ms-1" inputRef={suitCasesRef}/>
                </div>
                <div className="form-group my-3">
                    <FormGroup>
                        <FormControlLabel control={<Checkbox inputRef={airCondRef}/>} label="air conditioning" />
                        <FormControlLabel control={<Checkbox inputRef={freeCancRef}/>} label="free cancellation" />
                        <FormControlLabel control={<Checkbox inputRef={availableRef}/>} label="available now" />
                    </FormGroup>
                </div>
                <button className="w-100 btn custom-btn-primary" onClick={addCar}>save</button>
            </form>
        </div>
    </div>
    )
}