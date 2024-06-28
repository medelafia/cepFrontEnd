import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AddDataHeader from "../../components/AddDataHeader";
import CurrentPath from "../../components/CurrentPath";
import { userSelector } from "../../store/selectors/userSelector";

export default function AddRoom() {
    const user = useSelector(userSelector)
    const nbRooms = useRef()
    const roomNumber = useRef() 
    const nbAdults = useRef() 
    const nbChilds = useRef()
    const roomType = useRef() 
    const isAvailable = useRef() 
    const price = useRef()
    const navigate = useNavigate() 
    const saveRoom = (e) =>{
        e.preventDefault()
        fetch("http://localhost:8089/hotels/" + user.id ,  {
            method : "POST" , 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            body : JSON.stringify({
                nbOfRooms : nbRooms.current.value , 
                nbOfChilds : nbChilds.current.value , 
                nbOfAdults : nbAdults.current.value , 
                available : isAvailable.current.checked , 
                roomNumber : roomNumber.current.value , 
                roomType : roomType.current.value.toUpperCase() , 
                price : Number.parseFloat(price.current.value ) 
            })
        }).then(res => {
            if(res.status == 200) {
                Swal.fire({
                    icon : "success" , 
                    title: 'Success!',
                    text: 'the room added succesfully',
                    timer: 2000
                })
                navigate("/dashboard/rooms")
            }
        })
    }
    return (
        <div>
            <div className="custom-container py-3">
                <CurrentPath />
                <AddDataHeader title="add room"/>
                <form action="" className="my-4">
                    <div className="form-group my-2">
                        <TextField  label="number of rooms" fullWidth type="number" required inputRef={nbRooms}/>
                    </div>
                    <div className="form-group my-2">
                        <TextField label="room number" fullWidth type="number" required inputRef={roomNumber}/> 
                    </div>
                    <div className="form-group my-2 d-flex">
                        <TextField label="number of adults"  fullWidth className="me-1" type="number" required inputRef={nbAdults}/> 
                        <TextField label="number of children" fullWidth className="ms-1" type="number" required inputRef={nbChilds}/> 
                    </div>
                    <div className="form-group my-2 d-flex" >
                        <TextField label="price" className="me-1" required inputRef={price}/> 
                        <FormControl fullWidth className="ms-1">
                            <InputLabel>room type</InputLabel>
                            <Select required inputRef={roomType}>
                                <MenuItem value="superior">superior</MenuItem>
                                <MenuItem value="deluxe">deluxe</MenuItem>
                                <MenuItem value="standard">standard</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="form-group my-2">
                        <FormControlLabel control={<Checkbox inputRef={isAvailable}/>} label="is available now" />
                    </div>
                    <button className="btn custom-btn-primary w-100 my-3" onClick={saveRoom}>save</button>
                </form>
            </div>
        </div>
    )
}