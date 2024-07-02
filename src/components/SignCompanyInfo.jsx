import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useRef, useState } from "react";
import ImageUpload from "./ImageUpload";
import image from "../assets/user.png";

export default function SignCompanyInfo({
  onChangeFunction,
  currentInfo,
  errors,
  setErrors , 
  setStepValidity
}) {
  const companyNameRef = useRef() 
  const websiteRef = useRef() 
  const faxRef = useRef() 
  const addressRef = useRef() 
  const nbPhoneRef = useRef() 
  const providerTypeRef = useRef();
  const [providerType, setProviderType] = useState(null);
  const check = () => {
    if(errors.name == null && errors.webSite == null && errors.fax == null && errors.tel == null && errors.address == null) {
      setStepValidity(true)
    }
  }
  return (
    <div>
      <ImageUpload
        currentImage={image}
        onChangeHandler={(e) => onChangeFunction("image" , e)}
      />
      <div className="form-group my-2">
        <TextField
          label="company name"
          fullWidth
          onChange={(e) => onChangeFunction("name", e.target.value)}
          defaultValue={currentInfo.name }
          error={errors.name}
          helperText={errors.name}
          inputRef={companyNameRef}
          onMouseLeave={()=>{
            if(companyNameRef.current.value.length < 8) {
              setErrors({...errors , name : "the name of company should be greater than 10 characters"})
              setStepValidity(false) 
            }else {
              setErrors({ ...errors ,  name : null })
              check()
            }
          }}
        />
      </div>
      <div className="form-group d-flex">
        <TextField
          label="web site"
          fullWidth
          className="me-1"
          onChange={(e) => onChangeFunction("webSiteUrl", e.target.value)}
          defaultValue={currentInfo.webSiteUrl}
          error={errors.webSite}
          helperText={errors.webSite}
          inputRef={websiteRef}
          onMouseLeave={()=>{
            if(!websiteRef.current.value.match(/^(www)\.[a-z0-9A-Z]+\.[a-z0-9A-Z]{2,}/)) {
              setErrors({...errors , webSite : "invalid web site url please enter a valid web site"})
              setStepValidity(false) 
            }else {
              setErrors({ ...errors ,  webSite : null })
              check()
            }
          }}
        />
        <TextField
          label="fax"
          fullWidth
          className="ms-1"
          onChange={(e) => onChangeFunction("fax", e.target.value)}
          defaultValue={currentInfo.fax}
          error={errors.fax}
          helperText={errors.fax}
          inputRef={faxRef}
          onMouseLeave={()=>{
            if(!faxRef.current.value.match(/^(05)[0-9]{8,}/)) {
              setErrors({...errors , fax : "invalid fax number url please enter a valid fax number"})
              setStepValidity(false) 
            }else {
              setErrors({ ...errors ,  fax : null })
              check()
            }
          }}
        />
      </div>
      <div className="form-group my-3 d-flex align-items-center">
        <TextField
          fullWidth
          label="number phone"
          className="ms-2"
          defaultValue={currentInfo.tel}
          inputRef={nbPhoneRef}
          onChange={() => onChangeFunction("tel", nbPhoneRef.current.value)}
          onMouseLeave = {()=>{
            if(nbPhoneRef.current.value.length < 10 ) {
              setErrors({...errors , tel : "invalid number phone"})
              setStepValidity(false)
            }else {
              setErrors({...errors , tel : null })
              check()
            }
          }}
          error={errors.tel != null}
          helperText={ errors.tel }
        />
      </div>
      <div className="form-group my-2 d-flex">
        <FormControl fullWidth className="me-1">
          <InputLabel>country</InputLabel>
          <Select onChange={(e) => onChangeFunction("country", e.target.value)}>
            <MenuItem value="morroco">morroco</MenuItem>
          </Select>
        </FormControl>
        <TextField
          defaultValue={currentInfo.address}
          label="address" 
          fullWidth
          onChange={(e) => onChangeFunction("address", e.target.value)}
          onMouseLeave={()=>{
            if(addressRef.current.value.length < 20 ) {
              setErrors({...errors , address : "the address is not valid "})
              setStepValidity(false)
            }else {
              setErrors({...errors , address : null })
              check()
            }
          }}
          inputRef={addressRef}
          error={errors.address != null}
          helperText={errors.address}
        />
      </div>
      <div className="form-group my-2">
        <FormControl fullWidth>
          <InputLabel>type of company</InputLabel>
          <Select
            onChange={(e) => {
              setProviderType(e.target.value);
              onChangeFunction("providerType", e.target.value);
              console.log(e.target.value);
            }}
            defaultValue={currentInfo.providerType}
          >
            <MenuItem value="HOTEL">hotel</MenuItem>
            <MenuItem value="AIRLINE">airline</MenuItem>
            <MenuItem value="CAR_AGENCY">car agency</MenuItem>
            <MenuItem value="TRAVEL_AGENCY">travel agency</MenuItem>
            <MenuItem value="RAILWAY_OPERATOR">railway operator</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
