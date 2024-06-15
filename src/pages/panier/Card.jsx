import { DataGrid } from "@mui/x-data-grid"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import image from "../../assets/cart.png"
import ShowMore from "../../components/ShowMore"
import Reservation from "./Reservation"

export default function Card() {
    const [reservations , setReservations] = useState(["","","" , "" , "" , ""]) 
    const navigate = useNavigate()
    const [nbReservationToShow , setNbReservationToShow ] = useState(5) 
    const renderReservation = () => {
        return reservations.slice(0 , nbReservationToShow).map((reservation , index ) => <Reservation />)
    }
    return (
        <div className="page">
            <div className="custom-container w-100 py-3 d-flex justify-content-center flex-column" style={{minHeight : "400px"}}>
                {
                    reservations.length == 0 ? 
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <img src={image} alt="" style={{width : "400px" , height : "400px"}}/>
                        <h3 className="text-capitalize custom-text-primary">reservation list is empty</h3>
                        <button className="btn custom-btn-outlined-primary rounded-pill" onClick={() => navigate("/offers/cars")}>book now</button>
                    </div>
                    : 
                    <>
                        <h3 className="text-capitalize mb-5">reservation list :</h3>
                        <div className="d-flex align-items-center justify-content-between px-5">
                            <h6>reservation nb</h6>
                            <h6>offer</h6>
                            <h6>persons</h6>
                            <h6>status</h6>
                            <h6>actions</h6>
                        </div>
                        {renderReservation()}
                        { nbReservationToShow < reservations.length &&<ShowMore callBack={()=>setNbReservationToShow(nbReservationToShow + 5)}/> }
                    </>
                
                }
            </div>
        </div>
    )
}