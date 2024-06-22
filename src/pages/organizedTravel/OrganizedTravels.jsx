import { FormControl, InputLabel, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import InternalError from "../../components/InternalError";
import LoadingComponent from "../../components/LoadingComponent";
import OrganizesTravel from "../../components/OrganizedTravel";
import ShowMore from "../../components/ShowMore"
import { useFetch } from "../../hooks/custom-hooks";
export default function OrganizedTravels() {
    const { destination , date} = useParams()
    const { data , error , isLoading } = useFetch("http://localhost:8089/organizedTravel")
    const renderTravels = () => {
        return data?.map((travel , index) => <OrganizesTravel />)
    }
    return (
        <div>
            <header className="d-flex align-items-center">
                <TextField label="destination name" className="me-2" fullWidth defaultValue={destination}/> 
                <TextField  className="me-2" type="date" fullWidth defaultValue={date}/>
                <button className="btn btn-dark">search</button>
            </header>
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
                        <header></header>
                    </>
                )

            }
        </div>
    )
}