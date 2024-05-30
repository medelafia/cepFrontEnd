import { useEffect, useState } from "react";

const URL_PREFIX = "http://localhost:8888/" ; 
export const useFetch = (microServiceName , url , method = "get", dataToFetch) => {
    const [ data , setData ] = useState(null) 
    const [ isLoading , setIsLoading ] = useState(true)
    const [ error ,setError ] = useState(null) 
    useEffect(()=> {
        fetch(URL_PREFIX+microServiceName+url)
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
    }, [microServiceName , url])
    return { isLoading , error , data } ; 
}