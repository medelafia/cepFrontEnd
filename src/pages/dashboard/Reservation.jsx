import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import CurrentPath from "../../components/CurrentPath";
import InternalError from "../../components/InternalError";
import LoadingComponent from "../../components/LoadingComponent";
import { useFetch } from "../../hooks/custom-hooks";

export default function Reservation() {
    const { data , isLoading , error } = useFetch("http://localhost:8089/provider/reservations") 
    useEffect(()=> {
        console.log(data)
    } , [data , isLoading , error])
    return(
        <div className="custom-container pt-5">
            <div className="d-flex align-items-center justify-content-between">
        <CurrentPath />
      </div>
      <div className="rounded d-flex align-items-center justify-content-between my-2">
        <input
          type="text"
          className="form-control w-25"
          placeholder="search by email or username"
        />
      </div>
      {isLoading ? (
        <div className="w-100 my-3 py-3 d-flex align-items-centrr justify-content-center">
          <LoadingComponent />
        </div>
      ) : error ? (
        <InternalError />
      ) : (
        <>
          <DataGrid
            columns={[
                {field : "id" , headerName : "id"} , 
                { field : "title" , headerName : "title"} ,
                { field :"reservationStatus"  , headerName : "reservationStatus"} , 
                { field : "isPaid" , headerName : "paid"}  , 
                { field : "reservationDate" , headerName : "date"} , 
                { field : "totalAmount" , headerName : "amount"}
            ]}
            rows={data}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            disableRowSelectionOnClick
          
          />
        </>
      )}
        </div>
    )
}