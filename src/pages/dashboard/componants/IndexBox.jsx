export default function IndexBox({title , count , bgColor,  children }) {
    return (<div className="col-sm-12 col-md-6 col-lg-4 mb-2">
        <div className="text-white container p-5 rounded d-flex align-items-center align-items-between" style={{backgroundColor : bgColor}}>
            <div className="rounded-circle" style={{width : "40px" , height : "40px"}}>
                {children}
            </div>
            <div className="ms-3">
                <h3 className="bold">{count}</h3>
                <div>{title}</div>
            </div>
        </div>  
    </div>)
} 