export default function IndexBox({title , count , style,  children }) {
    return (<div className="col-sm-3">
        <div className="text-white container bg-danger p-5 rounded d-flex align-items-center align-items-between" style={style}>
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