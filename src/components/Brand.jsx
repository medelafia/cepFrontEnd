import { useNavigate } from "react-router-dom"

export default function Brand() {
    const navigate = useNavigate()
    return (
        <div className="custom-text-primary d-flex align-items-center" onClick={()=>{navigate("/")}}>
            <i className="fa-solid fa-plane plane m-1 font-secondary"></i>
            <h1 className="text-capitalize title">travelboot</h1>
        </div>
    )
}