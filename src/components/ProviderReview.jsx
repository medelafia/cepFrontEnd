import Rating from "./Rating";

export default function ProviderReview({tit}) {
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 my-2">
            <div className="custom-rounded border p-3 container">
            <Rating />
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deserunt quisquam ad optio! Ratione porro temporibus optio, iure consectetur laboriosam tenetur! Nam distinctio non ipsa quidem aut sapiente consequuntur amet.</p>
            </div>
            <div className="d-flex align-items-center justify-content-between ">
                <div>
                    @user {tit}
                </div>
                <div>
                    22/10/2022
                </div>
            </div>
        </div>
        </div>
    )
}