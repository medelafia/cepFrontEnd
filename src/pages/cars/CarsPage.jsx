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
    const [showFilter , setShowFilter ] = useState(false) ; 
    return (  
        <div className="page p-2">
            <div className="w-100"> 

            </div>
            <div className="row w-100">
                <div className="col-sm-12">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="text-capitalize">{cars.length} car</div>
                        <div className="d-flex align-items-center">
                            <button className="btn border mx-2 d-flex align-items-center" onClick={()=>{setShowFilter(!showFilter)}}>
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
                    <div className="row">
                        {displayCars()}
                    </div>
                    <ShowMore callBack={console.log("show more cars")}/>
                </div>
            </div>
        </div> 
    )
}