import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useRef, useState } from "react";
import defaultImage from "../assets/user.jpeg"
import ImageUpload from "./ImageUpload";
export default function SignCostumerInfo({
  currentInfo,
  onChangeFunction,
  errors,
  setStepValidity,
  setErrors 
}) {
  const firstName = useRef();
  const lastName = useRef();
  const age = useRef();
  const gender = useRef();
  const country = useRef();
  const city = useRef();
  const check = () => {
    if(errors.firstName == null && errors.lastName == null) {
      setStepValidity(true)
    }
  }
  return (
    <div className="my-3">
      <ImageUpload onChangeHandler={(e)=>onChangeFunction("image" , e)} currentImage={defaultImage}/>  
      <div className="form-group my-3 d-flex">
        <TextField
          label="first name"
          fullWidth
          inputRef={firstName}
          defaultValue={currentInfo.firstName}
          onChange={() => onChangeFunction("firstName", firstName.current.value)}
          error={errors.firstName != null } 
          onMouseLeave={()=> {
            if(firstName.current.value.length < 4) {
              setErrors({...errors , firstName : "invalid input"})
              setStepValidity(false)
            }else {
              setErrors({...errors , firstName : null })
              check()
            }
          }}
          helperText={errors.firstName}
        />
      </div>
      <div className="form-group my-3 d-flex">
        <TextField
          label="last name"
          fullWidth
          inputRef={lastName}
          defaultValue={currentInfo.lastName}
          onChange={() => onChangeFunction("lastName", lastName.current.value)}
          error={errors.lastName != null } 
          helperText={errors.lastName}
          onMouseLeave={()=> {
            if(lastName.current.value.length < 4) {
              setErrors({...errors , lastName : "invalid input"})
              setStepValidity(false)
            }else {
              setErrors({...errors , lastName : null })
              check()
            }
          }}
        />
      </div>
      <div className="form-group w-100 d-flex my-3">
        <TextField
          label="age"
          type="number"
          inputRef={age}
          defaultValue={currentInfo.age}
          error={errors.age != null } 
          helperText={errors.age}
        />
        <FormControl fullWidth className="ms-1">
          <InputLabel>gender</InputLabel>
          <Select
            inputRef={gender}
            defaultValue={currentInfo.gender}
            onChange={() => onChangeFunction("gender", gender.current.value)}
          >
            <MenuItem value="male">male</MenuItem>
            <MenuItem value="female">female</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
