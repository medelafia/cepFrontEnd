import { Rating } from "@mui/material";


export default function ProviderReview({review}) {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 my-2">
            <div className="custom-rounded border p-3 container">
            <Rating defaultValue={review.score} />
            <div>
                <p>{review?.content}</p>
            </div>
            <div className="d-flex align-items-center justify-content-between ">
                <div>
                    @user {review?.clientId}
                </div>
                <div>
                    {review?.date}
                </div>
            </div>
        </div>
        </div>
    )
}