import { useState } from "react"
import ProviderReview from "./ProviderReview"

export default function ReviewsSlider({reviews = []}) {
    const [start , setStart ] = useState(0) 
    const [end , setEnd ] =useState(start + 3) 
    const renderReviews = () => {
        return reviews?.map((review , index) => <ProviderReview review={review}/> )
    }
    return (
        <div className="my-4"> 
            <div className="row position-relative no-wrap">
                {renderReviews().slice(start,end)}
            </div>
            <div className="my-2 d-flex align-items-center justify-content-end px-2">
                <button className="btn btn-outline-dark rounded-circle me-2" disabled={start - 1 < 0} onClick={()=>{setStart(prev => prev - 1)}}>
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <button className="btn btn-outline-dark rounded-circle ms-2" disabled={start + 1 > reviews.length} onClick={()=>{setStart(prev => prev + 1)}}>
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    )
}