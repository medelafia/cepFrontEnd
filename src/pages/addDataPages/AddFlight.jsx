import { FormControl, InputLabel, Select, TextField } from "@mui/material";
import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/custom-hooks";
import AddDataTemplate from "./AddDataTemplate";

export default function AddFlight() {
  const [stopAirports, setStopAirports] = useState(0);
  const [airports, setAirport] = useState([]);
  const { data, isLoading, error } = useFetch(
    "http://localhost:8089/gates/airports/"
  );
  const navigate = useNavigate();
  /* offre elements */ /*travel elements*/
  const departureDateRef = useRef();
  const returnDateRef = useRef();
  const departureTimeRef = useRef();
  const arrivedTimeRef = useRef();
  const nbOfStopsRef = useRef();
  const distance = useRef();
  const nbOfPlacesRef = useRef();
  const reservedPlacesRef = useRef();
  const distanceRef = useRef();
  const travelDurationRef = useRef();
  /**flight elements = */
  const srcAirportRef = useRef();
  const destAirportRef = useRef();
  const [passedAirports, setPasswordAirports] = useState([]);
  const [flightsClasses, setFlightsClasses] = useState([]);
  const flightClassName = useRef()
  const flightClassPrice = useRef()
  const flightClassPlaces = useRef()
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
    let dateArray = date.split("-");
    return dateArray.join("-");
  };
  const save = (e) => {
    e.preventDefault();
    const body = {
      distance: Number.parseInt(distanceRef.current.value),
      nbOfPlaces: Number.parseInt(nbOfPlacesRef.current.value),
      nbOfStops: Number.parseInt(nbOfStopsRef.current.value),
      reservedPlaces: Number.parseInt(reservedPlacesRef.current.value),
      departureDate: toSqlDate(departureDateRef.current.value),
      departureTime: departureTimeRef.current.value + ":00",
      arrivedTime: arrivedTimeRef.current.value + ":00",
      returnDate: toSqlDate(returnDateRef?.current?.ref),
      travelDuration: travelDurationRef.current.value + ":00",
      
    };
    fetch("http://localhost:8089/airlines/createFlight", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.status == 200) {
        Swal.fire({
          title: "the flights added successfuly",
          timer: 2000,
          icon: "success",
        });
        navigate(onSuccessPath);
      }
    });
  };
  const addClass = () => {
    setFlightsClasses([...flightsClasses, 
        {name : flightClassName.current.value , price : flightClassPrice.current.value , places :flightClassPlaces.current.value } ]);
        document.querySelector("btn-close").click()
  };
  return (
    <AddDataTemplate name="flights information">
      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div class="modal-body">
                <TextField label="class name" fullWidth className="my-2" inputRef={flightClassName}/>
                <TextField label="class price" fullWidth type="number" className="my-2" inputRef={flightClassPrice}/>
                <TextField label="class places" fullWidth type="number" className="my-2" inputRef={flightClassPlaces}/>
            </div>
            <div class="modal-footer">
                <button className="btn btn-dark" onClick={addClass}>
                    add class
                </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
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
          onChange={(e) => console.log(toSqlDate(e.currentTarget.value))}
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
        <TextField label="price" className="mx-1" fullWidth />
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
        <TextField
          label="travel duration"
          className="ms-1"
          fullWidth
          inputRef={travelDurationRef}
        />
      </div>
      <div className="form-group my-2 d-flex w-100">
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
          <Select required inputRef={destAirportRef}>
            {renderAirport}
          </Select>
        </FormControl>
      </div>
      <div className="p-2 w-100 border rounded">
        <h6 className="text-capitalize">flight classes</h6>
        {flightsClasses.map((flightClass, index) => (
          <div className="row py-3">
            <div className="col-sm-4">
              <TextField label="class name" fullWidth value={flightClass.name} />
            </div>
            <div className="col-sm-4">
              <TextField label="class price" fullWidth type="number" value={flightClass.price}/>
            </div>
            <div className="col-sm-4">
              <TextField label="class places" fullWidth type="number" value={flightClass.places}/>
            </div>
          </div>
        ))}
        <button className="btn btn-dark w-100" data-bs-toggle="modal" data-bs-target="#myModal">
          add flight class
        </button>
      </div>
      <button className="btn custom-btn-primary my-4 w-100" onClick={save}>
        save now
      </button>
    </AddDataTemplate>
  );
}
