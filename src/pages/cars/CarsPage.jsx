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
import { useEffect, useState } from "react";
import Car from "../../components/Car";
import DefaultSkelton from "../../components/DefaultSkeltom";
import FilterCell from "../../components/FilterCell";
import InternalError from "../../components/InternalError";
import NoItems from "../../components/NoItems";
import ShowMore from "../../components/ShowMore";
import { useFetch } from "../../hooks/custom-hooks";

export default function Cars() {
  const { data, isLoading, error } = useFetch("http://localhost:8089/cars/");
  const airports = useFetch("http://localhost:8089/gates/airports/");
  const airportRendering = () => {
    return airports.data?.map((airport, index) => (
      <MenuItem value={airport.id}>
        {airport.id} ({airport.name})
      </MenuItem>
    ));
  };
  const displayCars = () => {
    return data.map((car, index) => <Car key={index} car={car} />);
  };
  const [ nbElements , setNbElements ] = useState(8) ; 
  const [showFilter, setShowFilter] = useState(false) ;
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
              <div className="d-flex mb-2">
                <FormControl fullWidth className="me-2">
                  <InputLabel>airport</InputLabel>
                  <Select>{airportRendering()}</Select>
                </FormControl>
                <FormControl fullWidth className="me-2">
                  <InputLabel>number of travelers</InputLabel>
                  <Select>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                  </Select>
                </FormControl>
                <button className="btn btn-dark"><i class="fa-solid fa-magnifying-glass"></i></button>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-2">
                <div className="text-capitalize">{data?.length} car</div>
                <div className="d-flex align-items-center w-25">
                  <button className="btn p-3" onClick={()=> setShowFilter(!showFilter)}>
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
              <div className="row">
                <div className="col-md-12 row">
                  { showFilter && <div className="d-flex my-2 w-100">
                    <FormControl fullWidth className="me-1">
                      <InputLabel>car style</InputLabel>
                      <Select>
                        <MenuItem>suv</MenuItem>
                        <MenuItem>suv</MenuItem>
                        <MenuItem>suv</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth className="mx-1">
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
                    <FormControl fullWidth className="mx-1">
                      <InputLabel>numbers of doors</InputLabel>
                      <Select>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth className="ms-1">
                      <InputLabel>numbers of suitcases</InputLabel>
                      <Select>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth className="ms-1">
                      <InputLabel>price</InputLabel>
                      <Select>
                        <MenuItem value={1}>20-40$</MenuItem>
                        <MenuItem value={2}>40-60$</MenuItem>
                        <MenuItem value={3}>60-80$</MenuItem>
                        <MenuItem value={4}>80$+</MenuItem>
                      </Select>
                    </FormControl>
                  </div>}
                  {data?.length > 0 ?
                  <>
                    {displayCars()}
                    {data?.length > nbElements && <ShowMore callBack={()=>setNbElements(nbElements +8 )} /> } 
                  </>
                  : <NoItems />}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
