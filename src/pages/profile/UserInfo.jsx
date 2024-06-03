import { useSelect } from "@mui/base"
import { useRef } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import image from "../../assets/user.jpeg"
import { useFetch } from "../../hooks/custom-hooks"
import { userSelector } from "../../store/selectors/userSelector"
export default function UserInfo() {
    const user = useSelector(userSelector) ; 
    const profileImage = useRef() 
    const firstName = useRef(user?.userInfo.firstName) 
    const lastName = useRef() 
    const age = useRef(user?.userInfo.age) 
    const country = useRef(user?.userInfo.country) 
    const gender = useRef(user?.userInfo.gender)
    const updateProfile = () => {
        profileImage.current.click()
        profileImage.current.addEventListener("change" , (e) => {
            const url = URL.createObjectURL(profileImage.current.files[0])
            document.getElementById("profile").setAttribute("src" , url)
        })
    }
    return (
        <div className="d-flex align-items-center justify-content-center flex-column w-100">
            <div className="d-flex align-items-center justify-content-center flex-column position-relative mb-3" style={{width:"100px" , height : "100px" , borderRadius : "50%"}}>
                <img className="border" id="profile" src={image} alt="" style={{width:"100%" , height : "100%" , borderRadius : "50%" , backgroundSize : "cover" }} ref={profileImage}/>
                <button className="btn btn-secondary position-absolute end-0 bottom-0 d-flex align-items-center justify-content-center rounded-circle" onClick={updateProfile} style={{width : "25px" , height : "25px"}}><i style={{fontSize : "10px"}} class="fa-solid fa-pen"></i></button>
            </div>
            <div className="form-group d-flex w-100">
                <div className="w-100 me-3">
                    <label htmlFor="firstName" className="text-secondary text-capitalize mb-1">first name</label>
                    <input type="text" id="firstName" className="form-control" placeholder="first name" ref={firstName} defaultValue={user?.userInfo.firstName}/>
                </div>
                <div className="w-100 ms-3">
                    <label htmlFor="lastName" className="text-secondary text-capitalize mb-1">last name</label>
                    <input type="text" id="lastName" className="form-control" placeholder="last name" ref={lastName} defaultValue={user?.userInfo.lastName}/>
                </div>
            </div>
            <div className="form-group w-100 my-2">
                <label htmlFor="country" className="text-secondary text-capitalize mb-1">country</label>
                <input type="text" name="" id="country" placeholder="country" className="form-select" ref={country} defaultValue={user?.userInfo.country}/>
            </div>
            <div className="form-group d-flex w-100">
                <div className="w-100 me-3">
                    <label htmlFor="age" className="text-secondary text-capitalize mb-1">age</label>
                    <input type="number" id="age" className="form-control" placeholder="age" ref={age} defaultValue={user?.userInfo.age}/>
                </div>
                <div className="w-100 ms-3">
                    <label htmlFor="gender" className="text-secondary text-capitalize mb-1">gender</label>
                    <select id="gender" className="form-select" ref={gender} defaultValue={user?.userInfo.gender}>
                        <option value="m">male</option>
                        <option value="f">female</option>
                    </select>
                </div>
            </div>
            <div className="form-group w-100">
                <label htmlFor="" className="text-secondary text-capitalize mb-1">country</label>
                <select name="" id="" className="form-select">
                    <option value="">maroc</option>
                    <option value="">alger</option>
                </select>
            </div>
            <div className="d-flex align-items-center justify-content-end w-100 my-3">
                <button className="btn custom-btn-outlined-primary mx-2">reset</button>
                <button className="btn custom-btn-primary mx-2">save</button>
            </div>
        </div>
    )
}