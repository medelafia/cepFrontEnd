import CarProperty from "./CarProperty";
import image from "../assets/image.png"

export default function Car() {
    return (
        <div className="w-100 rounded my-4 p-2 bg-white border">
            <div className="d-flex align-items-start justify-content-center">
                <div className="w-50 p-2">
                    <h5 className="text-capitalize">car type</h5>
                    <div className="w-100" style={{height : "150px"}}>
                        <img src={image} style={{width : "70%" , height : "100%"}} alt="" />
                    </div>
                </div>
                <div className="w-25 p-2 d-flex align-items-start justify-content-start flex-column">
                    <CarProperty carPropertyName="seats"/> 
                    <CarProperty carPropertyName="seats"/> 
                    <CarProperty carPropertyName="seats"/> 
                </div>
                <div className="w-25 p-2 d-flex">
                    <div className="bg-light" style={{width : "1px" , height : "200px"}}>
                    </div>
                    <div className="d-flex align-items-center justify-content-around p-1 flex-column" style={{width : "calc(100% - 1px)"}}>
                        <div className="text-capitalize">free cancelation</div>
                        <button className="btn custom-btn-secondary">book now</button>
                    </div>
                </div>
            </div>
        </div>
    )
} 