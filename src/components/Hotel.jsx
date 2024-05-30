import image from "../assets/hotel4.jpeg" 
export default function Hotel() {
    return (
        <div className="col-lg-12 border-bottom rounded my-2">
            <div className="d-flex align-items-center justify-content-between">
                <div className="w-25 p-3">
                    <img src={image} className="w-100" alt=""/>
                </div>
                <div className="w-75 p-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <h3>hotel name</h3>
                            <div>martil , tetouan</div>
                        </div>
                        <div className="custom-bg-primary p-1 text-white rounded">
                            9.3
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end">
                        jdjd
                    </div>
                </div>
            </div>
        </div>
    )
}