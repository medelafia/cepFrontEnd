import { useState } from "react";

export default function SignCompanyInfo() {
    const [providerType , setProviderType] = useState(null) ; 
    return(
        <div>
            <div className="form-group my-2">
                <label htmlFor="">company name : </label>
                <input type="text" placeholder="enter the name of company" className="form-control"/>
            </div>
            <div className="form-group my-2">
                <label htmlFor="">choose the type of company</label>
                <select name="" id="" className="form-select">
                    <option value="hotel">hotel</option>
                    <option value="airline">airline</option>
                    <option value="carAgency">car agency</option>
                    <option value="travelAgency">travel agency</option>
                    <option value="railwayOperator">railway operator</option>
                </select>
            </div>
            { 
                providerType == "airline" && (
                    <div>
                        <label htmlFor="">hotel address : </label>
                        <input type="text" className="form-control"/>
                    </div>
                )
            }
        </div>
    )
}