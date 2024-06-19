import { Alert } from "@mui/material"
import { useDispatch } from "react-redux"
import { hideAlert } from "../features/pageSlice"
export default function CustomAlert({open , alertType , text }) {
    const dispatch = useDispatch()
    const onCloseAlert = () => {
        dispatch(hideAlert())
    }
        return(
            open ? 
                (<div className="w-100 p-4 position-absolute sticky-top" style={{zIndex : 1000 , top : "10px"}}>
                    <Alert severity={alertType} onClose={onCloseAlert}>{text}</Alert>
                </div>
                )
            :   null
    )
}