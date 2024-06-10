import usePagination from "@mui/material/usePagination/usePagination"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LoadingComponent from "../../components/LoadingComponent"

export default function ResetPassword() {
    const {id} = useParams() 
    const [isLoding , setIsLoading] = useState(true) 
    const [ userId , setUserId] = useState(null)
    const [ erreur , setErreur ] = useState(null )
    useEffect(()=>{
        fetch("http://localhost:8089/accounts/verifierResetSession/"+id , {
            method : "POST" 
        }).then( res =>{
            setIsLoading(false) ;
            if(res.status == 200 ) {
                console.log(res.body())
            }else if(res.status == 404 ) {
                setErreur("session not found")
            } 
        })
    } , [] )
    return (
        <div className="d-flex align-items-center justify-content-center">
            { isLoding ? <LoadingComponent /> :( erreur != null ? <div>{erreur}</div> : <div>id</div>) }
        </div>
    )
}