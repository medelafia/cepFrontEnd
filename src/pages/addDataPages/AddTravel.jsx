
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useCallback, useMemo, useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AddDataHeader from "../../components/AddDataHeader";
import CurrentPath from "../../components/CurrentPath";
import StopAirport from "../../components/StopAirport";
import { useFetch } from "../../hooks/custom-hooks";
import { userSelector } from "../../store/selectors/userSelector";

export default function AddTravel({ type , onSuccessPath}) {
  const [stopAirports, setStopAirports] = useState(0);
  const [airports, setAirport] = useState([]);
  const { data, isLoading, error } = useFetch(
    "http://localhost:8089/gates/airports/"
  );
  const navigate = useNavigate() 
  /* offre elements */
  const priceRef = useRef();
  /*travel elements*/
  const origin = useRef() 
  const destination = useRef() 
  const departureDateRef = useRef();
  const returnDateRef = useRef();
  const departureTimeRef = useRef();
  const arrivedTimeRef = useRef();
  const nbOfStopsRef = useRef();
  const distance = useRef();
  const nbOfPlacesRef = useRef();
  const reservedPlacesRef = useRef();
  const distanceRef = useRef();
  /**flight elements = */
  const srcAirportRef = useRef();
  const destAirportRef = useRef();
  /**train travel elements */
    const srcStation = useRef() 
    const destStation = useRef() 
  /**organized Travel elements */
  const includeHotelRef = useRef() 
  const includeTransTef = useRef() 
  const nbDaysRef = useRef() 
  const originAirportRef = useRef() 
  const placesLimitRef = useRef() 
  const user = useSelector(userSelector);
  const addStopAirport = (e) => {
    e.preventDefault();
    document.getElementById("stopAirports").append(<StopAirport />);
  };
  const renderAirport = useCallback(() => {
    return data?.map((airport, index) => (
      <MenuItem value={airport.id}>
        {airport.iata} ({airport.name})
      </MenuItem>
    ));
  }, [data]);
  const toSqlDate = (date = "") => {
    let dateArray = date.split("-")
    return dateArray.join("-")
  }
  const save = (e) => {
    e.preventDefault();
    const body = {
        price: Number.parseFloat(priceRef.current.value),
        origin : origin.current.value ,
        destination : destination.current.value , 
        distance : Number.parseInt(distanceRef.current.value) ,
        nbOfPlaces : Number.parseInt(nbOfPlacesRef.current.value),
        nbOfStops : Number.parseInt(nbOfStopsRef.current.value),
        reservedPlaces : Number.parseInt(reservedPlacesRef.current.value),
        departureDate : toSqlDate(departureDateRef.current.value) ,
        departureTime : departureTimeRef.current.value + ":00" ,
        arrivedTime : arrivedTimeRef.current.value  + ":00" ,
        returnDate : toSqlDate(returnDateRef?.current?.ref) ,
    }
    let fetchUrl  ; 
    switch(type) {
      case "flight" : fetchUrl = `http://localhost:8089/airlines/createFlight`
                      body['from'] = {id : Number.parseInt(srcAirportRef.current.value) }
                      body['to'] = {id : Number.parseInt(destAirportRef.current.value) } 
                      break ; 
      case "train" :  fetchUrl = `http://localhost:8089/railwaysOperators/createTravel`
                      body['from'] = {id : Number.parseInt(srcStation.current.value) }
                      body['to'] = {id : Number.parseInt(destStation.current.value) } 
                      break  ; 
      case "organized" : fetchUrl = `http://localhost:8089/travelAgencies/createTravel`
                        body['originAirport'] = {id : Number.parseInt(originAirportRef.current.value) }
                        body['nbDays'] = Number.parseInt(nbDaysRef.current.value)
                        body['includeTrans'] = includeTransTef.current.checked
                        body['includeHotel'] = includeHotelRef.current.checked
                        body['limitPlaces'] = placesLimitRef.current.checked
                        break  ;    
    }
    fetch(fetchUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${sessionStorage.getItem('token')}`
      },
      body: JSON.stringify(body)
    }).then(res => {
        if(res.status == 200) {
            Swal.fire({
                title : "the flights added successfuly" , 
                timer : 2000 , 
                icon : "success"
            })
            navigate(onSuccessPath)
        }
    })
  };
  return (
    <div className="p-5">
      <CurrentPath />
      <AddDataHeader title={"add flight"} />
      <form action="" className="my-5">
        <div className="form-group my-2 d-flex">
          <TextField label="origin" fullWidth className="me-1" inputRef={origin}/> 
          <TextField label="destination" fullWidth className="ms-1" inputRef={destination}/> 
        </div>
        <div className="form-group my-2 d-flex w-100">
          <TextField
          required
            label="start date"
            type="date"
            fullWidth
            className="me-1"
            focused
            inputRef={departureDateRef}
          />
          <TextField
              label="return date"
              type="date"
              inputRef={returnDateRef}
              fullWidth
              className="ms-1"
              onChange={e=>console.log(toSqlDate(e.currentTarget.value))}
              focused
            />
        </div>
        <div className="form-group my-2 d-flex w-100">
          <TextField
            label="start time"
            required
            type="time"
            inputRef={departureTimeRef}
            fullWidth
            className="me-1"
            focused
          />
          <TextField
            label="arrived time"
            type="time"
            fullWidth
            className="ms-1"
            focused
            required
            inputRef={arrivedTimeRef}
          />
        </div>
        <div className="form-group my-2 w-100 d-flex">
          <TextField
            label="number of stops"
            type="number"
            className="me-1"
            required
            fullWidth
            inputRef={nbOfStopsRef}
          />
          <TextField
            label="number of seats"
            type="number"
            className="mx-1"
            required
            fullWidth
            inputRef={nbOfPlacesRef}
          />
          <TextField
            label="price"
            className="mx-1"
            fullWidth
            inputRef={priceRef}
          />
          <TextField
            label="reserved places"
            type="number"
            className="ms-1"
            required
            fullWidth
            inputRef={reservedPlacesRef}
          />
        </div>
        <div className="form-group my-2 w-100 d-flex">
          <TextField
            label="distance"
            type="number"
            className="me-1"
            fullWidth
            inputRef={distanceRef}
            required
          />
          <TextField label="travel duration" className="ms-1" fullWidth/>
        </div>
        { type == "flight" && <div className="form-group my-2 d-flex w-100">
          <FormControl fullWidth className="me-1">
            <InputLabel>start airport</InputLabel>
            <Select
                required
              onChange={(e) => setFlightType(e.target.value)}
              inputRef={srcAirportRef}
            >
              {renderAirport}
            </Select>
          </FormControl>
          <FormControl fullWidth className="ms-1">
            <InputLabel>arrived airport</InputLabel>
            <Select
            required
              onChange={(e) => setFlightType(e.target.value)}
              inputRef={destAirportRef}
            >
              {renderAirport}
            </Select>
          </FormControl>
          <FormControl fullWidth className="ms-1">
            <InputLabel>arrived airport</InputLabel>
            <Select
              required
              inputRef={destAirportRef} 
            >
              {renderAirport}
            </Select>
          </FormControl>
        </div> } 
        { type == "train" &&
        <div  className="form-group my-2 d-flex w-100">
            <FormControl className="me-1" fullWidth>
              <InputLabel>departure station</InputLabel>
              <Select inputRef={srcStation}>

              </Select>
            </FormControl>
            <FormControl className="ms-1" fullWidth>
              <InputLabel>arrived station</InputLabel>
              <Select inputRef={destStation}>
                
              </Select>
            </FormControl>
        </div>
        } 
        {
          type == "organized" && 
          <>
            <div className="form-group my-2">
              <TextField label="number of days" fullWidth inputRef={nbDaysRef}/>
            </div>
            <div className="form-group my-2">
              <FormControl fullWidth>
                <InputLabel>origin airport</InputLabel>
                <Select inputRef={originAirportRef}>
                  {renderAirport()}
                </Select>
              </FormControl>
            </div>
            <FormGroup>
              <FormControlLabel control={<Checkbox inputRef={placesLimitRef}/>} label="places limit" />
              <FormControlLabel control={<Checkbox inputRef={includeHotelRef}/>} label="include hotel" />
              <FormControlLabel control={<Checkbox inputRef={includeTransTef}/>} label="include trans" />
            </FormGroup>

          </>
        } 
        <button className="btn custom-btn-primary my-4 w-100" onClick={save}>save now</button>
      </form>
    </div>
  );
}
