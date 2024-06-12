import { Link } from "react-router-dom";
import image from "../assets/royalAir.png";
export default function Flight() {
  return (
    <div className="w-100 p-3 border my-2 rounded-2 d-flex align-items-center justify-content-between">
        <div className="d-flex flex-column align-items-center">
            <img src={image} alt="" style={{ width: "150px", height: "80px" }} />
            <Link to="/providers/provider/1" className="text-secondary text-capitalize">airline name</Link>
        </div>
        <div className="d-flex flex-column">
            <h5 className="text-secondary">
                LGW <i class="fa-solid fa-arrow-right"></i> PUJ
            </h5>
            <div>6:20PM - 7:00AM</div>
        </div>
        <div className="d-flex flex-column">
            <h5 className="text-secondary">17hr 30m</h5>
            <div>2 stops</div>
        </div>
        <div className="d-flex flex-column">
            <div className="mb-2 text-center h5">200$</div>
            <button className="btn custom-btn-secondary">book now</button>
        </div>
    </div>
  );
}
