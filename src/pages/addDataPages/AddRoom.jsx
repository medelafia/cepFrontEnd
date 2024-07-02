import { DataArray } from "@mui/icons-material";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useFetcher, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { userSelector } from "../../store/selectors/userSelector";
import AddDataTemplate from "./AddDataTemplate";
import CoverImageUpload from "./componants/CoverImageUpload";

export default function AddRoom() {
  const prefix = "http://localhost:8089/hotels/rooms/" ; 
  const token = "Bearer " + sessionStorage.getItem("token") ; 
  const { id } = useParams() ;  
  const [room , setRoom ] = useState(null) 
  useEffect(()=>{
    if( id != undefined ){
      fetch(prefix + id , {
        headers : {
          "Autorization" : token 
        }
      }) 
      .then(res => res.json() )
      .then(data => setRoom(data ))
    }
  } , [])
  const [roomImage , setRoomImage ] = useState()
  const roomNumber = useRef();
  const nbAdults = useRef();
  const nbChilds = useRef();
  const roomType = useRef();
  const isAvailable = useRef();
  const price = useRef();
  const freeWifiRef = useRef();
  const airConditioningRef = useRef();
  const hasTvRef = useRef();
  const kingBedsRef = useRef()
  const twinBedsRef = useRef() 
  const navigate = useNavigate();
  const getRoom = () => {
    return {
        childs: nbChilds.current.value ,
        adults: nbAdults.current.value,
        available: isAvailable.current.checked,
        roomNumber: roomNumber.current.value,
        roomType: roomType.current.value.toUpperCase(),
        price: Number.parseFloat(price.current.value),
        hasTv : hasTvRef.current.checked , 
        freeWifi : freeWifiRef.current.checked , 
        airConditioning : airConditioningRef.current.checked , 
        kingBeds : Number.parseInt(kingBedsRef.current.value ) , 
        twinsBeds : Number.parseInt(twinBedsRef.current.value ) 
      }
  }
  const verifier = (res) => {
    if (res.status == 200) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "the room added succesfully",
          timer: 2000,
        });
        navigate("/dashboard/rooms");
      }else {
        Swal.fire({
            icon: "error",
            title: "error",
            text: "cannot create the room",
            timer: 2000,
          });
      }
  }
    const saveRoom = (e) => {
        e.preventDefault();
        const formData = new FormData() 
        formData.append("room" , new Blob([JSON.stringify(getRoom())] , {type: "application/json"}))
        formData.append("image" , roomImage)
        fetch(prefix.concat("createRoom") , {
          method: "POST",
          headers: {
            "Authorization" : token , 
          },
          body: formData,
        }).then((res) => verifier(res));
  };
  const updateRoom = (e) => {
    e.preventDefault();
    let room = getRoom() 
    room["id"] = id ; 
    fetch(prefix.concat("update") , {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization" : token , 
      },
      body: JSON.stringify(room),
    }).then((res) => verifier(res));
  }
  return (
    <AddDataTemplate name="room information">
        <CoverImageUpload currentImage={null} disableButton={false} changeHandler={(e)=>setRoomImage(e)} />
        <div className="form-group my-2">
          <TextField
            label="room number"
            fullWidth
            type="number"
            required
            inputRef={roomNumber}
            defaultValue={room?.roomNumber}
          />
        </div>
        <div className="form-group my-2 d-flex">
          <TextField
            label="number of adults"
            fullWidth
            className="me-1"
            type="number"
            required
            inputRef={nbAdults}
            defaultValue={room?.adults}
          />
          <TextField
            label="number of children"
            fullWidth
            className="ms-1"
            type="number"
            required
            inputRef={nbChilds}
            defaultValue={room?.childs}
          />
        </div>
        <div className="form-group my-2 d-flex">
          <TextField
            label="kings beds"
            fullWidth
            className="me-1"
            type="number"
            required
            inputRef={kingBedsRef}
            defaultValue={room?.kingBeds}
          />
          <TextField
            label="twins beds"
            fullWidth
            className="ms-1"
            type="number"
            required
            inputRef={twinBedsRef}
            defaultValue={room?.twinsBeds}
          />
        </div>
        <div className="form-group my-2 d-flex">
          <TextField label="price" className="me-1" required inputRef={price} />
          <FormControl fullWidth className="ms-1">
            <InputLabel>room type</InputLabel>
            <Select required inputRef={roomType} defaultValue={room?.roomType}>
              <MenuItem value="superior">superior</MenuItem>
              <MenuItem value="deluxe">deluxe</MenuItem>
              <MenuItem value="standard">standard</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-group my-2">
          <FormControlLabel
            control={<Checkbox inputRef={isAvailable} defaultChecked={room?.available}/>}
            label="is available now"
          />
          <FormControlLabel
            control={<Checkbox inputRef={hasTvRef} defaultChecked={room?.hasTv}/>}
            label="has tv"
          />
          <FormControlLabel
            control={<Checkbox inputRef={freeWifiRef} defaultChecked={room?.freeWifi}/>}
            label="free wifi"
          />
          <FormControlLabel
            control={<Checkbox inputRef={airConditioningRef} defaultChecked={room?.airConditioning}/>}
            label="air conditioning"
          />
        </div>
        <button
          className="btn custom-btn-primary w-100 my-3"
          onClick={id == undefined ? saveRoom : updateRoom }
        >
          { id == undefined ? "save" :  "update" } 
        </button>
    </AddDataTemplate>
  );
}
