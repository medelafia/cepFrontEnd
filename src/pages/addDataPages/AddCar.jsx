import { Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, NativeSelect, TextField } from "@mui/material";
import { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {userSelector} from "../../store/selectors/userSelector"

import AddDataHeader from "../../components/AddDataHeader";
import CurrentPath from "../../components/CurrentPath";
import { useNavigate } from "react-router-dom";

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
                available : false 
            })
        })
        .then(res => {
            if( res .status == 200) navigate("/dashboard/cars")
        })  
    }
return (
    <div>
        <div className="custom-container py-5">
            <CurrentPath />
            <AddDataHeader title="add car"/>
            <form >
                <div className="my-3 d-flex justify-content-between">
                    <TextField variant="standard" className="me-1" label="car make" fullWidth  inputRef={makeRef} />
                    <TextField variant="standard" className="ms-1" label="car model" fullWidth  inputRef={modelRef}/>
                </div>
                <div className="my-3">
                    <TextField variant="standard" className="me-1" label="price" fullWidth  inputRef={priceRef}/>
                </div>
                <div className="form-group my-3 d-flex justify-content-between">
                    <FormControl fullWidth className="me-1">
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            fuel 
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                            inputRef={fuelTypeRef}
                        >
                            <option value="DIESEL">DIESEL</option>
                            <option value="GASOLINE">GASOLINE</option>
                        </NativeSelect>
                    </FormControl>
                    <FormControl fullWidth className="mx-1">
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            transmission
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                            inputRef={transmissionRef}
                        >
                            <option value="MANUEL">MANUEL</option>
                            <option value="AUTOMATIC">AUTOMATIC</option>
                        </NativeSelect>
                    </FormControl>
                    <FormControl fullWidth className="ms-1">
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            style
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                            inputRef={styleRef}
                        >
                            <option value="COUPE">coupe</option>
                            <option value="SUV">suv</option>
                            <option value="SEDAN">sedan</option>
                        </NativeSelect>
                    </FormControl>
                </div>
                <div className="form-group my-3 d-flex justify-content-between">
                    <TextField type="number" variant="standard" label="seats" className="me-1"  inputRef={seatsRef}/>
                    <TextField type="number" variant="standard" label="doors" className="mx-1" inputRef={doorsRef}/>
                    <TextField type="number" variant="standard" label="suit cases" className="ms-1" inputRef={suitCasesRef}/>
                </div>
                <div className="form-group my-3">
                    <FormGroup>
                        <FormControlLabel control={<Checkbox inputRef={airCondRef}/>} label="air conditioning" />
                        <FormControlLabel control={<Checkbox inputRef={freeCancRef}/>} label="free cancellation" />
                    </FormGroup>
                </div>
                <button className="w-100 btn custom-btn-primary" onClick={addCar}>save</button>
            </form>
        </div>
    </div>
    )
}