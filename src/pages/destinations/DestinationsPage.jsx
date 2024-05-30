import Destination from "../../components/Destination";
import FilterCell from "../../components/FilterCell";

export default function DestinationsPage() {
    return(
        <div className="page">
            <div className="w-100 d-flex">
                <input type="text" placeholder="enter the destination name or description" className="form-control w-25 mx-1"/>
                <button className="btn custom-btn-secondary mx-1">search now</button>
            </div>
            <div className="row w-100">
               <div className="col-lg-4 py-5 d-flex flex-column">
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
               <div className="col-lg-8 row p-3">
                    <div className="col-lg-12 d-flex align-items-center justify-content-between w-100 p-3">
                        <div>
                            100 destination
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <span>sort by</span>
                            <select name="" id="" className="form-select">
                                <option value="">recommended</option>
                                <option value="">most </option>
                            </select>
                        </div>
                    </div>
                    <Destination />
                    <Destination /> 
                    <Destination />
                    <Destination />
                    <Destination /> 
                    <Destination />
                    <Destination />
                    <Destination /> 
                    <Destination />
                    <div className="col-lg-12 d-flex align-items-center justify-content-center w-100 p-1">
                        <button className="btn custom-btn-secondary">show more</button>
                    </div>
               </div> 
            </div>
        </div>
    )
}