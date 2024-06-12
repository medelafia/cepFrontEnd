import { FormControl, InputLabel, MenuItem, NativeSelect,  Select,  TextField } from "@mui/material"
import { useState } from "react"
import Airline from "../../components/Airline"
import ShowMore from "../../components/ShowMore"

export default function Airlines() {
    const [airlines , setAirlines] = useState([ "ejie" , "jfjdj" , "kfjk", "jjd" , "ejie" , "jfjdj" , "kfjk", "jjd" , "ejie" , "jfjdj" , "kfjk", "jjd"])
    const renderAirlines = () => {
        return airlines.map((airline, index) => {
            return <Airline />
        })
    }
    return (
    <>
        <header className="d-flex align-items-center justify-content-between py-2">
                <TextField id="standard-basic" label="search airline" variant="standard" />
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
                {renderAirlines()}
            </div>
            <ShowMore /> 
    </>
    )
}