import { useEffect, useRef, useState } from "react"
import SignCompanyInfo from "../../components/SignCompanyInfo";
import SignCostumerInfo from "../../components/SignCostumerInfo"
import SignAccountInfo  from "../../components/SignAccountInfo";
import { useDispatch } from "react-redux";
import {login} from "../../features/userSlice"
import { Step, StepLabel, Stepper } from "@mui/material";

export default function SignUp() {
    const [step , setStep] = useState(0) ;
    const steps = ["account info" , "user info" , "confirmation"]
    const dispatch = useDispatch()
    const intialState = {
        username : null , 
        password : null , 
        email : null , 
        accountType : "COSTUMER" , 
        tel : null , 
        registerByGoogle : false , 
        registerByFacebook : false , 
        emailVerified : false 
    }
    const [info , setInfo] = useState(intialState)
    const [ accountCreated , setAccountCreated ] = useState(false)
    const updateItem = (key , value) => {
        setInfo(prev => ({
            ...prev , 
            [key] : value
        }))
    }
    const next = () => {
        if(step < steps.length) {
            setStep(step + 1)
        }else {
            fetch("http://localhost:8089/".concat(info.accountType.toLowerCase()).concat("/register").concat(info?.accountType == "PROVIDER" ? "/".concat(info?.providerType) : "") , {
                method : "POST" ,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(info) 
            })
            .then(res => res.json())
            .then(data => {
                setAccountCreated(true)
                dispatch(login(data)) 
            })
        }
    }
    const prev = () =>{
        if(step >= 1) setStep(step - 1)
    }
    useEffect( ()=> {
        console.log(info)
    } , [info])
    const register = () => {
        fetch("http://localhost:8089/"+info.accountType.toLowerCase()+"/register" , {
            method : "post"  , 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },  
            body : JSON.stringify(info)
        })
        .then(res => {
            if(res.status == 200){
                
            } 
        })
    }
    return (
        <div className="row w-100" style={{ height : "100vh"}}> 
            <div className="col-lg-4 bg-dark h-100">
                jj
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
                {
                    accountCreated ?
                        <div className="p-5">
                            <h1>account created</h1>
                        </div>
                    :
                    <>
                    {step == 0 && <SignAccountInfo currentInfo={info} onChangeFunction={updateItem} next={next}/> }
                    { step == 1 && info.accountType == "COSTUMER" && <SignCostumerInfo onChangeFunction={updateItem}/> }
                    { step == 1 && info.accountType == "PROVIDER" && <SignCompanyInfo onChangeFunction={updateItem}/> }
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
                    </>
                }
            </div>
        </div> 
    )
}