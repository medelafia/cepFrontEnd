import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DefaultSkelton from "../../components/DefaultSkeltom"
import Hotel from "../../components/Hotel"
import InternalError from "../../components/InternalError"
import NoItems from "../../components/NoItems"
import ShowMore from "../../components/ShowMore"
import { useFetch } from "../../hooks/custom-hooks"
import "./hotels.css"

export default function HotelsPage() {
    let hotelsResponse = useFetch('http://localhost:8089/hotels/')
    const [ hotels , setHotels ] = useState([]) 
    useEffect(()=>{
        if ( hotelsResponse.data != null )
            setHotels(hotelsResponse.data)
    } , [hotelsResponse.isLoading])
    const [nbElements , setNbElements ] = useState(10)
    const renderHotels = () => {
        return hotels?.map((hotel,index) => <Hotel hotel={hotel}/>)
    }
    const { search }= useParams()
    const findNearby = () => {
        console.log("clicked")
        navigator.geolocation.getCurrentPosition(
            (pos)=> {
                console.log("done")
                console.log(pos.coords.latitude) ;
                console.log(pos.coords.longitude) ; 
                fetch(`http://localhost:8089/hotels/getNearby?lng=${pos.coords.longitude}&lat=${pos.coords.latitude}`)
                .then(res => res.json())
                .then(data => setHotels(data))
            } , (error) => {
                console.log(error) ; 
            }
        )
    }
    const [showFilter , setShowFilter] = useState(false)
    return (
        <div className="w-100 page">
            { 
                hotelsResponse?.isLoading 
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
                            hotelsResponse.error 
                            ? 
                            <InternalError />
                            : 
                            <>
            <div className="w-100 py-3 d-flex align-items-center">
                <TextField label="hotel name or city" fullWidth defaultValue={search}/> 
                <button className="btn custom-btn-secondary ms-1 p-3"><i class="fa-solid fa-magnifying-glass"></i></button>
                <span className="text-secondary mx-4">or</span>
                <button className="btn btn-outline-dark py-3" onClick={findNearby}>nearby</button>
            </div>
            <div className="w-100 row">
                <div className="col-md-12 my-3">
                                <div className="w-100 d-flex align-items-center justify-content-between">
                        <div>{hotels?.length} results</div>
                        <div className="d-flex w-25">
                            <button className="btn text-secondary mx-2" onClick={()=>{setShowFilter(!showFilter)}}>
                                <i class="fa-solid fa-filter"></i>
                            </button>
                            <FormControl fullWidth>
                                <InputLabel>sort by</InputLabel>
                                <Select>
                                    <MenuItem></MenuItem>
                                </Select>
                            </FormControl>
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
                        {hotels?.length == 0 ? 
                        <NoItems /> 
                        : 
                        <>
                            {renderHotels().slice(0 , nbElements)}
                            { hotels?.length > nbElements && <ShowMore callBack={setNbElements(nbElements+9)}/>  }
                        </>
                        }
                    </div>           
                </div>
            </div>
            </>
            )
         }
        </div>
    )
}