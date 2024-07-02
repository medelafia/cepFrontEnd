import DataPage from "./DataPage"

export default function Users(){
    const columns = [
        { field : "id" , headerName : "user id"} , 
        {field: "username" , headerName : "username" } ,
        {field: "role" , headerName : "role"} ,
        {field: "email" , headerName :"email" }  
      ]
    return (
        <DataPage dataUrl={"http://localhost:8089/admin/user"} deletePath="http://localhost:8089/admin/user/" columns={columns} dataAddingPath={"/dashboard/addUser"}/> 
    )
}