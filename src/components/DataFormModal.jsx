export default function DataFormModal(){
    const simpleInput = [{inputType : "text" , inputPlaceHolder : "enter the name" , microServiceName : "ACCOUNTS-SERVICES" , url : "/customers/"}]
    const inputsRendering = ()=> {
        return simpleInput.map((input, index)=>{
            return (
                <div className="form-group my-3">
                    <input type={input.inputType} className="form-control" placeholder={input.inputPlaceHolder} /> 
                </div> 
            )
        })
    }
    return (
        <div className="modal rounded-5" id="dataModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="p-4 d-flex align-items-center justify-content-end">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <h1 className="custom-text-primary text-capitalize text-center title">add data</h1>
          <div className="modal-body">
          <div className="login-section d-flex align-items-center flex-column p-3 position-relative justify-content-center">
                <form className="w-75 mb-3" >
                    {inputsRendering()}
                    <div className="d-flex align-items-center justify-content-end mt-3">
                        <button className="btn custom-btn-outlined-primary me-2">reset</button>
                        <button className="btn custom-btn-primary ms-2">save</button>
                    </div>
                 </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
