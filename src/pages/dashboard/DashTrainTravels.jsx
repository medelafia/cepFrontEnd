import { useSelector } from "react-redux";
import { userSelector } from "../../store/selectors/userSelector";
import DataPage from "./DataPage";

export default function DashTrainTravel() {
    const user = useSelector(userSelector)
    const columns = [
        {field : "id", headerName : "id"} , 
        {field : "price", headerName : "price"} , 
        {field : "origin", headerName : "destination"} , 
        {field : "distance" , headerName : "distance"} , 
        {field : "nbOfPlaces", headerName : "places"} , 
        {field : "nbOfStops", headerName : 'reservedPlaces'} , 
        { field : "travelDuration" , headerName : "duration"} , 
        {field : "departureDate" , headerName : "departure date"} , 
        {field : "departureTime" , headerName : "departure time"} , 
        {field : "arrivedTime" , headerName : "arrived time"} , 
        {field : "returnDate" , headerName : "return date"} 
    ]
    return (
        <DataPage columns={columns} dataAddingPath={"/dashboard/addTrainTravel"} dataUrl={`http://localhost:8089/railwaysOperators/createTravel`}/>
    )
}