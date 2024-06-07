import { useNavigate } from "react-router-dom"
import './errorsPages.css'

export default function ErrorPage({status}) {
    const navigate = useNavigate() 
    const backToHome = () => {
        navigate("/")
    }
    const backToPrevPage = () => {
        navigate(-1) ; 
    }
    return ( 
        <div className="d-flex align-items-start justify-content-center page flex-column p-5">
            <p className="text-danger status">{status}</p>
            <h1>{status == 404 ? "page not found" : "page not authorized"}</h1>
            <div className="w-100 d-flex">
                <button className="btn custom-btn-secondary me-2" onClick={backToHome}>back to home</button>
                <button className="btn btn-outline-dark ms-3" onClick={backToPrevPage}>back to previous page</button>
            </div>
        </div>
    )
}