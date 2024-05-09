import Destination from "../../components/Destination";

export default function DestinationsPage() {
    return(
        <div className="page">
            <div className="w-100 p-3 d-flex">
                <input type="text" placeholder="enter the destination name or description" className="form-control w-25 mx-1"/>
                <button className="btn custom-btn-secondary mx-1">search now</button>
            </div>
            <div className="row w-100">
               <div className="col-lg-4">

               </div>
               <div className="col-lg-8 row p-3">
                    <Destination />
                    <Destination /> 
                    <Destination />
                    <Destination />
                    <Destination /> 
                    <Destination />
                    <Destination />
                    <Destination /> 
                    <Destination />
                    <div className="col-lg-12 d-flex align-items-center justify-content-center w-100">
                        <div className="btn custom-btn-primary mx-2">prev</div>
                        <div className="btn custom-btn-third mx-2">1</div>
                        <div className="btn custom-btn-primary mx-2">next</div>
                    </div>
               </div> 
            </div>
        </div>
    )
}