import { TextField } from "@mui/material";
import { useState } from "react";

export default function Counter() {
    const [nb , setNb ] = useState(0) 
    const increment = () => {
        setNb(nb +  1) 
    } 
    const decrement = () => {
        setNb(nb -1 ) 
    }
    return (
        <div className="d-flex align-items-center">
            <button className="rounded-circle btn me-3" onClick={decrement}>
                -
            </button>
            <div style={{width : "30px"}}>
                <TextField type="number" value={nb} variant="standard"/>
            </div>
            <button className="rounded-circle btn ms-3" onClick={increment}>
                +   
            </button>
        </div>
    )
}