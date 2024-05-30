import { useState } from "react"
import SignAccountInfo from "../../components/SignAccountInfo";
export default function SignUp() {
    const [step , setStep] = useState(1) ;
    const next = () => {
        if(step < steps.length) setStep(step + 1)
    }
    const prev = () =>{
        if(step > 0) setStep(step - 1)
    }
    const steps = ["account info" , "user info" , "payment info"] 
    return (
        <div className="page d-flex justify-content-center flex row"> 
            <div className="bg-light col-lg-6 d-flex flex-column p-5" style={{height : "90vh"}}>
                <h1 className="title custom-text-primary font-third text-capitalize">travelboot registration</h1>
                <div className="mt-5 ms-2">
                    <div className="d-flex my-2 align-items-center">
                        <i class="fa-solid fa-circle-check text-success"></i>
                        <div className="ms-3 text-secondary">account information</div>
                    </div>
                    <div className="d-flex my-2 align-items-center">
                        <i class="fa-solid fa-circle-xmark text-danger"></i>
                        <div className="ms-3">account information</div>
                    </div>
                    <div className="d-flex my-2 align-items-center">
                        <i class="fa-solid fa-circle-check"></i>
                        <div className="ms-3">account information</div>
                    </div>
                </div>
            </div>
            <div  className="p-5 col-lg-6">
                {step == 1 && <SignAccountInfo /> }
                {step == 2 && <SignAccountInfo /> }
                <div className="d-flex align-items-center justify-content-end">
                    <button className="btn custom-btn-outlined-primary me-2" onClick={prev}>prev</button>
                    <button className="btn custom-btn-primary ms-2" onClick={next}>next</button>
                </div>
            </div>
        </div> 
    )
}