import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useRef, useState } from "react";

export default function SignCompanyInfo({ onChangeFunction , currentInfo }) {
  const providerTypeRef = useRef();
  const [providerType, setProviderType] = useState(null);
  return (
    <div>
      <div className="form-group my-2">
        <TextField label="company name" fullWidth onChange={(e) => onChangeFunction("name" , e.target.value)} defaultValue={currentInfo.name | ""}/>
      </div>
      <div className="form-group d-flex">
        <TextField label="web site" fullWidth className="me-1" onChange={(e)=>onChangeFunction("webSiteUrl" , e.target.value)} defaultValue={currentInfo.webSiteUrl}/> 
        <TextField label="fax" fullWidth className="ms-1" onChange={(e)=>onChangeFunction("fax" , e.target.value)} defaultValue={currentInfo.fax}/> 
      </div>
      <div className="form-group my-2">
        <TextField label="company address" fullWidth onChange={(e)=>onChangeFunction("physicalAddress" , e.target.value)} defaultValue={currentInfo.physicalAddress}/> 
      </div>
      <div className="form-group my-2">
        <FormControl fullWidth>
          <InputLabel>type of company</InputLabel>
          <Select 
            onChange={(e) => 
                {
                    setProviderType(e.target.value)
                    onChangeFunction("providerType" , e.target.value)
                    console.log(e.target.value)
                }
            }
            defaultValue={currentInfo.providerType}
          >
            <MenuItem value="hotel">hotel</MenuItem>
            <MenuItem value="airline">airline</MenuItem>
            <MenuItem value="carAgency">car agency</MenuItem>
            <MenuItem value="travelAgency">travel agency</MenuItem>
            <MenuItem value="railwaysOperator">railway operator</MenuItem>
          </Select>
        </FormControl>
      </div>
      {providerType == "hotel" && (
        <>
          <div className="form-group my-2 d-flex">
            <TextField label="number of stars" className="me-1" type="number" onChange={e => onChangeFunction("nbStars" , e.target.value )}/> 
            <TextField label="longitude" className="mx-1" onChange={e => onChangeFunction("longitude" , e.target.value )}/>
            <TextField label="latitude" className="ms-1" onChange={e => onChangeFunction("latitude" , e.target.value )}/>
          </div>
        </>
      )}
    </div>
  );
}
