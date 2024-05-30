export default function SignUserInfo() {
    return (
        <div> 
        <h5 className="text-capitalize text-center custom-text-primary mb-5">informations</h5>
        <div className="form-group my-3 d-flex align-items-center justify-content-between">
            <input type="text" className="form-control" id="username" placeholder="enter the username"/>
        </div>
        <div className="form-group my-3 d-flex align-items-center justify-content-between">
            <div className="form-group me-2">
                <input type="text" className="form-control" id="password" placeholder="enter the password"/>
            </div>
            <div className="form-group ms-2">
                <input type="text" className="form-control" id="password" placeholder="coenter the password"/>
            </div>
        </div>
        <div className="form-group my-3">
            <input type="email" className="form-control" id="email"placeholder="enter your email"/>
        </div>
        <div className="form-group my-3">
            <input type="text" className="form-control" placeholder="enter the number phone"/>
        </div>
        <div className="form-group my-3">
            <select name="" id="" className="form-select text-secondary">
                <option value="">costumer</option>
                <option value="">provider</option>
            </select>
        </div>
    </div> 
    )
}