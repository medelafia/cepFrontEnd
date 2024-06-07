import { useRef } from "react";

export default function SignAccountType({onChangeCallBack}) {
    const accountType = useRef() ; 
    const changeLisetener = () => {
        const accountTypeValue = accountType.current.value ; 
        onChangeCallBack("accountType",accountTypeValue)
    }
    return (
        <div> 
            <div className="form-group my-3">
                <select ref={accountType} name="" id="" className="form-select text-secondary" onInput={changeLisetener} onSelect={changeLisetener}>
                    <option value="COSTUMER">costumer</option>
                    <option value="PROVIDER">provider</option>
                </select>
            </div>
        </div>  
    )
}