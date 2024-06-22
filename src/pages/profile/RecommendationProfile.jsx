import { SignalCellularNullOutlined } from "@mui/icons-material";
import { Checkbox, FormControlLabel, FormGroup, Slider } from "@mui/material";
import { useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/selectors/userSelector";

export default function RecommendationProfile() {
  const activateRecommendationSysRef = useRef();
  const [budget , setBudget] = useState([10 , 20])
  const user = useSelector(userSelector);
  const [  prefferedDesinations , setPrefferedDesinations ]  = useState(["dest1" , "dst2" , "dest3" , "dst4" , "dest5" , "dst6" , "dest7" , "dst7"]) 
  const [ prefferedDesinationsTypes , setPrefferedDesinationsTypes] = useState(["CULTURAL"])
  const [showForm, setShowForm] = useState(
    user?.recommendationProfileActivation
  );
  const handleActivateRec = () => {
    setShowForm(!showForm);

  };
  const deleteFromPrefferedList = (name) => {
    setPrefferedDesinations(prev => prev.filter(element => element != name))
  }
  const renderPrefferedDestinations = () => {
    return prefferedDesinations.map((des , index) =>
      <div className="rounded d-flex align-items-center justify-content-between border my-2 mx-1 ps-3">
        <span className="text-capitalize">{des}</span>
        <button className="btn ms-3"
          onClick={(e)=>deleteFromPrefferedList(e.currentTarget.getAttribute("data-target"))}
          data-target={des}
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    )
  }
  const renderPrefferedDestinationsTypes = () => {
    return prefferedDesinationsTypes.map((desType , index ) => 
        <FormControlLabel control={<Checkbox />} label={desType} />
    )
  }
  return (
    <div className="d-flex align-items-start justify-content-center flex-column w-100">
      <div className="form-group d-flex align-items-center justify-content-start">
        <input
          type="checkbox"
          className="form-check"
          name=""
          id="activateRecommendationSys"
          ref={activateRecommendationSysRef}
          onChange={handleActivateRec}
          defaultChecked={user?.recommendationProfileActivation}
        />
        <label
          className="text-capitalize ms-2"
          htmlFor="activateRecommendationSys"
        >
          activate recommendation system
        </label>
      </div>
      {!showForm && (
        <div id="accordion" className="w-100 my-3">
          <div class="card">
            <div class="card-header">
              <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
                budget
              </a>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              data-bs-parent="#accordion"
              className="px-5"
            >
              <Slider
                getAriaLabel={() => "Minimum distance"}
                value={budget}
                onChange={(e,newValue)=>setBudget(newValue)}
                valueLabelDisplay="auto"
                getAriaValueText={null}
                disableSwap
              />
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <a
                class="collapsed btn"
                data-bs-toggle="collapse"
                href="#collapseTwo"
              >
                Preferred Destinations
              </a>
            </div>
            <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
              <div class="card-body d-flex flex-wrap">
                {renderPrefferedDestinations()} 
                <button className="btn btn-dark my-2">+</button> 
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <a
                class="collapsed btn"
                data-bs-toggle="collapse"
                href="#collapseThree"
              >
                preffered destinations types
              </a>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              data-bs-parent="#accordion"
            >
              <div class="card-body px-5">
                <FormGroup>
                  {renderPrefferedDestinationsTypes()}
                </FormGroup>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-end mt-3">
            <button className="btn btn-outline-dark me-2">reset</button>
            <button className="btn custom-btn-secondary ms-2">save</button>
          </div>
        </div>
      )}
    </div>
  );
}
