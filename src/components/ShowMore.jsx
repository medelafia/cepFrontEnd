
export default function ShowMore({callBack}) {
    return(
        <div className="d-flex align-items-center justify-content-center py-3">
            <button className="btn custom-btn-primary" onClick={callBack}>show more</button>
        </div>
    )
}