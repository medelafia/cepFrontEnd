import { useRadioGroup } from "@mui/material";
import { dark } from "@mui/material/styles/createPalette";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
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
        console.log(fetchUrl) 
        console.log(fetchOptions)
        fetch(fetchUrl , {
            method : "POST" , 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body : JSON.stringify(fetchOptions)
        }).then(res => {
            navigate("/dashboard/gates")
            return res.json()
        }) 
        .then(data => console.log(data)) 

    }
    return (
        <div>
        <div className="custom-container py-5">
            <CurrentPath />
            <AddDataHeader title="add car"/>
            <form>
                <div className="form-group my-2">
                    <label htmlFor="">gate name : </label>
                    <input type="text" placeholder="enter the name of gate" className="form-control" ref={nameRef}/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="">address</label>
                    <input type="text" placeholder="enter the name of gate" className="form-control" ref={addressRef}/>
                </div>
                <div className="form-group d-flex w-100 my-2">
                    <div className="form-group w-50 me-2">
                        <label htmlFor="">country : </label>
                        <input type="text" placeholder="enter the name of gate" className="form-control" ref={countyRef}/>
                    </div> 
                    <div className="form-group w-50 ms-2">
                        <label htmlFor="">city : </label>
                        <input type="text" placeholder="enter the name of gate" className="form-control" ref={cityRef}/>
                    </div>
                </div>
                <div className="form-group d-flex w-100 my-2">
                    <div className="form-group w-50 me-2">
                        <label htmlFor="">latitude: </label>
                        <input type="text" placeholder="enter the name of gate" className="form-control" ref={latRef}/>
                    </div>
                    <div className="form-group w-50 ms-2">
                        <label htmlFor="">longitude : </label>
                        <input type="text" placeholder="enter the name of gate" className="form-control" ref={lngRef}/>
                    </div>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="">email contact of feedback :</label>
                    <input type="text" placeholder="enter the name of gate" className="form-control" ref={emailRef}/>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="">phone number of feedback : </label>
                    <input type="text" placeholder="enter the name of gate" className="form-control" ref={telRef}/>
                </div> 
                <div className="form-group my-2">
                    <label htmlFor="">type : </label>
                    <select name="" className="form-select" id="" onChange={gateTypeListener} ref={gateTypeRef}>
                        <option value="airport">airport</option>
                        <option value="trainStation">train station</option>
                    </select>
                </div>
                { gateType == "airport" && 
                    <div className="form-group my-2">
                        <label htmlFor="">airport type : </label>
                        <select name="" id="" className="form-select" ref={airportTypeRef}>
                            <option value="NATIONAL">NATIONAL</option>
                            <option value="REGIONAL">REGIONAL</option>
                            <option value="COMMERCIAL">COMMERCIAL</option>
                        </select>
                    </div>
                }
                {gateType == "trainStation" && 
                    <div className="">
                        <label htmlFor="">numbers of platformes</label>
                        <input type="number" name="" id="" ref={nbPlatformRef} className="form-control" placeholder="enter the number of plateforme"/>
                    </div>
                }
                <button className="btn custom-btn-primary w-100 my-3" onClick={addGate}>save </button>
            </form>
        </div>
        </div>
    )
}