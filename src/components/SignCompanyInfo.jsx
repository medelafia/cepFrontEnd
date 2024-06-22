import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useRef, useState } from "react";

export default function SignCompanyInfo({ onChangeFunction }) {
  const providerTypeRef = useRef();
  const [providerType, setProviderType] = useState(null);
  return (
    <div>
      <div className="form-group my-2">
        <TextField label="company name" fullWidth onChange={(e) => onChangeFunction("CompanyName" , e.target.value)}/>
      </div>
      <div className="form-group my-2">
        <FormControl fullWidth>
          <InputLabel>type of company</InputLabel>
          <Select 
            onChange={(e) => 
                {
                    setProviderType(e.target.value)
                    onChangeFunction("providerType" , e.target.value)
                }
            }
          >
            <MenuItem value="hotel">hotel</MenuItem>
            <MenuItem value="airline">airline</MenuItem>
            <MenuItem value="carsAgencys">car agency</MenuItem>
            <MenuItem value="TRAVELS_AGENCY">travel agency</MenuItem>
            <MenuItem value="RAILWAY_OPERATOR">railway operator</MenuItem>
          </Select>
        </FormControl>
      </div>
      {providerType == "HOTEL" && (
        <>
          <div className="form-group my-2 d-flex">
            <FormControl fullWidth className="me-1">
              <InputLabel>country</InputLabel>
              <Select
                onChange={(e) =>
                  onChangeFunction("country", e.target.value)
                }
              >
                <MenuItem value="morroco">morroco</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth className="ms-1">
              <InputLabel>city</InputLabel>
              <Select
                onChange={(e) =>
                  onChangeFunction("city", e.target.value)
                }
              >
                <MenuItem value="new york">new york</MenuItem>
              </Select>
            </FormControl>
          </div>
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
