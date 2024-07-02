import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useReducedMotion, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { useFetch } from "../../hooks/custom-hooks";
import TrainTravel from "./componants/TrainTravel";

export default function TrainTravels() {
  const stations = useFetch("http://localhost:8089/gates/stations");
  const [travelType, setTravelType] = useState("round");
  const departureDateRef = useRef();
  const returnDateRef = useRef();
  const srcStationRef = useRef();
  const destStationRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [trainTravels, setTrainTravels] = useState([
    {
      from: { name: "casablanca" },
      to: { name: "tanger" },
      departureTime: "20:00:00",
      arrivedTime: "24:00:00",
      trainTravelClasses : [ ]
    },
    {
      from: { name: "casablanca" },
      to: { name: "tanger" },
      departureTime: "20:00:00",
      arrivedTime: "24:00:00",
      trainTravelClasses : [ ]
    },
    {
      from: { name: "casablanca" },
      to: { name: "tanger" },
      departureTime: "20:00:00",
      arrivedTime: "24:00:00",
      trainTravelClasses : [ ]
    },
  ]);
  const renderStation = () => {
    return stations.data?.map((station, index) => (
      <MenuItem value={station.id}>{station.name}</MenuItem>
    ));
  };
  const search = () => {
    console.log("sea");
  };
  const renderTrainTravels = () => {
    return trainTravels.map((trainTravel, index) => (
      <TrainTravel trainTravel={trainTravel} />
    ));
  };
  return (
    <div className="w-100 page">
      <div className="w-100 row">
        <div className="col-md-4 col-sm-12 p-4 border rounded">
          <div className="text-capitalize h4 custom-text-primary">
            find your train travel now !
          </div>
          <div className="d-flex border-bottom">
            <div
              className={`me-3 cursor-pointer ${
                travelType == "round" && "active"
              }`}
              onClick={() => {
                setTravelType("round");
              }}
            >
              round trip
            </div>
            <div
              className={`mx-3 cursor-pointer ${
                travelType == "oneWay" && "active"
              }`}
              onClick={() => {
                setTravelType("oneWay");
              }}
            >
              one way
            </div>
          </div>
          <form className="w-100 d-flex align-items-center no-wrap justify-content-around p-3 flex-column">
            <div className="form-group my-2 w-100">
              <FormControl fullWidth>
                <InputLabel>from</InputLabel>
                <Select inputRef={srcStationRef}>{renderStation()}</Select>
              </FormControl>
            </div>
            <div className="form-group my-2 w-100">
              <FormControl fullWidth>
                <InputLabel>to</InputLabel>
                <Select inputRef={destStationRef}>{renderStation()}</Select>
              </FormControl>
            </div>
            <div className="form-group my-2 w-100">
              <TextField
                label="dep date"
                type="date"
                fullWidth
                focused
                inputRef={departureDateRef}
              />
            </div>
            {travelType == "round" && (
              <div className="form-group my-2 w-100">
                <TextField
                  label="return date"
                  type="date"
                  fullWidth
                  focused
                  inputRef={returnDateRef}
                />
              </div>
            )}

            <button
              className="btn custom-btn-primary rounded-pill my-3 w-100 "
              onClick={search}
            >
              search
            </button>
          </form>
        </div>
        <div className="col-md-8 col-sm-12 p-3">
          {isLoading ? (
            <>
              <FlightSkeleton />
              <FlightSkeleton />
              <FlightSkeleton />
              <FlightSkeleton />
            </>
          ) : false ? (
            <InternalError />
          ) : (
            <>
              <div className="d-flex align-items-center justify-content-between">
                <div></div>
                <div className="d-flex">
                  <button
                    className="btn border mx-2 d-flex align-items-center"
                    onClick={() => setShowFilter(!showFilter)}
                  >
                    <i class="fa-solid fa-filter me-2"></i>
                    <span>filter</span>
                  </button>
                  <select name="" id="sort" className="form-select">
                    <option>recommended</option>
                    <option>min price</option>
                  </select>
                </div>
              </div>
              {renderTrainTravels()}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
