import { useEffect, useRef } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./components.css"
import {motion} from "framer-motion"
export default function SearchBar() {
    const [current , setCurrent] = useState("flights")
    const beginAirport = useRef()
    const [airports , setAirports] = useState([]) ; 
    const hotelSearchInput = useRef() ; 
    const navigate = useNavigate()
    useEffect(()=> {
        fetch("http://localhost:8089/gates/airports/")
        .then(res => res.json())
        .then(data => setAirports(data)) 
    } , [] )
    const handleClick = (e) => {
        const innerText = e.currentTarget.innerText ; 
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
    const displayAirports = () => {
        return airports.map((airport , index ) => <option value={airport.name} key={index}>{airport.name}</option>)
    }
    const handleSearchClick = () => {
        switch(current) {
            case "flights" : navigate("/offers/flights" , {beginAirport : beginAirport.current.value}) ; 
                break; 
            case "hotels" : navigate("/offers/hotels", {search : hotelSearchInput.current.value})
                break ; 
            case "cars" : navigate('/offers/cars')
                break ; 
            case "trainTravels" : navigate("/offers/trainTravels") 
                break ; 
            case "organizedTravels" : navigate("/offers/organizedTravels")
        }
    }
    return (
        <motion.div className="search-bar bg-white w-100 border"
            animate={{ x: 0 , opacity : 1  , scale : 1 }}
            initial={{x:-100 , opacity : 0 ,scale : 0.5  }}
            transition = {{duration : 0.7}}
        >
            <ul className="d-flex align-items-center justify-content-center custom-text-secondary my-1">
                <li className="mx-2 active search-bar-item cursor-pointer" onClick={handleClick}>flights</li>
                <li className="mx-2 search-bar-item cursor-pointer" onClick={handleClick}>cars</li>
                <li className="mx-2 search-bar-item cursor-pointer" onClick={handleClick}>hotels</li>
                <li className="mx-2 search-bar-item cursor-pointer" onClick={handleClick}>train travels</li>
                <li className="mx-2 search-bar-item cursor-pointer" onClick={handleClick}>organized travels</li>
            </ul>
            <div className="p-3 d-flex align-items-center justify-content-center">
                { current == "flights" && 
                        <div className="d-flex w-100 mx-2">
                            <select name="from" ref={beginAirport} className="form-select mx-1 custom-text-secondary">
                                {displayAirports()}
                            </select> 
                            <select name="from" id="" className="form-select mx-1 custom-text-secondary">
                                {displayAirports()}
                            </select>  
                            <input type="date" className="form-control mx-1 custom-text-secondary"/> 
                            <select name="" className="form-select custom-text-secondary">
                                <option value="">economy</option>
                                <option value="">premuim economy</option>
                                <option value="">first class</option>
                                <option value="">business class</option>
                            </select>
                        </div>
                }
                {current == "hotels" && 
                    <div className="d-flex w-100">
                        <input ref={hotelSearchInput} type="text" className="form-control mx-1 custom-text-secondary" placeholder="hotel name or destination"/> 
                    </div>
                }
                { current == "cars" && 
                    <div className="d-flex w-100 mx-2">
                        <input type="text" className="form-select mx-1 custom-text-secondary" placeholder="city or airport"/> 
                        <input type="date" className="form-control mx-1 custom-text-secondary" placeholder="pick up"/>
                        <input type="date" className="form-control mx-1 custom-text-secondary" placeholder="drop off"/> 
                        <select name="" className="form-select custom-text-secondary">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </select>
                    </div>
                }{
                    current == "traintravels" && 
                    <div className="d-flex w-100 mx-2">
                        <input type="text" className="form-select mx-1 custom-text-secondary" placeholder="city or airport"/> 
                        <input type="date" className="form-control mx-1 custom-text-secondary" placeholder="pick up"/>
                        <input type="date" className="form-control mx-1 custom-text-secondary" placeholder="drop off"/> 
                        <select name="" className="form-select custom-text-secondary">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </select>
                    </div>
                }
                {
                    current == "organizedtravels" &&
                    <div className="d-flex w-100 mx-2">
                        <input type="text" className="form-select mx-1 custom-text-secondary" placeholder="city or airport"/> 
                        <input type="date" className="form-control mx-1 custom-text-secondary" placeholder="pick up"/>
                        <input type="date" className="form-control mx-1 custom-text-secondary" placeholder="drop off"/> 
                        <select name="" className="form-select custom-text-secondary">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </select>
                    </div>
                }
                <button className="custom-btn-primary btn" onClick={handleSearchClick}>search</button>
            </div>
        </motion.div>
    )
}