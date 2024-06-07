import { useState } from "react"
import SignAccountType from "../../components/SignAccountType";
import SignCompanyInfo from "../../components/SignCompanyInfo";
import SignStep from "../../components/SignStep";
import SignUserInfo from "../../components/SignUserInfo"
export default function SignUp() {
    const [step , setStep] = useState(1) ;
    const steps = ["account type " , "account info" , "user info" , "payment info" , "confirmation"]
    const [stepsStatus , setStepsStatus] = useState(["done" ,"none" , "none" , "none"]) 
    const next = () => {
        if(step < steps.length) {
            switch(step){
                case 1 : updateItem("accountType")
            }
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
        accountType : null , 
        tel : null , 
    }
    const [info , setInfo] = useState(intialState)
    const updateItem = (key , value) => {
        setInfo(prev => ({
            ...prev , 
            [key] : value
        }))
    }
    return (
        <div className="page d-flex justify-content-center flex row"> 
            <div className="bg-light col-lg-6 d-flex flex-column p-5" style={{height : "90vh"}}>
                <h1 className="title custom-text-primary font-third text-capitalize">travelboot registration</h1>
                <div className="mt-5 ms-2">
                    {stepsRendering()}
                </div>
            </div>
            <div  className="p-5 col-lg-6">
                <h5 className="text-capitalize text-center mb-5 text-secondary"><strong className="custom-text-primary">step {step}: </strong>{steps[step - 1]}</h5>
                {step == 1 && <SignAccountType onChangeCallBack={updateItem}/> }
                {step == 2 && info.accountType == "COSTUMER" &&  <SignUserInfo />}
                {step ==2 && info.accountType == "PROVIDER" && <SignCompanyInfo />}
                <div className="d-flex align-items-center justify-content-end">
                    <button className="btn custom-btn-outlined-primary me-2" onClick={prev}>prev</button>
                    <button className="btn custom-btn-primary ms-2" onClick={next}>next</button>
                </div>
            </div>
        </div> 
    )
}