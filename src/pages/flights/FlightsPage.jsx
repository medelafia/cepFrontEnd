import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Flight from "../../components/Flight";
import ShowMore from "../../components/ShowMore";

export default function FlightsPage() {
  const [result, setResult] = useState(["1", ""]);
  const renderFlights = () => {
    return result.map((flight, index) => <Flight />);
  };
  const [flightType , setFlightType] = useState("round") 
  return (
    <div className="w-100 page">
      <div className="w-100 row">
        <div className="col-md-4 p-4 border rounded">
            <div className="text-capitalize h4 custom-text-primary">find your flight now !</div>
            <div className="d-flex border-bottom">
                <div className={`me-3 cursor-pointer ${flightType == "round" && "active"}`} onClick={()=>{setFlightType("round")}}>
                    round trip
                </div>
                <div className={`mx-3 cursor-pointer ${flightType == "oneWay" && "active"}`} onClick={()=>{setFlightType("oneWay")}}>
                    one way
                </div>
            </div>
            <form className="w-100 d-flex align-items-center no-wrap justify-content-around p-3 flex-column">
                <div className="form-group my-1 w-100">
                    <label htmlFor="" className="from-label" >from :</label>
                    <select name="" id="" className="form-select rounded-pill">
                        <option value="">airport 1 </option>
                        <option value="">airport 1 </option>
                        <option value="">airport 1</option>
                    </select>
                </div>
                <div className="form-group my-1 w-100">
                    <label htmlFor="" className="from-label">to :</label>
                    <select name="" id="" className="form-select rounded-pill">
                        <option value="">airport 1 </option>
                        <option value="">airport 1 </option>
                        <option value="">airport 1</option>
                    </select>
                </div>
                <div className="form-group my-1 w-100">
                    <label htmlFor="" className="from-label">depart date :</label>
                    <input type="date" className="rounded-pill form-control " id="" placeholder="depart"/>
                </div>
                {
                    flightType == "round" && (
                    <div className="form-group my-1 w-100">
                        <label htmlFor="" className="from-label">return date :</label>
                        <input type="date" className="rounded-pill form-control " id="" placeholder="depart"/>
                    </div>
                    )
                }
                <div className="form-group my-1 w-100">
                    <label htmlFor="" className="from-label">depart date :</label>
                    <select name="" id="" className="form-select rounded-pill">
                        <option value="">premieum</option>
                        <option value="">busniss</option>
                    </select>
                </div>
                
            <button className="btn custom-btn-primary rounded-pill my-3 w-100 ">
              search
            </button>
          </form>
        </div>
        <div className="col-md-8 py-3">
          {result.length == 0 ? (
            <p className="text-center custom-text-secondary">no flights</p>
          ) : (
            renderFlights()
          )}
          <ShowMore />
        </div>
      </div>
    </div>
  );
}
