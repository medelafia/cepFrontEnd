import Rating from "./Rating";

export default function ReviewModal() {
    return(
    <div className="modal rounded-lg p-5" id="reviewModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="p-4 d-flex align-items-center justify-content-end">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <h1 className="custom-text-primary text-capitalize text-center font-secondary">write review</h1>
          <div className="modal-body d-flex justify-content-center">
               <form className="w-75 mb-3" >
                    <div className="form-group my-2">
                        <Rating />
                    </div>
                    <div className="form-group my-2">
                        <label htmlFor="" className="text-secondary ms-2">review text : </label>
                        <textarea placeholder="enter your review content review here" className="form-control" rows="10"> 

                        </textarea>
                    </div>
                    <button className="btn custom-btn-outlined-primary w-100 my-3 rounded-pill">post review</button>
                </form>
          </div>
        </div>
      </div>
    </div>
    )
}