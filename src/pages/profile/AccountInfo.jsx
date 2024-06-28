import { TextField } from "@mui/material"
import { useReducedMotion } from "framer-motion"
import { useState } from "react"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useFetcher } from "react-router-dom"
import { useFetch } from "../../hooks/custom-hooks"
import { userSelector } from "../../store/selectors/userSelector"
import {login} from "../../features/userSlice"
import Swal from "sweetalert2"

export default function AccountInfo({changePasswordPath}) {
    const usernameRef = useRef() 
    const user = useSelector(userSelector)
    const telRef = useRef() 
    const emailRef = useRef() 
    const dispatch = useDispatch()
    const [ errors , setErrors] = useState({
        username : null , 
        email : null  , 
        tel : null  
    })
    const updateAccountInfo = () => {
        const telValue = telRef.current.value 
        const username = usernameRef.current.value 
        const emailValue = emailRef.current.value 
        if( telValue.trim() != "" && username.trim() != "" && emailValue.trim() != "") {
            fetch("http://localhost:8089/accounts/"+ user.id +"/update" , {
                method : "POST" , 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },   
                body : JSON.stringify({
                    username : username , 
                    email : emailValue  , 
                    tel : telValue 
                })
            })
            .then(res =>{
                if(res.status == 200) {
                    return res.json() 
                }
            }) 
            .then(data => {
                Swal.fire({ 
                    icon : "success" , 
                    title : "update success" , 
                    text : "your information was updated successfully"  , 
                    timer : 2000   
                })
                dispatch(login(data))
            })
        }
    }
    return (
        <div className="d-flex align-items-start justify-content-center flex-column w-100">
            <div className="form-group row w-100 my-3">
                <div className="col-sm-12 col-lg-6 my-3 ">
                    <TextField fullWidth id="standard-basic" label="username" inputRef={usernameRef}  defaultValue={user?.username}/>
                </div>
                <div className="col-sm-12 col-lg-6 d-flex align-items-center my-3">
                    <TextField fullWidth label="password"  defaultValue="passwordhidden" disabled/>
                    <button className="btn btn-light ms-2"><Link to={changePasswordPath} className="text-dark"><i class="fa-solid fa-pen-to-square"></i></Link></button>
                </div>
            </div>
            <div className="form-group w-100 my-3 d-flex align-items-center justify-content-center">
                <TextField fullWidth label="email" inputRef={emailRef}  type="email" defaultValue={user.email} />
                { !user?.emailVerified && <button className="text-danger font-secondary btn">?</button>}
            </div>
            <div className="form-group my-3 w-100">
                <TextField fullWidth label="number phone" inputRef={telRef}  type="tel" defaultValue={user.tel }/>
            </div>
            <div className="d-flex align-items-center justify-content-end w-100 my-3">
                <button className="btn custom-btn-outlined-primary mx-2">reset</button>
                <button className="btn custom-btn-primary mx-2" onClick={updateAccountInfo}>save</button>
            </div>
        </div>
    )
}