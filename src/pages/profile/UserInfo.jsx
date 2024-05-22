import image from "../../assets/royalAir.png"
export default function UserInfo() {
    return (
        <div className="d-flex align-items-start justify-content-center flex-column w-100">
            <div className="d-flex align-items-center justify-content-center flex-column w-100 p-3">
                <img className="border" src={image} alt="" style={{width:"100px" , height : "100px" , borderRadius : "50%" }}/>
                <div className="d-flex my-2">
                    <button className="btn custom-btn-secondary mx-2">update</button>
                    <button className="btn btn-danger mx-2">delete</button>
                </div>
            </div>
            <div className="form-group d-flex w-100">
                <div className="w-100 me-3">
                    <label htmlFor="firstName" className="text-secondary text-capitalize mb-1">first name</label>
                    <input type="text" id="firstName" className="form-control" placeholder="first name"/>
                </div>
                <div className="w-100 ms-3">
                    <label htmlFor="lastName" className="text-secondary text-capitalize mb-1">last name</label>
                    <input type="text" id="lastName" className="form-control" placeholder="last name"/>
                </div>
            </div>
            <div className="form-group w-100 my-2">
                <label htmlFor="country" className="text-secondary text-capitalize mb-1">country</label>
                <input type="text" name="" id="country" placeholder="country" className="form-select"/>
            </div>
            <div className="form-group d-flex w-100">
                <div className="w-100 me-3">
                    <label htmlFor="age" className="text-secondary text-capitalize mb-1">age</label>
                    <input type="number" id="age" className="form-control" placeholder="age"/>
                </div>
                <div className="w-100 ms-3">
                    <label htmlFor="gender" className="text-secondary text-capitalize mb-1">gender</label>
                    <select id="gender" className="form-select" >
                        <option value="">male</option>
                        <option value="">female</option>
                    </select>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-end w-100 my-3">
                <button className="btn custom-btn-outlined-primary mx-2">reset</button>
                <button className="btn custom-btn-primary mx-2">save</button>
            </div>
        </div>
    )
}