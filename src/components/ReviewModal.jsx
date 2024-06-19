import { CollectionsBookmark, RateReview } from "@mui/icons-material";
import { Rating } from "@mui/material"; 
import { useState } from "react";
import { useRef } from "react";
export default function ReviewModal({ providerId}) {
  const reviewTitleRef = useRef() 
  const reviewContentRef = useRef() 
  const [ reviewScore , setReviewScore ] = useState(0)
  const postReview = (e) => {
    e.preventDefault() 
    const reviewTitleValue = reviewTitleRef?.current.value
    console.log(reviewTitleValue , reviewScore)
    /*fetch("http://localhost:8090/", {
      method : "POST" , 
      body : JSON.stringify({
        title : reviewTitleValue , 
        content : reviewContentValue , 
        providerId : providerId 
      })
     })
    .then()*/
  }
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
               <form className="w-75 mb-3">
                    <div className="form-group my-2 d-flex align-items-center justify-content-center">
                        <Rating onChange={(e , newScore) => setReviewScore(newScore)} />
                    </div>
                    <div className="form-group my-2">
                      <label htmlFor="" className="text-secondary ms-2">title</label>
                      <input type="text" placeholder="enter the title of review" className="form-control" ref={reviewTitleRef}/>
                    </div> 
                    <div className="form-group my-2">
                        <label htmlFor="" className="text-secondary ms-2">review text : </label>
                        <textarea placeholder="enter your review content review here" className="form-control" rows="6" onChange={(e,newValue) => console.log(newValue)}> 

                        </textarea>
                    </div>
                    <button onClick={postReview} className="btn custom-btn-outlined-primary w-100 my-3 rounded-pill">post review</button>
                </form>
          </div>
        </div>
      </div>
    </div>
    )
}