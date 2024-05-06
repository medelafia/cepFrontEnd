export default function DestinationsPage() {
    return(
        <div className="page">
            <div className="w-100 p-3 d-flex">
                <input type="text" placeholder="enter the destination name or description" className="form-control w-25 mx-1"/>
                <button className="btn custom-btn-secondary mx-1">search now</button>
            </div>
        </div>
    )
}