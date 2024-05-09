import { useState } from "react"
import Hotel from "../../components/Hotel"

export default function HotelsPage() {
    const [result , setResult] = useState(["hotel 1"])
    const renderHotels = () => {
        return result.map((hotel,index) => <Hotel />)
    }
    return (
        <div className="w-100 page">
            <div className="w-100 p-3 d-flex">
                <input type="text" placeholder="enter a hotel name or destination" className="form-control w-25 mx-1"/>
                <button className="btn custom-btn-secondary mx-1">search now</button>
            </div>
            <div className="w-100 row">
                <div className="col-md-4 p-5">
                    <div data-bs-toggle="collapse" data-bs-target="#demo" className="d-flex align-items-center justify-content-center">
                        <span className="me-5">hotel stars</span><i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div id="demo" class="collapse show">
                        <li>hdhd</li>
                        <li>djd</li>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>100 results</div>
                        <div className="d-flex">
                            <div>sort by</div>
                            <select name="" id="" className="form-select">
                                <option value="">recommended</option>
                                <option value="">price</option>
                            </select>
                        </div>
                    </div>
                    {result.length == 0 ? <p className="text-center custom-text-secondary">no flights</p>: renderHotels()}
                </div>
            </div>

        </div>
    )
}