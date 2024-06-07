import { useState } from "react"
import {motion} from "framer-motion" ; 
import LongText from "../../components/LongText"
import ReviewsSlider from "../../components/ReviewsSlider"
import ImageSlider from "../../components/ImageSlider"
import CurrentPath from "../../components/CurrentPath";
import Rating from "../../components/Rating";
export default function ProviderPage(){
    const [reviews , setReviews] = useState(['jjfj', "kkkd" , "hfhf" , "jfjjf" , "hhhd" ]) 
    return (
        <div className="page">
            <div className="custom-container py-5">
                <CurrentPath className="my-3"/> 
                <motion.div className="bg-light custom-rounded overflow-hidden" style={{minHeight : "500px"}}
                    initial={{opacity : 0 , translateX : -100}}
                    animate ={{opacity : 1 , translateX : 0 }}
                    transition= {{duration : 1}}
                    >
                    <div className="w-100 h-50">
                        <ImageSlider /> 
                    </div>
                    <div className="row p-5">
                        <div className="col-lg-6">
                            <motion.div className="mb-3"
                                initial={{opacity : 0 , translateX : -10 }}
                                whileInView={{ opacity : 1 , translateX : 0 }}
                                transition={{duration :0.4 }}
                            >
                                <h1 className="bold">hotel name</h1>
                                <div className="ps-3">
                                    <div><i class="fa-solid fa-location-dot me-2"></i><span className="text-decoration-underline">chefchaouen,morroco</span></div>
                                    <div><i class="fa-solid fa-location-dot me-2"></i><span className="text-decoration-underline">provider@gmail.com</span></div>
                                    <div><i class="fa-solid fa-phone me-2"></i><span className="text-decoration-underline">0658945721</span></div>
                                </div>
                            </motion.div>
                            <LongText text="    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo est velit iste consequuntur deserunt aliquam labore inventore laboriosam, minima maxime in quisquam placeat dolore voluptatem tenetur odio animi architecto!"/>
                        </div>
                        <div className="d-flex my-3 col-lg-6 flex-column align-items-center justify-content-center ">
                            <Rating />
                        </div>
                    </div>
                </motion.div>
                <div className="my-4">
                    <div className="d-flex align-items-center justify-content-between my-2">
                        <h3 className="custom-text-primary">users reviews</h3>
                        <button className="btn btn-outline-dark rounded-pill px-3"
                            data-bs-toggle="modal" 
                            data-bs-target="#reviewModal"
                        >
                            <i class="fa-solid fa-pen-to-square me-2"></i>
                            <span>write review</span>
                        </button>
                    </div>
                    <ReviewsSlider reviews={reviews}/> 
                </div>
            </div>
        </div>
    )
}