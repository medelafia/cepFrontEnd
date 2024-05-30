import { useState } from "react";
import { useRef } from "react";

export default function RecommendationProfile() {
  const activateRecommendationSysRef = useRef();
  const [showForm, setShowForm] = useState(false);
  const handleActivateRec = () => {
    setShowForm(!showForm);
  };
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
        />
        <label
          className="text-capitalize ms-2"
          htmlFor="activateRecommendationSys"
        >
          activate recommendation system
        </label>
      </div>
      {showForm && (
        <div id="accordion" className="w-100 my-3">
          <div class="card">
            <div class="card-header">
              <a class="btn" data-bs-toggle="collapse" href="#collapseOne">
                Collapsible Group Item #1
              </a>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              data-bs-parent="#accordion"
            >
              <div class="card-body">Lorem ipsum..</div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <a
                class="collapsed btn"
                data-bs-toggle="collapse"
                href="#collapseTwo"
              >
                Collapsible Group Item #2
              </a>
            </div>
            <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
              <div class="card-body">Lorem ipsum..</div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <a
                class="collapsed btn"
                data-bs-toggle="collapse"
                href="#collapseThree"
              >
                Collapsible Group Item #3
              </a>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              data-bs-parent="#accordion"
            >
              <div class="card-body">Lorem ipsum..</div>
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
