import { Link } from "react-router-dom";
import CarProperty from "../../../components/CarProperty";

export default function Car({car}) {
    return (
        <div className="align-self-center justify-seld-center col-lg-6 col-sm-12 rounded my-2 bg-white">
            <div className="d-flex container align-items-start justify-content-center row p-3 border">
                <div className="col-md-6 col-sm-12 p-2">
                    <div className="text-secondary">{car.model}</div>
                    <h4 className="text-capitalize">{car.make}</h4>
                    <div className="w-100" style={{height : "150px"}}>
                        <img src={car.image.url} style={{width : "100%" , height : "100%"}} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 p-5 d-flex">
                    {/*<div className="bg-light" style={{width : "1px" , height : "200px"}}>
                    </div>*/}
                    <div className="d-flex align-items-center justify-content-around p-1 flex-column" style={{width : "calc(100% - 1px)"}}>
                        <div>
                            <div className="text-capitalize mb-3 text-success">
                                {car.freeCancelation ?  <><i class="fa-solid fa-circle-check me-2"></i>free cancelation</> : <> </>}    
                            </div> 
                            <div className="text-capitalize mb-3 text-success">
                                { car.airConditioning ? <><i class="fa-solid fa-circle-check me-2"></i>air conditioning</> : <> </>}    
                            </div>
                        </div>
                        <div className="h1">{ car.price }$</div>
                        <button className="btn custom-btn-secondary">book now !</button>
                    </div>
                </div>
                <div className="col-md-12 col-sm-12 p-2 d-flex row align-items-center justify-content-between border-top">
                    <div className="col-sm-4">
                        <Link className="text-capitalize my-2 text-secondary" to={`/providers/provider/${car.carsAgency?.id}`}> { car.carsAgency?.name} </Link> 
                        <img src={car.carsAgency.logo.url} className="rounded mt-2" style={{width : "150px" , height : "60px"}} alt=""/>
                    </div>      
                    <div className="col-sm-8 row">
                        <div className="col-sm-6 d-flex align-items-center"><i class="fa-solid fa-person me-2"></i> <span>{car.numberOfSeats} seats</span></div>
                        <div className="col-sm-6 d-flex align-items-center"><i class="fa-solid fa-gas-pump me-2"></i> <span className="text-lowercase"> {car.fuelType}</span></div>
                        <div className="col-sm-6 d-flex align-items-center"><i class="fa-solid fa-person me-2"></i> <span>{car.numberOfSeats} seats</span></div>
                        <div className="col-sm-6 d-flex align-items-center"><i class="fa-solid fa-suitcase-rolling me-2"></i><span>{car.numberOfSuitcases} bags</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
} 