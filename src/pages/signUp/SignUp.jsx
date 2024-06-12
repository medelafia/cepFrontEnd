import { useEffect, useRef, useState } from "react"
import SignCompanyInfo from "../../components/SignCompanyInfo";
import SignStep from "../../components/SignStep";
import SignCostumerInfo from "../../components/SignCostumerInfo"
import SignAccountInfo  from "../../components/SignAccountInfo";
import image from "../../assets/signUpImage.jpeg"

export default function SignUp() {
    const [step , setStep] = useState(1) ;
    const steps = ["account info" , "user info" , "payment info" , "confirmation"]
    const [stepsStatus , setStepsStatus] = useState(["done" ,"none" , "none" , "none"]) 
    const next = () => {
        if(step < steps.length) {
            setStep(step + 1)
        }

    }
    const prev = () =>{
        if(step > 1) setStep(step - 1)
    }
    const stepsRendering= () => {
        return  steps.map((step , index)=> {
            return <SignStep stepName={step} stepStatus={stepsStatus[index]} />
        })
    }
    const intialState = {
        username : null , 
        password : null , 
        email : null , 
        accountType : "costumer" , 
        tel : null , 
        registerByGoogle : false , 
        registerByFacebook : false , 
        emailVerified : false 
    }
    const [info , setInfo] = useState(intialState)
    const updateItem = (key , value) => {
        setInfo(prev => ({
            ...prev , 
            [key] : value
        }))
    }
    useEffect( ()=> {
        console.log(info)
    } , [info])
    return (
        <div className="d-flex justify-content-center flex row w-100" style={{ height : "100vh"}}> 
            <div className="bg-light col-lg-6 d-flex flex-column h-100">
                <img src={image} alt="" className="h-100 w-100"/>
            </div>
            <div  className="px-5 col-lg-6 col-sm-12">
                <h1 className="title custom-text-primary my-5 font-third text-capitalize text-center">travelboot registration</h1>
                <h5 className="text-capitalize text-center text-secondary"><strong className="custom-text-primary">step {step}: </strong>{steps[step - 1]}</h5>

                {step == 1 && <SignAccountInfo currentInfo={info} onChangeFunct={updateItem} next={next}/> }
                { step == 2 && info.accountType == "costumer" && <SignCostumerInfo /> }
                { step == 2 && info.accountType == "provider" && <SignCompanyInfo /> }
                <div className="d-flex align-items-center justify-content-end my-3">
                    <button className="btn custom-btn-outlined-primary me-2" onClick={prev}>prev</button>
                    <button className="btn custom-btn-primary ms-2" onClick={next}>next</button>
                </div>
            </div>
        </div> 
    )
}