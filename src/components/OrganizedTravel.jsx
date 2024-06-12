import image from "../assets/chefchaouen.jpg"
export default function OrganizesTravel() {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 my-2">
            <div className="container border-top p-3 rounded border-bottom">
                <div className="rounded overflow-hidden">
                    <img src={image} alt="" style={{width : "100%" , height : "200px"}}/>
                </div>
                <div className="p-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <h4 className="text-capitalize">destination</h4>
                    </div>
                    <div className="mx-2">
                        <div>
                            <span className="text-secondary">numbers of days : </span><strong>7 days</strong>
                        </div>
                        <div>
                            <i class="fa-solid fa-hotel me-2"></i><strong>hotels include</strong>
                        </div>
                        <div>
                            <i class="fa-solid fa-car me-2"></i><strong>transports include</strong>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mt-3">
                    <h4 className="bold custom-text-primary">100$</h4>
                    <button className="btn custom-btn-secondary rounded-pill px-3">book now !</button>
                </div>
            </div>
        </div>
    )
}