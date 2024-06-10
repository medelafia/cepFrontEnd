export default function SignCompanyInfo() {
    return(
        <div>
            <div className="form-group my-2">
                <label htmlFor="">company name : </label>
                <input type="text" placeholder="enter the name of company" className="form-control"/>
            </div>
            <div className="form-group my-2">
                <label htmlFor="">choose the type of company</label>
                <select name="" id="" className="form-select">
                    <option value="">hotel</option>
                    <option value="">airline</option>
                    <option value="">car agency</option>
                    <option value="">travel agency</option>
                    <option value="">railway operator</option>
                </select>
            </div>
        </div>
    )
}