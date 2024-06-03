import { useState } from "react"
import Hotel from "../../components/Hotel"
import ShowMore from "../../components/ShowMore"

export default function HotelsPage() {
    const [result , setResult] = useState(["hotel 1", "hotel2" , "hotel 3" , "hotel 4" , "hotel 5" , "hotel 6"])
    const renderHotels = () => {
        return result.map((hotel,index) => <Hotel />)
    }
    const findNearby = () => {
        navigator.geolocation.getCurrentPosition(
            (pos)=> {
                console.log(pos.coords.latitude) ;
                console.log(pos.coords.longitude) ; 

            } , (error) => {
                console.log(error) ; 
            }
        )
    }
    return (
        <div className="w-100 page">
            <div className="w-100 p-3 d-flex align-items-center" style={{backgroundImage : "" , width : "100%" ,  height : "30vh"}}>
                <input type="text" placeholder="enter a hotel name or destination" className="form-control w-25 mx-1"/>
                <button className="btn custom-btn-secondary mx-1">search now</button>
                <span className="text-secondary mx-4">or</span>
                <button className="btn btn-outline-dark" onClick={findNearby}>find nearby</button>
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
                    <div className="my-4 row">
                        {result.length == 0 ? <p className="text-center custom-text-secondary">no flights</p>: renderHotels()}
                    </div>
                    <ShowMore callBack={console.log("show more hotels")}/>
                </div>
            </div>

        </div>
    )
}