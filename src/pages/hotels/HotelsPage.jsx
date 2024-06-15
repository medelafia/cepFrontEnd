import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DefaultSkelton from "../../components/DefaultSkeltom"
import Hotel from "../../components/Hotel"
import InternalError from "../../components/InternalError"
import ShowMore from "../../components/ShowMore"
import { useFetch } from "../../hooks/custom-hooks"
import "./hotels.css"

export default function HotelsPage() {
    const { data , isLoading , error } = useFetch('http://localhost:8089/hotels') 
    const renderHotels = () => {
        return data.map((hotel,index) => <Hotel />)
    }
    const { search } = useParams() ;
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
    const [showFilter , setShowFilter] = useState(false)
    useEffect(()=>{
        console.log(search)
    } , [search] )
    return (
        <div className="w-100 page">
            { 
                isLoading 
                        ? 
                        <div className="row">
                            <DefaultSkelton /> 
                            <DefaultSkelton /> 
                            <DefaultSkelton /> 
                            <DefaultSkelton /> 
                            <DefaultSkelton /> 
                            <DefaultSkelton /> 
                        </div>
                        : 
                        (
                            error 
                            ? 
                            <InternalError />
                            : 
                            <>
            <div className="w-100 p-3 d-flex align-items-center">
                <input defaultValue={search} type="text" placeholder="enter a hotel name or destination" className="form-control w-25 mx-1"/>
                <button className="btn custom-btn-secondary mx-1">search now</button>
                <span className="text-secondary mx-4">or</span>
                <button className="btn btn-outline-dark" onClick={findNearby}>find nearby</button>
            </div>
            <div className="w-100 row">
                <div className="col-md-12 my-3">
                    
                        
                                <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>100 results</div>
                        <div className="d-flex">
                            <button className="btn border mx-2 d-flex align-items-center" onClick={()=>{setShowFilter(!showFilter)}}>
                                <i class="fa-solid fa-filter me-2"></i>
                                <span>filter</span>
                            </button>
                            <select name="" id="sort" className="form-select">
                                <option>recommended</option>
                                <option>min price</option>
                            </select>
                        </div>
                    </div>
                    { showFilter && 
                        <div className="d-flex align-items-center justify-content-between my-2">
                            <select name="" id="" className="form-select me-2"></select>
                            <select name="" id="" className="form-select mx-1"></select>
                            <select name="" id="" className="form-select ms-2"></select>
                        </div>
                    }
                    <div className="my-4 row">
                        {data?.length == 0 ? <p className="text-center custom-text-secondary">no flights</p>: renderHotels()}
                    </div>
                    <ShowMore callBack={console.log("show more hotels")}/>            
                </div>
            </div>
            </>
            )
         }
        </div>
    )
}