import { TextField } from "@mui/material"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { userSelector } from "../../store/selectors/userSelector"

export default function AccountInfo({changePasswordPath}) {
    const user = useSelector(userSelector)
    return (
        <div className="d-flex align-items-start justify-content-center flex-column w-100">
            <div className="form-group d-flex w-100 my-3">
                <div className="w-50 me-3">
                    <TextField fullWidth id="standard-basic" label="username" variant="standard" defaultValue={user?.username}/>
                </div>
                <div className="w-50 ms-3 d-flex align-items-center">
                    <TextField fullWidth label="password" variant="standard" defaultValue="passwordhidden" disabled/>
                    <button className="btn custom-btn-secondary ms-2"><Link to={changePasswordPath} className="text-white"><i class="fa-solid fa-pen-to-square"></i></Link></button>
                </div>
            </div>
            <div className="form-group w-100 my-3">
                <TextField fullWidth label="email" variant="standard" type="email" defaultValue={user.email} />
            </div>
            <div className="form-group my-3 w-100">
                <TextField fullWidth label="number phone" variant="standard" type="tel" defaultValue={user.tel }/>
            </div>
            <div className="d-flex align-items-center justify-content-end w-100 my-3">
                <button className="btn custom-btn-outlined-primary mx-2">reset</button>
                <button className="btn custom-btn-primary mx-2">save</button>
            </div>
        </div>
    )
}