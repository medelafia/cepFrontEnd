import { Outlet, useLocation } from "react-router-dom"

export default function ProvidersLayout(){
    const {pathname } =useLocation ; 
    return (
        <div>
            <header className="d-flex align-items-center custom-container py-5">
                <div>provider / {pathname}</div>
            </header>
            <Outlet /> 
        </div>
    )
}