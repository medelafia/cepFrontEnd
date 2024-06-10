import { useRef } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/selectors/userSelector";

export default function PasswordInfo() {
    const user = useSelector(userSelector)
    const currentPassword = useRef() 
    const newPassword = useRef() 
    const confirmNewPassword = useRef() 
    const changePassword = (e) => {
        e.preventDefault() ; 
        const currentPasswordValue = currentPassword.current.value ; 
        const newPasswordValue = newPassword.current.value ; 
        const confirmPasswordValue = confirmNewPassword.current.value ; 
        if(currentPasswordValue.trim()!="" && newPasswordValue.trim() != "" && confirmPasswordValue.trim() != "") {
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
            }
        }else {
            
        }
    }
    return (
        <div className="">
            <h3 className="text-center text-capitalize custom-text-primary">change password</h3>
            <form action="">
                <div className="form-group my-1">
                    <label htmlFor="currentPassword" className="my-1">current password</label>
                    <input type="password" placeholder="enter the current password" className="form-control" ref={currentPassword}/>
                </div>
                <div className="form-group my-1">
                    <label htmlFor="newPassword" className="my-1">new password</label>
                    <input type="password" placeholder="enter the new password" className="form-control" ref={newPassword}/>
                </div>
                <div className="form-group my-1">
                    <label htmlFor="confirmNewPassword" className="my-1">confirm password</label>
                    <input type="password" placeholder="confirme the new password" className="form-control" ref={confirmNewPassword}/>
                </div>
                <button className="btn custom-btn-primary my-3 w-100" onClick={changePassword}>change now</button>
            </form>
        </div>
    )
}