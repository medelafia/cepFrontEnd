import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Car from "./componants/Car";
import DefaultSkelton from "../../components/DefaultSkeltom";
import FilterCell from "../../components/FilterCell";
import InternalError from "../../components/InternalError";
import NoItems from "../../components/NoItems";
import ShowMore from "../../components/ShowMore";
import { useFetch } from "../../hooks/custom-hooks";
import { useParams } from "react-router-dom";
import { useTransform } from "framer-motion";

export default function Cars() {
  const [cars , setCars ] =useState(null ) 
  const airportRef = useRef()
  const nbSeats = useRef() 
  const [ isLoading , setIsLoading] = useState(false )
  const [error , setError ] = useState(null)  
  const airports = useFetch("http://localhost:8089/gates/airports/");
  useEffect(()=> {
    fetch("http://localhost:8089/offer/cars")
    .then( res => res.json() )
    .then( data => setCars(data))
  }, )
  const airportRendering = () => {
    return airports.data?.map((airport, index) => (
      <MenuItem value={airport.id}>
        {airport.id} ({airport.name})
      </MenuItem>
    ));
  };
  const search = (e) => {
    e.preventDefault() 
    setIsLoading(true) 
    fetch(`http://localhost:8089/offer/airportId=${airportRef.current.checked}&nbSeats=${nbSeats.current.checked}`)
    .then(res => res.json())
    .then( data => {
      setCars(data) 
      setIsLoading(false) 
    })
  }
  const displayCars = () => {
    return cars.map((car, index) => <Car key={index} car={car} />);
  };
  const [nbElements, setNbElements] = useState(8);
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="page p-2">
      <div className="w-100"></div>
      <div className="row w-100">
        <div className="col-sm-12">
          {isLoading ? (
            <div className="row">
              <DefaultSkelton />
              <DefaultSkelton />
              <DefaultSkelton />
              <DefaultSkelton />
              <DefaultSkelton />
              <DefaultSkelton />
            </div>
          ) : error ? (
            <InternalError />
          ) : (
            <>
              <div className="d-flex mb-2 ">
                <FormControl fullWidth className="me-2">
                  <InputLabel>airport</InputLabel>
                  <Select inputRef={airportRef}>{airportRendering()}</Select>
                </FormControl>
                <FormControl fullWidth className="me-2">
                  <InputLabel>number of travelers</InputLabel>
                  <Select inputRef={nbSeats}>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                  </Select>
                </FormControl>
                <button className="btn btn-dark" onClick={search}>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-2">
                <div className="text-capitalize">{cars?.length} car</div>
                <div className="d-flex align-items-center w-25">
                  <button
                    className="btn p-3"
                    onClick={() => setShowFilter(!showFilter)}
                  >
                    <i class="fa-solid fa-filter text-secondary"></i>
                  </button>
                  <FormControl fullWidth className="ms-2">
                    <InputLabel>sort by</InputLabel>
                    <Select>
                      <MenuItem value="price">price</MenuItem>
                      <MenuItem value="recommended">recommanded</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-12 row">
                  {showFilter && (
                    <div className="row my-2">
                      <div className="col-lg-2 col-md-4 col-sm-12">
                        <FormControl fullWidth>
                          <InputLabel>car style</InputLabel>
                          <Select>
                            <MenuItem>suv</MenuItem>
                            <MenuItem>suv</MenuItem>
                            <MenuItem>suv</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-12">
                        <FormControl fullWidth>
                          <InputLabel>number of seats</InputLabel>
                          <Select>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-12">
                        <FormControl fullWidth>
                          <InputLabel>numbers of doors</InputLabel>
                          <Select>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-12">
                        <FormControl fullWidth>
                          <InputLabel>numbers of suitcases</InputLabel>
                          <Select>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="col-lg-2 col-md-4 col-sm-12">
                        <FormControl fullWidth>
                          <InputLabel>price</InputLabel>
                          <Select>
                            <MenuItem value={1}>20-40$</MenuItem>
                            <MenuItem value={2}>40-60$</MenuItem>
                            <MenuItem value={3}>60-80$</MenuItem>
                            <MenuItem value={4}>80$+</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                  )}
                  {cars?.length > 0 ? (
                    <>
                      {displayCars()}
                      {cars?.length > nbElements && (
                        <ShowMore
                          callBack={() => setNbElements(nbElements + 8)}
                        />
                      )}
                    </>
                  ) : (
                    <NoItems />
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
