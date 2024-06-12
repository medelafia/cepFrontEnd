export default function SignCostumerInfo() {
  return (
    <div>
      <div className="form-group my-2">
          <label htmlFor="">first name : </label>
          <input type="text" placeholder="enter the first name" className="form-control"/>
        </div>
        <div className="form-group my-2">
          <label htmlFor="">last name: </label>
          <input type="text" placeholder="enter the last name" className="form-control"/>
        </div>
      <div className="form-group w-100 d-flex my-2">
        <div className="form-group me-1 w-50 ">
          <label htmlFor="">age : </label>
          <input type="number" className="form-control" placeholder="enter your age"/>
        </div>
        <div className="form-group ms-1 w-50">
          <label htmlFor="">gender : </label>
          <select name="" className="form-select" id="">
            <option value="">male</option>
            <option value="">female</option>
          </select>
        </div>
      </div>
      <div className="form-group w-100 d-flex my-2">
        <div className="form-group me-1 w-50 ">
          <label htmlFor="">country : </label>
          <select name=""  className="form-select" id="">
            <option value=""></option>
          </select>
        </div>
        <div className="form-group ms-1 w-50">
          <label htmlFor="">city : </label>
          <select name="" className="form-select" id="">
            <option value="">male</option>
            <option value="">female</option>
          </select>
        </div>
      </div>
    </div>

  );
}
