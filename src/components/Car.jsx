import CarProperty from "./CarProperty";
import image from "../assets/image.png"

export default function Car() {
    return (
        <div className="col-lg-6 rounded my-4 p-2 bg-white">
            <div className="d-flex align-items-start justify-content-center row p-3 container border">
                <div className="col-md-6 col-sm-12 p-2">
                    <div className="text-secondary">car type</div>
                    <h4 className="text-capitalize">car name</h4>
                    <div className="w-100" style={{height : "150px"}}>
                        <img src={image} style={{width : "100%" , height : "100%"}} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 p-5 d-flex">
                    {/*<div className="bg-light" style={{width : "1px" , height : "200px"}}>
                    </div>*/}
                    <div className="d-flex align-items-center justify-content-around p-1 flex-column" style={{width : "calc(100% - 1px)"}}>
                        <div className="text-capitalize">free cancelation</div>
                        <div className="h1">300$</div>
                        <button className="btn custom-btn-secondary">book now</button>
                    </div>
                </div>
                <div className="col-md-12 col-sm-12 p-2 d-flex align-items-start justify-content-between">
                    <CarProperty carPropertyName="seats"/> 
                    <CarProperty carPropertyName="bags"/> 
                    <CarProperty carPropertyName="air"/> 
                    <CarProperty carPropertyName="fuel"/>
                </div>
            </div>
        </div>
    )
} 