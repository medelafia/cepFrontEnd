import { FormControl, InputLabel, MenuItem, Select, TextField, useRadioGroup } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AddDataHeader from "../../components/AddDataHeader";
import CurrentPath from "../../components/CurrentPath";

export default function AddGate() {
    const [gateType , setGateType] = useState("airport") ; 
    const gateTypeRef = useRef() ; 
    const gateTypeListener = () => {
        setGateType(gateTypeRef.current.value)
    }
    const navigate = useNavigate()
    const nameRef = useRef() ; 
    const addressRef = useRef() ; 
    const cityRef = useRef()
    const countyRef = useRef() ; 
    const latRef = useRef() 
    const lngRef = useRef() ; 
    const emailRef = useRef() 
    const telRef = useRef()
    const airportTypeRef = useRef() 
    const nbPlatformRef = useRef() 
    const addGate = (e) => {
        e.preventDefault() ;
        let fetchUrl  ; 
        let fetchPrefix = "http://localhost:8089/gates/"; 
        let fetchOptions = {
            name : nameRef.current.value , 
            address : addressRef.current.value , 
            city : cityRef.current.value , 
            country : countyRef.current.value , 
            lat : Number.parseFloat(latRef.current.value) , 
            lng : Number.parseFloat(lngRef.current.value) , 
            emailContact :  emailRef.current.value , 
            nbPhoneContact :  telRef.current.value 
        }; 
        switch(gateType) {
            case "airport" : fetchUrl = fetchPrefix + "airports/" ; 
                            fetchOptions['airportType'] = airportTypeRef.current.value 
                            break ; 
            case "trainStation" : fetchUrl = fetchPrefix + "trainStations/" ; 
                            fetchOptions["platformNb"] = Number.parseInt(nbPlatformRef.current.value)  
        }
        fetch(fetchUrl , {
            method : "POST" , 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body : JSON.stringify(fetchOptions)
        }).then(res => {
            if(res.status == 200 ) {
                Swal.fire({
                    icon : "success" , 
                    title : "success" , 
                    text : "the gate added successfuly" , 
                    timer : 2000
                })
                navigate("/dashboard/stations")
            }
        }) 

    }
    return (
        <div>
        <div className="custom-container py-5">
            <CurrentPath />
            <AddDataHeader title="add car"/>
            <form>
                <div className="form-group my-2 d-flex">
                    <TextField label="gate name" className="me-1" inputRef={nameRef} />
                    <TextField label="gate name" className="ms-1" fullWidth inputRef={addressRef} />
                 </div>
                <div className="form-group d-flex w-100 my-2">
                    <FormControl fullWidth className="me-1">
                        <InputLabel>coutry</InputLabel>
                        <Select inputRef={countyRef}>
                            <MenuItem value="usa">united state</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl  fullWidth className="ms-1">
                            <InputLabel>city</InputLabel>
                            <Select inputRef={cityRef}>
                                <MenuItem value="newyork">new york</MenuItem>
                            </Select>
                    </FormControl>
                </div>
                <div className="form-group d-flex w-100 my-2">
                    <TextField fullWidth label="latitude" className="me-1" inputRef={latRef}/>
                    <TextField fullWidth label="longitude" className="me-1" inputRef={lngRef}/>
                </div>
                <div className="form-group my-2">
                    <TextField type ="email" label="email contact of feedback " inputRef={emailRef} fullWidth/> 
                </div>
                <div className="form-group my-2">
                    <TextField type ="email" label="phone number of feedback :" inputRef={telRef} fullWidth/> 
                </div> 
                <div className="form-group my-2">
                    <FormControl  fullWidth className="ms-1">
                            <InputLabel>gate type</InputLabel>
                            <Select inputRef={cityRef} onChange={(e)=>setGateType(e.target.value)}>
                                <MenuItem value="airport">airport</MenuItem>
                                <MenuItem value="trainStation">train station</MenuItem>
                            </Select>
                    </FormControl>

                </div>
                { gateType == "airport" && 
                    <div className="form-group my-2">
                        <FormControl fullWidth>
                        <InputLabel>airport type</InputLabel>
                        <Select inputRef={airportTypeRef} >
                            <MenuItem value="NATIONAL">national</MenuItem>
                            <MenuItem value="REGIONAL">regional</MenuItem>
                            <MenuItem value="COMMERCIAL">commercial</MenuItem>
                        </Select>
                        </FormControl>
                    </div>
                }
                {gateType == "trainStation" && 
                    <TextField label="number of platfprmes" fullWidth inputRef={nbPlatformRef} type="number" />
                }
                <button className="btn custom-btn-primary w-100 my-3" onClick={addGate}>save </button>
            </form>
        </div>
        </div>
    )
}