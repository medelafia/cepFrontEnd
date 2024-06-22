
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useRef } from "react";

export default function SignCostumerInfo({currentInfo , onChangeFunction}) {
  const firstName = useRef() 
  const lastName = useRef() 
  const age = useRef() 
  const gender = useRef() 
  const country = useRef() 
  const city = useRef() 
  return (
    <div className="my-3">

      <div className="form-group my-3 d-flex">
        <TextField label="first name" fullWidth inputRef={firstName} defaultValue={currentInfo.firstName}  onChange={()=>onChangeFunction("firstName" , lastName.current.value)}/> 
      </div>
      <div className="form-group my-3 d-flex">
        <TextField label="last name" fullWidth inputRef={lastName} defaultValue={currentInfo.lastName}  onChange={()=>onChangeFunction("lastName" , lastName.current.value)}/> 
      </div>
      <div className="form-group w-100 d-flex my-3">
        <TextField label="age" type="number" inputRef={age} defaultValue={currentInfo.age} />
        <FormControl fullWidth className="ms-1">
          <InputLabel>gender</InputLabel>
          <Select inputRef={gender} defaultValue={currentInfo.gender} onChange={()=>onChangeFunction("gender" , gender.current.value)}>
            <MenuItem value="male">male</MenuItem>
            <MenuItem value="female">female</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="form-group w-100 d-flex my-3">
        <FormControl fullWidth className="me-1">
          <InputLabel>country</InputLabel>
          <Select inputRef={country} defaultValue={currentInfo.country} onChange={()=>onChangeFunction("country" , country.current.value)}>
            <MenuItem value="morocco">morroco</MenuItem>
            <MenuItem value="spain">spain</MenuItem>
            <MenuItem value="algerie">algerie</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth className="ms-1">
          <InputLabel>city</InputLabel>
          <Select inputRef={city}>
            <MenuItem>male</MenuItem>
            <MenuItem>female</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>

  );
}
