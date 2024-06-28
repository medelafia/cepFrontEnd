import { useEffect, useRef, useState } from "react"
import SignCompanyInfo from "../../components/SignCompanyInfo";
import SignCostumerInfo from "../../components/SignCostumerInfo"
import SignAccountInfo  from "../../components/SignAccountInfo";
import { useDispatch } from "react-redux";
import {login} from "../../features/userSlice"
import { Step, StepLabel, Stepper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function SignUp() {
    const [step , setStep] = useState(0) ;
    const steps = ["account info" , "user info" , "confirmation"]
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const intialState = {
        username : null , 
        password : null , 
        email : null , 
        accountType : "COSTUMER" , 
        tel : null , 
        registerByGoogle : false , 
        registerByFacebook : false , 
        emailVerified : false ,  

    }
    const [ errors , setErrors ] = useState({})
    const [info , setInfo] = useState(intialState)
    const updateItem = (key , value) => {
        setInfo(prev => ({
            ...prev , 
            [key] : value
        }))
    }
    const next = () => {
        if(step < steps.length) {
            setStep(step + 1)
        }
    }
    const prev = () =>{
        if(step >= 1) setStep(step - 1)
    }
    const formValid = () => {
        if(errors == {}) return true 
        else {
            Object.entries(errors).forEach(elem => {
                if (elem[1] != null)  return false 
            })
        }
    }
    useEffect(()=>{
        console.log(formValid())
    },[errors])
    const register = () => {
        fetch(`http://localhost:8089/${info.accountType.toLowerCase()}/register${info.accountType == "PROVIDER" ? `/${info.providerType}` : "" }` , {
            method : "post"  , 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },  
            body : JSON.stringify({...info , providerType : null})
        })
        .then(res => {
            if(res.status == 200){
                return res.json()
            } else {
                Swal.fire({
                    icon : "error" , 
                    title : "error in the account creation" , 
                    timer : 2000 , 
                }) 
            }
        })
        .then(data => {
            if(data != null ){ 
            Swal.fire({
                icon : "success" , 
                title : "the account created successfully" , 
                timer : 2000 , 
            }) 
            navigate("/") 
            dispatch(login(data))
        }} )
    }
    return (
        <div className="row w-100" style={{ height : "100vh"}}> 
            <div className="col-lg-4 bg-dark h-100">
            </div>
            <div  className="p-5 col-lg-8 col-sm-12 my-3">
                <h1 className="text-capitalize custom-text-primary text-center ">
                  travelboot registration
                </h1>
                <div className="px-5 my-5">
                <Stepper activeStep={step}>
                    {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                    ))}
                </Stepper>
                </div>
                    {step == 0 && <SignAccountInfo errors={errors} setErrors={setErrors} currentInfo={info} onChangeFunction={updateItem} next={next}/> }
                    { step == 1 && info.accountType == "COSTUMER" &&
                     <SignCostumerInfo currentInfo={info} onChangeFunction={updateItem} /> }
                    { step == 1 && info.accountType == "PROVIDER" && <SignCompanyInfo onChangeFunction={updateItem} currentInfo={info} /> }
                    { step != 2 ? <div className="d-flex align-items-center justify-content-end my-3">
                        <button className="btn custom-btn-outlined-primary me-2 px-4" onClick={prev}>prev</button>
                        <button className="btn custom-btn-primary ms-2 px-4" onClick={next}>next</button>
                    </div> 
                    :  
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <h3 className="text-capitalize">confirm your information</h3>
                        <div className="d-flex align-items-center justify-content-between my-5">
                            <button className="btn custom-btn-outlined-primary  px-5 me-3" onClick={prev}>prev</button>
                            <button className="btn custom-btn-primary px-5 ms-3" onClick={register}>confirm</button>
                        </div>
                    </div>
                    }
            </div>
        </div> 
    )
}