import { useNavigate } from "react-router-dom"
import './errorsPages.css'

export default function ErrorPage({status}) {
    const navigate = useNavigate() 
    const backToHome = () => {
        navigate("/")
    }
    return (
        <div className="d-flex align-items-start justify-content-center page flex-column p-5">
            <p className="text-danger status">{status}</p>
            <h1>{status == 404 ? "page not found" : "page not authorized"}</h1>
            <button className="btn custom-btn-secondary" onClick={backToHome}>back to home</button>
        </div>
    )
}