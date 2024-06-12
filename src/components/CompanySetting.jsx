export default function CompanySetting() {
    return (
        <div  className="p-3">
            <form action="">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="enter the name of company" />
                </div>
                <div className="form-group">
                    
                </div>
                <div className="d-flex align-items-center justify-content-end my-3">
                    <button className="btn custom-btn-outlined-primary me-2">reset</button>
                    <button className="btn custom-btn-primary ms-2">save </button>
                </div>
            </form>
        </div>
    )
}