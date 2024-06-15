
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export default function SignCostumerInfo() {
  return (
    <div className="my-3">

      <div className="form-group my-3 d-flex">
        <TextField label="first name" fullWidth/> 
      </div>
      <div className="form-group my-3 d-flex">
        <TextField label="last name" fullWidth/> 
      </div>
      <div className="form-group w-100 d-flex my-3">
        <FormControl fullWidth className="me-1">
          <InputLabel>age</InputLabel>
          <Select>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth className="ms-1">
          <InputLabel>gender</InputLabel>
          <Select>
            <MenuItem>male</MenuItem>
            <MenuItem>female</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="form-group w-100 d-flex my-3">
        <FormControl fullWidth className="me-1">
          <InputLabel>country</InputLabel>
          <Select>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth className="ms-1">
          <InputLabel>city</InputLabel>
          <Select>
            <MenuItem>male</MenuItem>
            <MenuItem>female</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>

  );
}
