import { TextField } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { userSelector } from "../../store/selectors/userSelector";

export default function PasswordInfo() {
    const user = useSelector(userSelector)
    const currentPassword = useRef() 
    const newPassword = useRef() 
    const confirmNewPassword = useRef() 
    const [ errors , setErrors ] = useState({
        currentPasswordError : null , 
        newPasswordError : null  , 
        confirmNewPasswordError : null , 
        request : null
    })
    const changePassword = (e) => {
        e.preventDefault() ; 
        setErrors({ 
            confirmNewPasswordError : null , 
            currentPasswordError : null , 
            newPasswordError : null
        })
        const currentPasswordValue = currentPassword.current.value ; 
        const newPasswordValue = newPassword.current.value ; 
        const confirmPasswordValue = confirmNewPassword.current.value ; 
        if(currentPasswordValue.trim()!="" && newPasswordValue.trim() != "" && confirmPasswordValue.trim() != "") {
            if(newPasswordValue.length >= 8 ) {
                if(newPasswordValue === confirmPasswordValue) {
                    fetch("http://localhost:8089/accounts/changePassword" , {
                        method : "POST" , 
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body : JSON.stringify({
                            username : user.username , 
                            currentPassword : currentPasswordValue , 
                            newPassword : newPasswordValue 
                        })
                    })
                    .then(res => {
                        if(res.status != 200) setErrors(prevState => ({...prevState , request : "the password incorrect"}))
                        else {
                            Swal.fire({
                                icon : "success" , 
                                title : "success" , 
                                text : "your password was updated successfully" , 
                                timer : 2000
                            })
                        }
                    })
                }else {
                    setErrors(prevState => ({ ...prevState , confirmNewPasswordError : "the password most be identics"}))
                }
            }else {
                setErrors(prevState => ({...prevState , newPasswordError : "the password most be great than 8 letters"}))
            }
        }
    }
    return (
        <div className="">
            { errors.request != null && <div className="alert alert-danger alert-dismissible">
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                <span>{errors.request}</span>
            </div>}
            <form action="">
                <div className="form-group my-2">
                    <TextField label="current password" fullWidth inputRef={currentPassword}/> 
                </div>
                <div className="form-group my-2">
                    <TextField label="new password" fullWidth inputRef={newPassword} error={errors.newPasswordError != null} helperText={errors.newPasswordError}/>
                </div>
                <div className="form-group my-2">
                    <TextField label="confirm the new password" error={errors.confirmNewPasswordError != null} helperText={errors.confirmNewPasswordError} fullWidth inputRef={confirmNewPassword} />
                </div>
                <button className="btn custom-btn-primary my-3 w-100" onClick={changePassword}>change now</button>
            </form>
        </div>
    )
}