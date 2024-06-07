import { setAutoFreeze } from "immer";
import { useState } from "react"
import AddDataHeader from "../../components/AddDataHeader";
import CurrentPath from "../../components/CurrentPath";
import StopAirport from "../../components/StopAirport";

export default function AddFlight() {
    const [stopAirports , setStopAirports ]  = useState(0 ) ; 
    const addStopAirport = (e) => {
        e.preventDefault()
        document.getElementById("stopAirports").append(<StopAirport />)
    }
    return (
        <div className="p-5">
            <CurrentPath />
            <AddDataHeader title={"add flight"} /> 
            <form action="" className="my-5">
                <div className="form-group my-1">
                    <label htmlFor="">flight type</label>
                    <select name="" id="" className="form-select">
                        <option value="">round trip</option>
                        <option value="">one way</option>
                    </select>
                </div>
                <div className="form-group my-1 d-flex w-100">
                    <div className="form-group w-50 me-1">
                        <label htmlFor="">start airport : </label>
                        <select name="" id="" className="form-select">
                            <option value="">jdjd</option>
                        </select>
                    </div>
                    <div className="form-group w-50 ms-1">
                        <label htmlFor="">start data : </label>
                        <input type="date" placeholder="enter the number of places"  className="form-control"/>
                    </div>
                </div>
                <div className="form-group my-1 d-flex w-100">
                    <div className="form-group w-50 me-1">
                        <label htmlFor="">arrived airport : </label>
                        <select name="" id="" className="form-select">
                            <option value="">jdjd</option>
                        </select>
                    </div>
                    <div className="form-group w-50 ms-1">
                        <label htmlFor="">arrived date :</label>
                        <input type="date" placeholder="enter the number of places"  className="form-control"/>
                    </div>
                </div>
                <div className="form-group my-2 w-100 ">
                    <div className="d-flex align-items-center justify-content-between">
                        <label htmlFor="">stop airports</label>
                        <button className="btn btn-dark" onClick={addStopAirport}>+</button>
                    </div>
                    <div className="w-100 border rounded p-2 my-1" id="stopAirports"> 
                        {stopAirports == 0 ? 
                            <div className="text-secondary text-center">no items </div>
                            :
                            <h1>FKJF</h1>
                        } 
                    </div>   
                </div>

                <div className="form-group d-flex w-100 my-1">
                    <div className="form-group w-50 me-1">
                        <label htmlFor="">price :</label>
                        <input type="text" placeholder="enter the price" name="" id="" className="form-control"/>
                    </div>
                    <div className="form-group w-50 ms-1">
                        <label htmlFor="">number of places : </label>
                        <input type="text" placeholder="enter the number of places"  className="form-control"/>
                    </div>
                </div>
                <button className="btn custom-btn-primary my-4 w-100">save now</button>
            </form>
        </div>
    )
}