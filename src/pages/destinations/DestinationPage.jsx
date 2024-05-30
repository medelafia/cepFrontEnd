import { handleBreakpoints } from "@mui/system";
import { useState } from "react";
import { useParams } from "react-router-dom";
import image from "../../assets/jamaaElFna.jpeg" ; 
import Hotel from "../../components/Hotel";
export default function DestinationPage() {
    const [showFullDesc , setShowFullDesc] = useState(false) ; 
    const description = "Jemaa el-Fnaa is a square and market place in Marrakesh's medina quarter \
    It remains the main square of Marrakesh, used by locals and tourists." ; 
    const {id} = useParams() 
    const changeShowFullDesc = () => {
        setShowFullDesc(!showFullDesc) ; 
    }
    return (
        <div className="custom-container">
            <div className="d-flex align-items-center justify-content-start p-2 text-secondary">
                country / city 
            </div>
            <img src={image} alt="" className="rounded" style={{width : "100%" , height : "500px"}}/>
            <div className="py-4">
                <h3 className="text-capitalize custom-text-secondary">
                    jamae el fenna id={id}
                </h3>
                <div>
                    <strong>Description : </strong>
                    {showFullDesc ? description : description.substring(0 , 100).concat(" ...")}
                    <div className="d-inline cursor-pointer text-decoration-underline text-secondary" onClick={changeShowFullDesc}>
                        show {showFullDesc ? "less" : "more"} {showFullDesc ? <i class="fa-solid fa-chevron-up"></i>  : <i class="fa-solid fa-chevron-down"></i>} 
                    </div>
                </div>
            </div>
            <hr />
            <div className="py-4">
                <div className="d-flex align-items-center justify-content-between">
                    <h3 className="text-capitalize">nearby hotels</h3>
                    <div className="cursor-pointer text-decoration-underline">see all</div>
                </div>
                <div className="row py-2">
                        <div className="col-md-4">
                            <Hotel /> 
                        </div>
                        <div className="col-md-4">
                            <Hotel /> 
                        </div>
                        <div className="col-md-4">
                            <Hotel /> 
                        </div>
                    </div>
            </div>
        </div>
    )
}