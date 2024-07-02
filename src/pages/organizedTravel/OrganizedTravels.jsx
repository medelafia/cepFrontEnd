import { FormControl, InputLabel, TextField } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import InternalError from "../../components/InternalError";
import LoadingComponent from "../../components/LoadingComponent";
import OrganizesTravel from "./componants/OrganizedTravel";
import ShowMore from "../../components/ShowMore"

export default function OrganizedTravels() {
    const [ travels , setTravel ] = useState(["" ,"","" ,"" ,"" ,"" ,"" ,"" ,"" ,""]) 
    const [ isLoading , setIsLoading ] = useState(false)
    const [ error , setError ] = useState(null)
    const [ nbElements , setNbElements ] = useState(9)
    const renderTravels = () => {
        return travels?.map((travel , index) => <OrganizesTravel />).slice(0 , nbElements)
    }
    return (
        <div>
            <header className="d-flex align-items-center">
                <TextField label="destination name" className="me-2" fullWidth /> 
                <TextField  className="me-2" type="date" fullWidth/>
                <button className="btn btn-dark py-3"><i class="fa-solid fa-magnifying-glass"></i></button>
            </header>
            <div className="row mb-5">
            {
                isLoading ? 
                    <LoadingComponent /> 
                : 
                (
                    error ? 
                    <div className="my-5">
                        <InternalError /> 
                    </div>
                    : 
                    <>
                        {renderTravels()}
                        {travels?.length > nbElements && <ShowMore callBack={()=>setNbElements(nbElements + 6)}/>}
                    </>
                )

            }
            </div>
        </div>
    )
}