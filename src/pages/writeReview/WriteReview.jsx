import { Rating, TextField } from "@mui/material"
import { useParams } from "react-router-dom"

export default function WriteReview() {
    const {providerId , proivderType} = useParams() 
    return(
        <div className="page">
            <div className="container py-5">
                <h1 className="text-center custom-text-primary my-3 text-capitalize">write review</h1>
                <div className="my-3">
                    <h3>review score</h3>
                    <div className="d-flex justify-content-center">
                        <Rating />
                    </div>
                </div>
                <div className="my-3">
                    <h3>review information </h3>
                    <div className="row w-100">
                        <div className="container col-sm-12 col-lg-6">
                            <TextField label="review title" fullWidth/> 
                        </div>
                        <div className="container col-sm-12 col-lg-6">
                            <TextField label="review text" fullWidth/> 
                        </div>
                    </div>
                </div>
                <div className="my-3">
                    <h3>when did you ? </h3>
                    <TextField label="the date that you did it" focused className="my-2" fullWidth/>
                </div>
            </div>
        </div>
    )
}