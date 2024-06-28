import { useCallback, useEffect, useMemo, useRef } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./components.css"
import {motion} from "framer-motion"
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
export default function SearchBar() {
    const [current , setCurrent] = useState("flights")
    const [airports , setAirports] = useState([]) ; 
    const flightsBeginAirport = useRef()
    const flightArrivalAirport = useRef() 
    const flightDate = useRef()
    const hotelSearchInput = useRef() ; 
    const carAirport = useRef()
    const nbOfSeats = useRef()
    const trainTravelBeginStation = useRef()
    const trainTravelArrivalStation = useRef()
    const trainTravelDate = useRef()
    const organizedTravelDestination = useRef() 
    const organizedTravelDate = useRef( )
    const navigate = useNavigate()
    useEffect(()=> {
        fetch("http://localhost:8089/gates/airports/")
        .then(res => res.json())
        .then(data => setAirports(data)) 
    } , [] )
    const handleClick = (e) => {
        const innerText = e.currentTarget.innerText.toLowerCase() ; 
        if(innerText) {
            setCurrent(innerText.split(" ").join("")) 
            console.log(current) 
        }else {
            setCurrent(innerText.toLowerCase())
        }        
        document.querySelectorAll(".search-bar-item").forEach(li => {
            li.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
    }
    const renderAirport = useCallback(()=> {
        return airports.map((airport, index) => <MenuItem value={airport.id}>{airport.iata} ({airport.name})</MenuItem>)
    } , [airports] ) 
    const handleSearchClick = () => {
        switch(current) {
            case "flights" : navigate(`/offers/flights/${flightsBeginAirport.current.value}/${flightArrivalAirport.current.value}/${flightDate.current.value}`) ; 
                break; 
            case "hotels" : navigate(`/offers/hotels/${hotelSearchInput.current.value}`) 
                break ; 
            case "cars" : navigate(`/offers/cars/${carAirport.current.value}/${nbOfSeats.current.value}`)
                break ; 
            case "traintravels" : navigate(`/offers/trainTravels/${trainTravelBeginStation.current.value}/${trainTravelArrivalStation.current.value}/${trainTravelDate.current.value}`) 
                break ; 
            case "organizedtravels" : navigate(`/offers/travels/${organizedTravelDestination.current.value}/${organizedTravelDate.current.value}`)
        }
    }
    return (
        <motion.div className="search-bar bg-white w-100 border"
            animate={{ x: 0 , opacity : 1  , scale : 1 }}
            initial={{x:-100 , opacity : 0 ,scale : 0.5  }}
            transition = {{duration : 0.7}}
        >
            <ul className="d-flex align-items-center justify-content-center text-capitalize custom-text-secondary my-1">
                <li className="mx-3 active search-bar-item cursor-pointer" onClick={handleClick}>flights</li>
                <li className="mx-3 search-bar-item cursor-pointer" onClick={handleClick}>cars</li>
                <li className="mx-3 search-bar-item cursor-pointer" onClick={handleClick}>hotels</li>
                <li className="mx-3 search-bar-item cursor-pointer" onClick={handleClick}>train travels</li>
                <li className="mx-3 search-bar-item cursor-pointer" onClick={handleClick}>organized travels</li>
            </ul>
            <div className="p-4 d-flex align-items-center justify-content-center">
                { current == "flights" && 
                        <div className="d-flex w-100 mx-2">
                            <FormControl className="me-1" fullWidth>
                                <InputLabel>from</InputLabel>
                                <Select inputRef={flightsBeginAirport}>
                                    {renderAirport()}
                                </Select>
                            </FormControl>
                            <FormControl className="mx-1" fullWidth >
                                <InputLabel>to</InputLabel>
                                <Select inputRef={flightArrivalAirport}>
                                    {renderAirport()}
                                </Select>
                            </FormControl>
                            <TextField label="date" inputRef={flightDate} className="mx-1" fullWidth type="date" focused/>
                        </div>
                }
                {current == "hotels" && 
                    <div className="d-flex w-100">
                        <TextField inputRef={hotelSearchInput} className="me-1" label="city or destination" fullWidth/>
                    </div>
                }
                { current == "cars" && 
                    <div className="d-flex w-100 mx-2">
                        <FormControl className="me-1" fullWidth>
                                <InputLabel>airport</InputLabel>
                                <Select inputRef={carAirport}>
                                    {renderAirport()}
                                </Select>
                        </FormControl>
                        <TextField label="number of seats" type="number" inputRef={nbOfSeats} className="ms-1" focused fullWidth/>
                    </div>
                }{
                    current == "traintravels" && 
                    <div className="d-flex w-100 mx-2">
                        <FormControl className="me-1" fullWidth>
                                <InputLabel>from</InputLabel>
                                <Select inputRef={trainTravelBeginStation}>
                                    {renderAirport()}
                                </Select>
                            </FormControl>
                            <FormControl className="mx-1" fullWidth >
                                <InputLabel>to</InputLabel>
                                <Select inputRef={trainTravelArrivalStation}>
                                    {renderAirport()}
                                </Select>
                            </FormControl>
                            <TextField label="date" className="mx-1" inputRef={trainTravelDate} fullWidth type="date" focused/>
                    </div>
                }
                {
                    current == "organizedtravels" &&
                    <div className="d-flex w-100 mx-2">
                        <TextField label="destination" fullWidth inputRef={organizedTravelDestination}/>
                        <TextField label="date of travel" className="mx-1" fullWidth type="date" inputRef={organizedTravelDate} focused/>
                    </div>
                }
                <button className="custom-btn-primary btn p-3" onClick={handleSearchClick}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </motion.div>
    )
}