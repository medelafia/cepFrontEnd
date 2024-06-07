import { useState } from "react";
import AddDataHeader from "../../components/AddDataHeader";
import CurrentPath from "../../components/CurrentPath";

export default function AddCar() {
    const [ step , setStep ] = useState(1) ; 
    return (
    <div>
        <div className="custom-container py-5">
            <CurrentPath />
            <AddDataHeader title="add car"/>
            <form >
                
                <div className="form-group my-1">
                    <label htmlFor="">car name</label>
                    <input type="text" name="" placeholder="enter the car name" id="" className="form-control"/>
                </div>
                <div className="form-group my-1">
                    <label htmlFor="">car type</label>
                    <select name="" id="" className="form-select">
                        <option value=""></option>
                    </select>
                </div>
                <div className="form-group my-1 d-flex w-100">
                    <div className="form-group w-50 me-1">
                        <label htmlFor="">car make</label>
                        <select name="" id="" className="form-select">
                            <option value=""></option>
                        </select>
                    </div>
                    <div className="form-group w-50 ms-1">
                        <label htmlFor="">car model</label>
                        <input type="text" name="" id="" placeholder="enter the car model" className="form-control"/>
                    </div>
                </div>
                <div className="form-group my-1">
                    <label htmlFor="">car model</label>
                    <input type="text" name="" id="" placeholder="enter the car model" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">car color</label>
                    <input type="text" name="" placeholder="enter the car color" className="form-control" id="" />
                </div>
                <div className="form-group d-flex w-100 my-2 justify-content-between">
                    <div className="form-group" style={{width : "30%"}}>
                        <label htmlFor="">car style</label>
                        <select name="" className="form-select" id=""></select>
                    </div>
                    <div className="form-group" style={{width : "30%"}}>
                        <label htmlFor="">transsmition type : </label>
                        <select name="" className="form-select" id=""></select>
                    </div>
                    <div className="form-group" style={{width : "30%"}}>
                        <label htmlFor="">fuel type : </label>
                        <select name="" className="form-select" id=""></select>
                    </div>
                </div>
            </form>
            <button className="btn custom-btn-primary w-100 my-3">add car</button>
        </div>
    </div>
    )
}