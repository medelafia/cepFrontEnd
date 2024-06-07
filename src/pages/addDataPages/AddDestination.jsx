import { useState } from "react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
            if(res.ok) {
                navigate("/dashboard/destinations")
            }
        })
    }
    const renderCaountries =  async () => {

    }
    return (
        <div className="p-5">
            <CurrentPath />
            <AddDataHeader title={"add flight"} /> 
            <form>
                <div className="form-group my-2">
                    <label htmlFor="">name of destination</label>
                    <input type="text" placeholder="enter the name of destination" className="form-control" ref={nameRef}/>
                </div>
                <div className="form-group d-flex my-2 w-100">
                    <div className="form-group me-1 w-50">
                        <label htmlFor="">country</label>
                        <select name="" className="form-select" id="" ref={countryRef}>
                            {renderCountries()}
                        </select>
                    </div>
                    <div className="form-group ms-1 w-50">
                        <label htmlFor="">city</label>
                        <select name="" className="form-select" id="" ref={cityRef}>
                            <option value=""></option>
                            <option value="rabat">rabat</option>
                        </select>
                    </div>
                </div>
                <div className="form-group my-2">
                    <label htmlFor="">description : </label>
                    <input ref={descriptionRef} type="text" placeholder="enter a desciption of this destination" className="form-control" />
                </div>
                <div className="form-group my-2">
                    <label htmlFor="">destination type : </label>
                    <select ref={destinationTypeRef} name="" className="form-select" placeholder="select the type of destination" id="">
                        <option value="BEACH_AREAS">BEACH AREAS</option>
                        <option value="NATURAL_AREAS">NATURAL AREAS</option>
                        <option value="TOWNS_AND_CITIES">TOWNS AND CITIES</option>
                        <option value="WINTER_SPORT_AREAS">WINTER SPORT AREAS</option>
                        <option value="CULTURAL_AREAS">CULTURAL AREAS</option>
                    </select>
                </div>
                <button className="btn custom-btn-primary w-100 my-3" onClick={onSubmitListener}>save now</button>
            </form>
        </div>
    )
}