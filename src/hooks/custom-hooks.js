import { useEffect, useState } from "react";

const URL_PREFIX = "http://localhost:8888/" ; 
export const useFetch = (url , method = "get", dataToFetch , authorization = null , useAuth = true ) => {
    const [ data , setData ] = useState(null) 
    const [ isLoading , setIsLoading ] = useState(true)
    const [ error ,setError ] = useState(null) 
    useEffect(()=> {
        fetch(url , {
            headers : { 
                "Authorization" : "Bearer ".concat(sessionStorage.getItem("token")) , 
                "Accept" : "application/json",
                "Content-Type": "application/json",
            } , 
            body : JSON.stringify(dataToFetch)
        })
        .then(res => {
            if(!res.ok) {
                throw Error("could not fetch data from this ressource")
            }
            return res.json() ; 
        })
        .then(resData => {
            setIsLoading(false) ; 
            console.log(resData)
            setData(resData) ;
        })
        .catch(()=>{
            setError("error")
            setIsLoading(false)
        })
    }, [ url])
    return { isLoading , error , data } ; 
}