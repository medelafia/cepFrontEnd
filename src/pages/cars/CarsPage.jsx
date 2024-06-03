import { useEffect, useState } from "react";
import Car from "../../components/Car";
import FilterCell from "../../components/FilterCell";
import ShowMore from "../../components/ShowMore";

export default function Cars() {
    const [cars , setCars] = useState([
        {name : "toyota" , type : "manuel"} , 
        {name : "toyota" , type : "manuel"} , 
        {name : "toyota" , type : "manuel"} , 
        {name : "toyota" , type : "manuel"} , 
        {name : "toyota" , type : "manuel"} 
    ])
    const displayCars = () => {
        return cars.map((car , index) => <Car key={index}/>)
    }
    useEffect(()=>{
        console.log(displayCars)
    } , []) 
    return (  
        <div className="page p-2">
            <div className="w-100"> 

            </div>
            <div className="row w-100">
                <div className="col-sm-4 p-5 d-flex flex-column">
                    <div className="">
                        <FilterCell filterTitle="car style" filterValues={["suv" , "mini"]}/>
                        <hr />
                        <FilterCell filterTitle="car marque" filterValues={["toyota" , "mercedes"]}/>
                        <hr />
                        <FilterCell /> 
                        <hr />
                        <FilterCell /> 
                    </div>
                </div>
                <div className="col-sm-8">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="text-capitalize">{cars.length} car</div>
                        <div className="d-flex align-items-center">
                            <div className="me-2">sort by</div>
                            <select name="" id="sort" className="form-select">
                                <option>recommended</option>
                                <option>min price</option>
                            </select>
                        </div>
                    </div>
                    {displayCars()}
                    <ShowMore callBack={console.log("show more cars")}/>
                </div>
            </div>
        </div> 
    )
}