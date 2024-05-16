import { ThirteenMp } from "@mui/icons-material";
import { useEffect, useState } from "react";

const URL_PREFIX = "http://localhost:8888/" ; 
export const useFetch = (microServiceName , url , post , dataToFetch) => {
    const [ data , setData ] = useState(null) 
    const [ isLoading , setIsLoading ] = useState(true)
    const [ error ,setError ] = useState(null) 
    useEffect(()=> {
        fetch(URL_PREFIX+microServiceName+url ,     
            post ? {
                method : "POST" , 
                body : JSON.stringify(dataToFetch) , 
                headers: {  'Accept': 'application/json', 'Content-Type': 'application/json' }
            } 
            : {})
        .then(res => {
            if(!res.ok) {
                throw Error("could not fetch data from this ressource")
            }
            return res.json() ; 
        })
        .then(resData => {
            setIsLoading(false) ; 
            setData(resData) ;
        })
        .catch(()=>{
            setError("error")
            setIsLoading(false)
        })
    }, [microServiceName , url])
    return { isLoading , error , data } ; 
}