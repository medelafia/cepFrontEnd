export default function TopDestinations() {
    return (
        <div className="top-destinations section mb-5">
            <div className="custom-container py-5 h-100">
                <div className="d-flex align-items-center justify-content-between"> 
                    <div className="title custom-text-secondary">
                        top destinations
                    </div>
                    <a href="/offers/destinations" className="custom-text-secondary text-decoration-none">show more</a>
                </div>
                <div className="row my-4 h-100">
                    <div className="col-md-4 h-100">
                        <div className="container bg-primary rounded h-100">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="col-md-4 h-100">
                        <div className="container bg-primary rounded h-50">
                            <img src="" alt="" />
                        </div>
                        <div className="container bg-primary rounded my-1 h-50">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="col-md-4 h-100">
                        <div className="container bg-primary rounded h-100">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}