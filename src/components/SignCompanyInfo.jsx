import { useRef, useState } from "react";

export default function SignCompanyInfo({onChangeFunction}) {
    const providerTypeRef = useRef() 
    const [providerType , setProviderType] = useState(null) ; 
    return(
        <div>
            <div className="form-group my-2">
                <label htmlFor="">company name : </label>
                <input type="text" placeholder="enter the name of company" className="form-control"/>
            </div>
            <div className="form-group my-2">
                <label htmlFor="">choose the type of company</label>
                <select name="" id="" className="form-select" ref={providerTypeRef} onChange={() => onChangeFunction("providerType" , providerTypeRef.current.value)}>
                    <option value="HOTEL">hotel</option>
                    <option value="AIRLINE">airline</option>
                    <option value="CAR_AGENCY">car agency</option>
                    <option value="TRAVEL_AGENCY">travel agency</option>
                    <option value="RAILWAY_OPERATOR">railway operator</option>
                </select>
            </div>
            { 
                providerType == "hotel" && (
                    <div>
                        <label htmlFor="">hotel address : </label>
                        <input type="text" className="form-control"/>
                    </div>
                )
            }
        </div>
    )
}