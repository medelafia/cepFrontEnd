import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Flight from "../../components/Flight";
import ShowMore from "../../components/ShowMore";

export default function FlightsPage() {
  const [result, setResult] = useState(["1", ""]);
  const [showFilter , setShowFilter] = useState(false)
  const renderFlights = () => {
    return result.map((flight, index) => <Flight />);
  };
  const [flightType , setFlightType] = useState("round") 
  return (
    <div className="w-100 page">
      <div className="w-100 row">
        <div className="col-md-4 col-sm-12 p-4 border rounded">
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
        <div className="col-md-8 col-sm-12 py-3">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              12 flights
            </div>
            <div className="d-flex">
              <button className="btn border mx-2 d-flex align-items-center" onClick={()=>setShowFilter(!showFilter)}>
                <i class="fa-solid fa-filter me-2"></i>
                <span>filter</span>
              </button>
              <select name="" id="sort" className="form-select">
                                <option>recommended</option>
                                <option>min price</option>
              </select>
            </div>
          </div> 
          { showFilter && 
                        <div className="d-flex align-items-center justify-content-between my-2">
                            <select name="" id="" className="form-select me-2"></select>
                            <select name="" id="" className="form-select mx-1"></select>
                            <select name="" id="" className="form-select ms-2"></select>
                        </div>
                    }
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
