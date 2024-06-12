import { useState } from "react"
import { useNavigate } from "react-router-dom"
import image from "../../assets/cart.png"

export default function Card() {
    const [items , setItems] = useState([]) 
    const navigate = useNavigate()
    return (
        <div className="page">
            <div className="custom-container py-5 d-flex align-items-center justify-content-center h-100 flex-column">
                { 
                    items.length == 0 
                    ? <>
                            <img src={image} className="my-2"/> 
                            <h1 className="text-capitalize custom-text-primary">the cart is empty !</h1>
                            <button onClick={()=>{navigate("/offers/hotels")}} className="btn custom-btn-outlined-primary rounded-pill">book now ! </button>
                        </>
                    : 
                    <div>
                    </div> 
                }
            </div>
        </div>
    )
}