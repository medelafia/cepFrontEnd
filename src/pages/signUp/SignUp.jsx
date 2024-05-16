import { useState } from "react"

export default function SignUp() {
    const [step , setStep] = useState(1) ;
    const next = () => {
        if(step < 2) setStep(step + 1)
    }
    const prev = () =>{
        if(step > 0) setStep(step - 1)
    }
    return (
        <div className="page d-flex align-items-center justify-content-center"> 
            <div  className="p-5 border rounded">
                {step == 1 && <div> 
                    <h5 className="text-capitalize text-center custom-text-primary mb-2">personnal informations</h5>
                    <div className="form-group my-3 d-flex align-items-center justify-content-between">
                        <div className="form-group me-2">
                            <input type="text" className="form-control" id="username" placeholder="enter the username"/>
                        </div>
                        <div className="form-group ms-2">
                            <input type="text" className="form-control" id="password" placeholder="enter the password"/>
                        </div>
                    </div>
                    <div className="form-group my-3">
                        <input type="email" className="form-control" id="email"placeholder="enter your email"/>
                    </div>
                    <div className="form-group my-3">
                        <input type="text" className="form-control" placeholder="enter the number phone"/>
                    </div>
                    <div className="form-group my-3">
                        <select name="" id="" className="form-select text-secondary">
                            <option value="">costumer</option>
                            <option value="">provider</option>
                        </select>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <button className={`btn custom-btn-outlined-primary disabled`}>prev</button>
                        <button className="btn custom-btn-primary" onClick={next}>next</button>
                    </div>
                </div> }
                {step == 2 && <div> 
                    <h5 className="text-capitalize text-center custom-text-primary mb-2">step 2 informations</h5>
                    <div className="form-group my-3 d-flex align-items-center justify-content-between">
                        <div className="form-group me-2">
                            <input type="text" className="form-control" id="username" placeholder="enter the username"/>
                        </div>
                        <div className="form-group ms-2">
                            <input type="text" className="form-control" id="password" placeholder="enter the password"/>
                        </div>
                    </div>
                    <div className="form-group my-3">
                        <input type="email" className="form-control" id="email"placeholder="enter your email"/>
                    </div>
                    <div className="form-group my-3">
                        <input type="text" className="form-control" placeholder="enter the number phone"/>
                    </div>
                    <div className="form-group my-3">
                        <select name="" id="" className="form-select text-secondary">
                            <option value="">costumer</option>
                            <option value="">provider</option>
                        </select>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <button className="btn custom-btn-outlined-primary" onClick={prev}>prev</button>
                        <button className="btn custom-btn-primary">next</button>
                    </div>
                </div> }
            </div>
        </div> 
    )
}