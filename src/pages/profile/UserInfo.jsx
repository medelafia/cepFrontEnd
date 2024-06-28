import { useSelect } from "@mui/base"
import { FitScreen } from "@mui/icons-material"
import { useRef } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"
import image from "../../assets/user.jpeg"
import ProfileImage from "../../components/ProfileImage"
import { update } from "../../features/userSlice"
import { useFetch } from "../../hooks/custom-hooks"
import { userSelector } from "../../store/selectors/userSelector"
export default function UserInfo() {
    const user = useSelector(userSelector) ; 
    const profileImage = useRef() 
    const firstName = useRef(user?.firstName) 
    const lastName = useRef() 
    const age = useRef(user?.age) 
    const country = useRef(user?.country) 
    const gender = useRef(user?.gender)
    const dispatch = useDispatch()
    const updateProfile = () => {
        profileImage.current.click()
        profileImage.current.addEventListener("change" , (e) => {
            const url = URL.createObjectURL(profileImage.current.files[0])
            document.getElementById("profile").setAttribute("src" , url)
        })
    }
    const submit = () => {
        const firstNameValue = firstName.current.value 
        const lastNameValue = lastName.current.value 
        const ageValue = age.current.value 
        const genderValue = gender.current.value 
        if(firstNameValue != "" && lastNameValue != "" && ageValue != "" && genderValue != "") {
            fetch("http://localhost:8089/costumer/"+user.id + "/update" , {
                method : "POST" ,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({
                    "firstName" : firstNameValue , 
                    "lastName" : lastNameValue , 
                    "gender" : genderValue , 
                    "age" : Number.parseInt(ageValue) 
                })
            })
            .then(res =>{
                if(res.status ==200) {
                    return res.json()
                }else {
                    Swal.fire({
                        icon : "error"  
                        , title : "error since update try it again" , 
                        timer : 2000
                    })
                }
            })
            .then(data => {
                if(data != null ){
                    Swal.fire({
                        icon : "success" ,
                        title : "your information was updated succesfully" , 
                        timer : 2000
                    })
                    dispatch(update(
                    [
                        {item : "firstName" , value : data.firstName},
                        { item : "lastName" , value : data.lastName } ,
                        { item : "age" , value : data.age} , 
                        { item : "gender" , value : data.gender }
                    ]))
                }
            })
        }
    }
    return (
        <div className="d-flex align-items-center justify-content-center flex-column w-100">
            <ProfileImage currentImage={user.profileImage?.url == null ? image :  user.profileImage.url} changingUrl={"http://localhost:8089/costumer/"+user.id +"/changeProfileImage"}/> 
            <div className="form-group d-flex w-100">

                <div className="w-100 me-3">
                    <label htmlFor="firstName" className="text-secondary text-capitalize mb-1">first name</label>
                    <input type="text" id="firstName" className="form-control" placeholder="first name" ref={firstName} defaultValue={user?.firstName}/>
                </div>
                <div className="w-100 ms-3">
                    <label htmlFor="lastName" className="text-secondary text-capitalize mb-1">last name</label>
                    <input type="text" id="lastName" className="form-control" placeholder="last name" ref={lastName} defaultValue={user?.lastName}/>
                </div>
            </div>
            <div className="form-group w-100 my-2">
                <label htmlFor="country" className="text-secondary text-capitalize mb-1">country</label>
                <input type="text" name="" id="country" placeholder="country" className="form-select" ref={country} defaultValue={user?.country}/>
            </div>
            <div className="form-group d-flex w-100">
                <div className="w-100 me-3">
                    <label htmlFor="age" className="text-secondary text-capitalize mb-1">age</label>
                    <input type="number" id="age" className="form-control" placeholder="age" ref={age} defaultValue={user?.age}/>
                </div>
                <div className="w-100 ms-3">
                    <label htmlFor="gender" className="text-secondary text-capitalize mb-1">gender</label>
                    <select id="gender" className="form-select" ref={gender} defaultValue={user?.gender}>
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
                <button className="btn custom-btn-primary mx-2" onClick={submit}>save</button>
            </div>
        </div>
    )
}