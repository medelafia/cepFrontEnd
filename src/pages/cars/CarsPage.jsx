import {
    Accordion,
  AccordionDetails,
  AccordionSummary,
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
  const [showFilter, setShowFilter] = useState(false);
  useEffect(()=> {
    console.log(data)
  } , [data ])
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
                <button className="btn btn-dark">search </button>
              </div>
              <div className="d-flex align-items-center justify-content-between mt-2">
                <div className="text-capitalize">{data?.length} car</div>
                <div className="d-flex align-items-center w-25">
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
                <div className="col-md-4">
                  <div className="">
                    <Accordion>
                      <AccordionSummary
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        Accordion 1
                      </AccordionSummary>
                      <AccordionDetails>
                        
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        Accordion 1
                      </AccordionSummary>
                      <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
                <div className="col-md-8 row">
                  {displayCars()}
                  <ShowMore callBack={console.log("show more cars")} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
