import ProviderReview from "./ProviderReview"

export default function ReviewsSlider({reviews = []}) {
    const renderReviews = () => {
        return reviews.map((review , index) => <ProviderReview /> )
    }
    return (
        <div className="my-4"> 
            <div className="row position-relative no-wrap">
                <button className="btn btn-dark rounded-circle position-absolute top-50 end-0" style={{translateY : "-50%" , width : "15px"}}>-</button>
                <button className="btn btn-dark rounded-circle position-absolute top-50 start-0" style={{translateY : "-50%" , width : "15px"}}>-</button>
                {renderReviews()}
            </div>
        </div>
    )
}