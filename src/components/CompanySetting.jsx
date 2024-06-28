import { TextField } from "@mui/material"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import image from "../assets/user.jpeg"
import { userSelector } from "../store/selectors/userSelector"
import ProfileImage from "./ProfileImage"
import {update} from "../features/userSlice"
export default function CompanySetting() {
    const user = useSelector(userSelector) 
    const nameOfCompanyRef = useRef() 
    const faxRef = useRef() 
    const webSiteUrlRef = useRef( )
    const addressRef = useRef() 
    const dispatch = useDispatch() 
    const updateInfo = (e) => {
        e.preventDefault() 
        fetch(`http://localhost:8089/provider/${user.id}/update` , {
            method : "POST" , 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }, 
            body : JSON.stringify({
                name : nameOfCompanyRef.current.value , 
                webSite : webSiteUrlRef.current.value , 
                fax : faxRef.current.value , 
                address : addressRef.current.value  
            })
        }).then(res => {
            if(res.status == 200) {
                return res.json()
            }
        }).then(data => {
            console.log(data)
            dispatch(update([
                { item : "fax" , value : data.fax} , 
                {item : "webSiteUrl", value : data.webSiteUrl} , 
                {item  : "physicalAddress" ,value  : data.physicalAddress},
                { item  : "name" , value : data.name}]))
            Swal.fire({
                icon : "success" , 
                timer : 2000 , 
                title : "the provider information updated successfuly"
            })
        })
    }
    return (
        <div  className="w-100">
            <form className="d-flex align-items-center justify-content-center flex-column w-100">
                <ProfileImage currentImage={user.logo == null ? image :  user.logo.url} changingUrl={"http://localhost:8089/provider/"+user.id +"/changeLogo"}/> 
                <div className="form-group my-2 w-100">
                    <TextField label="name of company" fullWidth inputRef={nameOfCompanyRef} defaultValue={user.name}/>
                </div>
                <div className="form-group row w-100">
                    <TextField label="fax" className="col-sm-12 col-lg-6 my-2 " fullWidth inputRef={faxRef} defaultValue={user.fax}/> 
                    <TextField label="web site url" className="col-sm-12 col-lg-6 my-2 " fullWidth inputRef={webSiteUrlRef} defaultValue={user.webSiteUrl}/>
                </div>
                <div className="form-group my-2 w-100">
                    <TextField  label="physical address" fullWidth inputRef={addressRef} defaultValue={user.physicalAddress}/>
                </div>
                <div className="w-100 d-flex align-items-center justify-content-end my-3">
                    <button className="btn custom-btn-outlined-primary me-2" type="reset">reset</button>
                    <button className="btn custom-btn-primary ms-2" onClick={updateInfo}>save </button>
                </div>
            </form>
        </div>
    )
}