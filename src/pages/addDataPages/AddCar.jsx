import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material";
import { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/selectors/userSelector";

import AddDataHeader from "../../components/AddDataHeader";
import CurrentPath from "../../components/CurrentPath";
import { json, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";

export default function AddCar() { 
  const { id } = useParams()
  const [ car , setCar ] = useState(null) ; 
  useEffect(()=>{
    fetch("http://localhost:8089/gates/airports/")
      .then((res) => res.json())
      .then((data) => setAirports(data));
    if(id != undefined) {
      fetch(`http://localhost:8089/cars/${id}`)
      .then(res => res.json() ) 
      .then( data => {
        setCar(data)
      })
    }
  } , [])
  /**selectors  */
  const user = useSelector(userSelector);
  const navigate = useNavigate();
  /** states  */
  const [imageUrl , setImageUrl ] = useState(car?.image ) 
  const [step, setStep] = useState(0);
  const [airports, setAirports] = useState([]);
  /**references */
  const makeRef = useRef();
  const modelRef = useRef();
  const priceRef = useRef();
  const fuelTypeRef = useRef();
  const transmissionRef = useRef();
  const styleRef = useRef();
  const seatsRef = useRef();
  const doorsRef = useRef();
  const suitCasesRef = useRef();
  const airCondRef = useRef();
  const freeCancRef = useRef();
  const airportRef = useRef();
  const availableRef = useRef();
  const imageRef = useRef() 

  /**methods  */
  const renderAirports = () => {
    return airports?.map((airport, index) => (
      <MenuItem value={airport.id}>
        {airport.iata} ({airport.name})
      </MenuItem>
    ));
  };
  const addCar = (e) => {
    e.preventDefault();
    const makeValue = makeRef.current.value;
    const modelValue = modelRef.current.value;
    const priceValue = Number.parseFloat(priceRef.current.value);
    const fuelTypeValue = fuelTypeRef.current.value;
    const transValue = transmissionRef.current.value;
    const styleValue = styleRef.current.value;
    const seatsValue = seatsRef.current.value;
    const doorsValue = doorsRef.current.value;
    const suitCasesValue = suitCasesRef.current.value;
    const airCondValue = airCondRef.current.checked;
    const freeCancelValue = freeCancRef.current.checked;
    const availableValue = availableRef.current.checked;
    fetch(`http://localhost:8089/carsAgencies/${user.id}/${id == undefined ? "createCar" : `updateCar/${id}`}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image : imageRef.current.files[0] , 
        price: priceValue,
        make: makeValue,
        model: modelValue,
        fuelType: fuelTypeValue,
        transType: transValue,
        styleType: styleValue,
        seats: seatsValue,
        doors: doorsValue,
        bags: suitCasesValue,
        airConditioning: airCondValue,
        freeCancelation: freeCancelValue,
        available: availableValue,
        airportId : airportRef.current.value 
      }),
    })
      .then((res) => {
        if (res.status == 200) {
          Swal.fire({
            icon: "success",
            timer: 2000,
            title: "success",
            text: `the car ${id == undefined ? "created" : updated} successfully` ,
          }); 
            return res.json()
        }
        navigate("/dashboard/cars")
      })
  };

  return (
    <div className="bg-light">
      <div className="custom-container py-5">
        <CurrentPath />
        <form className="p-4 rounded shadow bg-white my-3">
          <div className="text-uppercase text-secondary">
            car infomation 
          </div>
          <div className="my-3 d-flex justify-content-between align-items-center flex-column">
            <img style={{width : "250px" , height : "250px"}} src={imageUrl}/>
            <input type="file" accept="image/*" id="carImage" hidden ref={imageRef} onChange={(e)=>setImageUrl(URL.createObjectURL(e.currentTarget.files[0]))}/>
            <button className="btn btn-dark mt-3" onClick={()=>document.getElementById("carImage").click()}>upload image</button>
          </div>
          <div className="my-3 d-flex justify-content-between">
            <TextField
              className="me-1"
              label="car make"
              fullWidth
              inputRef={makeRef}
              required
              defaultValue={'cjkd'} 
            />
            <TextField
              className="ms-1"
              label="car model"
              fullWidth
              inputRef={modelRef}
              required
              defaultValue={car?.model}
            />
          </div>
          <div className="my-3">
            <TextField
              className="me-1"
              label="price"
              fullWidth
              inputRef={priceRef}
              defaultValue={car?.price}
              required
            />
          </div>
          <div className="form-group my-3 d-flex justify-content-between">
            <FormControl fullWidth className="me-1">
              <InputLabel>fuel</InputLabel>
              <Select defaultValue={car?.fuelType} required inputRef={fuelTypeRef} >
                <MenuItem value="DIESEL">DIESEL</MenuItem>
                <MenuItem value="GASOLINE">GASOLINE</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth className="mx-1">
              <InputLabel>
                transmission
              </InputLabel>
              <Select required defaultValue={car?.transType} inputRef={transmissionRef}>
                <MenuItem value="MANUEL">MANUEL</MenuItem>
                <MenuItem value="AUTOMATIC">AUTOMATIC</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth className="ms-1">
              <InputLabel>style</InputLabel>
              <Select required defaultValue={car?.styleType} inputRef={styleRef}>
                <MenuItem value="COUPE">coupe</MenuItem>
                <MenuItem value="SUV">suv</MenuItem>
                <MenuItem value="SEDAN">sedan</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="form-group my-3 d-flex">
            <TextField
              required
              type="number"
              fullWidth
              label="seats"
              defaultValue={car?.seats}
              className="me-1"
              inputRef={seatsRef}
            />
            <TextField
              required
              type="number"
              fullWidth
              label="doors"
              defaultValue={car?.doors}
              className="mx-1"
              inputRef={doorsRef}
            />
            <TextField
              required
              type="number"
              fullWidth
              label="suit cases"
              className="ms-1"
              defaultValue={car?.bags}
              inputRef={suitCasesRef}
            />
          </div>
          <div className="form-group my-3">
            <FormControl fullWidth className="ms-1">
              <InputLabel> airport</InputLabel>
              <Select required defaultValue={car?.airport.id} inputRef={airportRef}>
                {renderAirports()}
              </Select>
            </FormControl>
          </div>
          <div className="form-group my-3">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox inputRef={airCondRef} defaultChecked={car?.airConditioning}/>}
                label="air conditioning"
              />
              <FormControlLabel
                control={<Checkbox inputRef={freeCancRef} defaultChecked={car?.freeCancelation}/>}
                label="free cancellation"
              />
              <FormControlLabel
                control={<Checkbox inputRef={availableRef} defaultChecked={car?.available} />}
                label="available now"
              />
            </FormGroup>
          </div>
          <div className="w-100 d-flex justify-content-end">
            <button className="btn btn-outline-dark px-3 mx-3" type="reset">
              reset
            </button>
            <button className="btn btn-dark px-3 mx-3" onClick={addCar}>
              { id == undefined ? "save"  : "update" }
            </button>
          </div>
        </form> 
      </div>
    </div>
  );
}
