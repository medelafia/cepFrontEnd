import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { userSelector } from "../../store/selectors/userSelector"

export default function AccountInfo() {
    const user = useSelector(userSelector)
    return (
        <div className="d-flex align-items-start justify-content-center flex-column w-100">
            <div className="form-group d-flex w-100">
                <div className="w-100 me-3">
                    <label htmlFor="username" className="text-secondary text-capitalize mb-1">username</label>
                    <input type="text" id="username" className="form-control" placeholder="username" defaultValue={user?.username}/>
                </div>
                <div className="w-100 ms-3">
                    <label htmlFor="password" className="text-secondary text-capitalize mb-1">password</label>
                    <div className="d-flex">
                        <input type="password" id="password" className="form-control" placeholder="password" defaultValue={"password"} disabled/>
                        <button className="btn custom-btn-secondary ms-2"><Link to="/profile/passwordChange"><i class="fa-solid fa-pen-to-square"></i></Link></button>
                    </div>
                </div>
            </div>
            <div className="form-group w-100 my-2">
                <label htmlFor="email" className="text-secondary text-capitalize mb-1">email</label>
                <input type="email" name="" id="email" placeholder="email" className="form-control" defaultValue={user?.email}/>
            </div>
            <div className="form-group my-2 w-100">
                <label htmlFor="tel" className="text-secondary text-capitalize mb-1">number phone</label>
                <input type="tel" name="" id="tel" placeholder="phone number" className="form-control" defaultValue={user?.tel}/>
            </div>
            <div className="d-flex align-items-center justify-content-end w-100 my-3">
                <button className="btn custom-btn-outlined-primary mx-2">reset</button>
                <button className="btn custom-btn-primary mx-2">save</button>
            </div>
        </div>
    )
}