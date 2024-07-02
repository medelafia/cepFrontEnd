import { Link } from "react-router-dom";

export default function ServiceBox({ title , text , to , circleColor , children}) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 my-2">
            <div className="container rounded border py-5 d-flex align-items-center justify-content-center flex-column">
                <div className="d-flex align-items-center justify-content-center p-4 rounded-circle" style={{fontSize : "2.2rem" , backgroundColor : "#" + circleColor }}>
                    {children}
                </div>
                <div className="mt-3">
                    <h3 className="text-center text-capitalize" style={{letterSpacing : "1px"}}>{title}</h3>
                    <p className="text-center text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                </div>
                <Link to={to} >explore</Link> 
            </div>
        </div>
    )
}