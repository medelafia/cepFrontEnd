import image from "../assets/user.jpeg"
export default function CompanySetting() {
    return (
        <div  className="p-3">
            <form action="">
                <div className="form-group mb-3 d-flex align-items-center justify-content-center flex-column">
                    <img src={image} className="rounded-circle border mb-2"  alt="" style={{width : "200px" , height : "200px"}}/>
                    <button className="btn btn-outline-dark">edit</button>
                </div>
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