import { useState } from "react"
import {motion} from "framer-motion" ; 
import LongText from "../../components/LongText"
import ReviewsSlider from "../../components/ReviewsSlider"
import ImageSlider from "../../components/ImageSlider"
import CurrentPath from "../../components/CurrentPath";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Hotel from '../../components/Hotel'
import { Rating } from "@mui/material";
import Flight from "../flights/componants/Flight";
import NoItems from "../../components/NoItems";

export default function ProviderPage(){
    const [reviews , setReviews] = useState(['jjfj', "kkkd" , "hfhf" , "jfjjf" , "hhhd" ]) 
    const { id } = useParams() 
    const [ provider , setProvider ] = useState(null) 
    const [ deals , setDeals ]  = useState([])
    const navigate = useNavigate()
    const fetchDeals = (providerType , offerType) => {
        fetch(`http://localhost:8089/${providerType}/${id}/${offerType}`)
        .then(res => res.json()) 
        .then(data => setDeals(data))
    }
    useEffect(()=>{
        fetch("http://localhost:8089/provider/" + id )
        .then(res => res.json()) 
        .then(data => {
            setProvider(data)
            switch(data?.providerType) {
                case "AIRLINE" : fetchDeals("airlines" , "flights")
                                break
                case "HOTEL" : fetchDeals ("hotels" , "rooms") 
                                break 
                case "CARS_AGENCY" : fetchDeals("carsAgencies" , "cars") 
                                break ; 
                case "TRAVELS_AGENCY" : fetchDeals("travelAgencies" , "organizedTravels")  
                                break  
                case "RAILWAY_OPERATOR" : fetchDeals("railwaysOperators" , "trainTravels") 
                                break 
            }
        })
    } , [] )
    useEffect(()=>{
        console.log(deals)
    } , [deals])
    const renderDeals = () => {
        return deals?.map((deal , index) => <Flight flight={deal}/>) 
    }
    return (<div className="custom-container">
        <CurrentPath className="my-3"/> 
                <motion.div className="bg-light custom-rounded overflow-hidden" style={{minHeight : "500px"}}
                    initial={{opacity : 0 , translateX : -100}}
                    animate ={{opacity : 1 , translateX : 0 }}
                    transition= {{duration : 1}}
                    >
                    <div className="w-100 h-50">
                        <ImageSlider /> 
                    </div>
                    <div className="row py-5 container">
                        <div className="col-lg-6">
                            <motion.div className="mb-3"
                                initial={{opacity : 0 , translateX : -10 }}
                                whileInView={{ opacity : 1 , translateX : 0 }}
                                transition={{duration :0.4 }}
                            >
                                <h1 className="bold">{provider?.name}</h1>
                                <div className="ps-3">
                                    { provider?.address !=null && <div><i class="fa-solid fa-location-dot me-2"></i><a className="text-dark" href="#">{provider?.address}</a></div> }
                                    { provider?.email != null && <div><i class="fa-solid fa-location-dot me-2"></i><a className="text-dark" href="#">{provider?.email}</a></div> }
                                  { provider?.tel && <div><i class="fa-solid fa-phone me-2"></i><a className="text-dark" href="#">{ provider?.tel } </a></div> }
                                    { provider?.webSiteUrl != null && <div><i class="fa-solid fa-phone me-2"></i><a className="text-dark" href="#">{ provider?.webSiteUrl} </a></div> }
                                    
                                </div>
                            </motion.div>
                        </div>
                        <div className="d-flex my-3 col-lg-6 flex-column align-items-center justify-content-center ">
                            <div className="my-2">
                                <img src={""} style={{width : "200px" , height : "150px"}} alt="" />
                            </div>
                            <div className="my-2">
                                <Rating defaultValue={provider?.score} disabled/>
                                <h6 className="text-center text-secondary">{provider?.reviewsCount} review</h6>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <div className="my-4">
                    <div className="d-flex align-items-center justify-content-between my-2">
                        <h3 className="custom-text-primary text-capitalize">deals</h3>
                    </div>
                    <div className="row">
                        {deals?.length > 0 ? renderDeals() : <NoItems />}
                        
                    </div>
                </div>
                <div className="my-4">
                    <div className="d-flex align-items-center justify-content-between my-2">
                        <h3 className="custom-text-primary">users reviews</h3>
                        <button className="btn btn-outline-dark rounded-pill px-3"
                            /*data-bs-toggle="modal" data-bs-target="#reviewModal" */
                            onClick={()=>navigate(`/writeReview/${provider.id}/${provider.providerType}`)}
                        >
                            <i class="fa-solid fa-pen-to-square me-2"></i>
                            <span>write review</span>
                        </button>
                    </div>
                    {   provider?.reviews?.length == 0 ?
                        <div className="d-flex align-items-center my-3 justify-content-center">
                            <strong className="text-capitalize h4">no reviews</strong>  
                        </div>
                        : 
                        (provider?.reviews != null && <ReviewsSlider reviews={provider?.reviews}/> )
                    }

                </div>
    </div>
    )
}