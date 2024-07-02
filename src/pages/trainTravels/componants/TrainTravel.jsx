import { useState } from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/royalAir.png";
export default function TrainTravel({ trainTravel }) {
  const [showClasses, setShowClasses] = useState(false);
  const renderClasses = () => {
    return trainTravel.trainTravelClasses.map((trainTravelClass, idx) => (
      <div className={`col-sm-12 col-md-6 col-lg-4`}>
        <div className="container custom-rounded shadow bg-white">
            <div className="w-100 py-2">
                <h2 className="custom-text-primary text-center text-capitalize">{trainTravelClass.name}</h2>
            </div>
            <div>

            </div>
            <div className="text-center">{trainTravelClass.price} $</div>
            <button className="btn btn-dark w-100 my-3 rounded-pill">book now</button>
        </div>
      </div>
    ));
  };
  return (
    <div className="w-100 border my-2 custom-rounded position-relative overflow-hidden">
      <div className="row px-3 py-5">
        <div className="col-sm-12 col-lg-3 d-flex flex-column align-items-center">
          <img src={image} alt="" style={{ width: "150px", height: "80px" }} />
          <Link
            to="/providers/provider/1"
            className="text-secondary text-capitalize"
          >
            airline name
          </Link>
        </div>
        <div className="col-sm-12 col-lg-6 d-flex flex-column justify-content-center">
          <div className="d-flex mb-2">
            <div className="me-3">{trainTravel.departureTime} </div>
            <h5 className="text-secondary">
              <span className="me-2">{trainTravel.from.name} </span>
              <i class="fa-solid fa-plane"></i>{" "}
              <span className="ms-2">{trainTravel.to.name}</span>
            </h5>
            <div className="ms-3">{trainTravel.arrivedTime}</div>
          </div>
          <div className="d-flex mt-2">
            <div className="me-3">{trainTravel.departureTime} </div>
            <h5 className="text-secondary">
              <span className="me-2">{trainTravel.from.name} </span>
              <i class="fa-solid fa-plane" style={{transform : "rotateY(180deg)"}}></i>{" "}
              <span className="ms-2">{trainTravel.to.name}</span>
            </h5>
            <div className="ms-3">{trainTravel.arrivedTime}</div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-3 d-flex flex-column justify-content-center align-items-center">
          <h5 className="text-secondary">17hr 30m</h5>
          <div>2 stops</div>
        </div>
      </div>
      <button
        className="btn position-absolute"
        style={{ bottom: "0px", left: "40px" }}
        onClick={() => {
          setShowClasses(!showClasses);
        }}
      >
        <i class="fa-solid fa-chevron-down" style={{transform: showClasses ? "rotateX(180deg)" : "" , transition :"1s"}}></i>
      </button>
      {showClasses &&
        <div className="row p-5 bg-light">
            {renderClasses()}
        </div>
      }
    </div>
  );
}
