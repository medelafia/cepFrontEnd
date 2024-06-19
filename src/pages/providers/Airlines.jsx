import { FormControl, InputLabel, MenuItem, NativeSelect,  Select,  TextField } from "@mui/material"
import { useEffect, useRef } from "react"
import { useState } from "react"
import Airline from "../../components/Airline"
import InternalError from "../../components/InternalError"
import ShowMore from "../../components/ShowMore"
import { useFetch } from "../../hooks/custom-hooks"
import AirlineSkeleton from "./componants/AirlineSkeleton"

export default function Airlines() {
    const { data , isLoading , error} = useFetch("http://localhost:8089/airlines/")
    const [ nbElements , setNbElements] = useState(10)
    const searchRef = useRef()
    const [ searchValue , setSearchValue ] = useState("")
    useEffect(()=>{
        console.log(searchValue)
    } , [searchValue])
    const renderAirlines = () => {
        return data?.map((airline, index) => {
            return airline?.companyName.includes(searchValue) ? <Airline airline={airline} /> : null 
        })
    }
    const searchInputListenerFunction = () => {
        setSearchValue(searchRef.current.value)
    }
    const showMoreElements = () => {
        setNbElements(nbElements + 10 )
    }
    return (
    <>
        <header className="d-flex align-items-center justify-content-between py-2">
                <TextField id="standard-basic" label="search airline" variant="standard" inputRef={searchRef} onInput={searchInputListenerFunction}/>
                <div className="w-25">
                <FormControl variant="standard" fullWidth>
                    <InputLabel id="demo-simple-select-label" htmlFor="uncontrolled-native">sort by</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    onChange={()=>{}}  
                    >
                        <MenuItem>rating</MenuItem>
                        <MenuItem>name</MenuItem>
                        <MenuItem>reviews</MenuItem>
                    </Select>
                </FormControl>
                </div>
            </header>
            <div className="row">
                {
                    isLoading ? 
                    <>
                        <AirlineSkeleton />
                        <AirlineSkeleton />
                        <AirlineSkeleton />
                        <AirlineSkeleton />
                    </>
                    : ( error ? 
                        <><InternalError /></>
                        :
                        <>
                            {renderAirlines()}
                            {data?.length > 10 && <ShowMore callBack={showMoreElements}/>}
                        </>) 
                }
            </div> 
    </>
    )
}   