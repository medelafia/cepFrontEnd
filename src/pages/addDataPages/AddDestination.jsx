import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AddDataHeader from "../../components/AddDataHeader";
import CurrentPath from "../../components/CurrentPath";
import { useFetch } from "../../hooks/custom-hooks";

export default function AddDetination() {
    const nameRef = useRef() 
    const countryRef = useRef() 
    const cityRef = useRef() 
    const descriptionRef = useRef() 
    const destinationTypeRef = useRef() 
    const navigate = useNavigate()
    const countries = useFetch("http://localhost:8000/coutries") ; 
    const renderCountries = () => {
        return countries.isLoading ? <th>data loading</th> : countries.data.map((country,index)=><option value={country.name}>{country.name}</option>)
    }
    const onSubmitListener = (e) => {
        e.preventDefault() 
        const nameValue = nameRef.current.value ; 
        const countryValue = countryRef.current.value 
        const cityValue = cityRef.current.value 
        const descriptionValue = descriptionRef.current.value 
        const destinationTypeValue = destinationTypeRef.current.value 
        fetch("http://localhost:8089/destinations/",{
            method : "POST" , 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body : JSON.stringify({
                name : nameValue , 
                country : countryValue , 
                city : cityValue , 
                description : descriptionValue , 
                destinationType : destinationTypeValue 
            })
        } )
        .then(res => {
            if( res.status == 200 ) {
                Swal.fire({
                    icon : "success" , 
                    timer : 2000 , 
                    title : "success" , 
                    text : "the destination added successfuly"
                })
                navigate("/dashboard/destinations")
            }
        })
    }
    return (
        <div className="p-5">
            <CurrentPath />
            <AddDataHeader title={"add attraction"} /> 
            <form className="mt-4">
                <div className="form-group my-2">
                    <TextField label="the name of destination" fullWidth inputRef={nameRef}/> 
                </div>
                <div className="form-group d-flex my-2 w-100">
                    <FormControl fullWidth className="me-1">
                        <InputLabel >country </InputLabel>
                        <Select inputRef={countryRef}>
                            <MenuItem value="morroco">morroco</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl fullWidth className="ms-1">
                        <InputLabel >city </InputLabel>
                        <Select inputRef={cityRef}>
                            <MenuItem value="newyork">newyork</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="form-group my-2">
                    <TextField label="the description of destination" inputRef={descriptionRef} fullWidth rows={10}/> 
                </div>
                <div className="form-group my-2">
                    <FormControl fullWidth className="me-1">
                        <InputLabel >dsetination type</InputLabel>
                        <Select inputRef={destinationTypeRef}>
                            <MenuItem value="BEACH_AREAS">beach areas</MenuItem>
                            <MenuItem value="NATURAL_AREAS">natural areas</MenuItem>
                            <MenuItem value="TOWNS_AND_CITIES">towns and cities</MenuItem>
                            <MenuItem value="WINTER_SPORT_AREAS">winter sport areas</MenuItem>
                            <MenuItem value="CULTURAL_AREAS">cultural areas</MenuItem>
                        </Select>
                    </FormControl>

                </div>
                <button className="btn custom-btn-primary w-100 my-3" onClick={onSubmitListener}>save now</button>
            </form>
        </div>
    )
}