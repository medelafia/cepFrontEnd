import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AddDataTemplate from "./AddDataTemplate";

export default function AddUser() {
  const username = useRef();
  const password = useRef();
  const email = useRef();
  const role = useRef();
  const confirmPassword = useRef()
  const [errors, setErrors] = useState({
    username: null,
    password: null,
    email: null,
    confirmPassword: null,
    role: null,
  });
  const [isValid , setIsValid ] = useState(false )
  const navigate = useNavigate() ; 
  const save = (e) => {
    e.preventDefault() ; 
    if(isValid || role.current.value == null ) {
        fetch("http://localhost:8089/admin/user/" , {
            method : "POST" , 
            headers : {
                "Authorization" :  "Bearer " + sessionStorage.getItem("token") 
            } , 
            body :  JSON.stringify({
                username : username.current.value , 
                password : password.current.value , 
                email : email.current.value , 
                role : role.current.value
            })
        })
        .then(res => {
            if(res.status == 200) {
                Swal.fire({
                    icon : "success" , 
                    title :"success" , 
                    text : "the creation was successfuly" , 
                    timer : 2000 
                })
                navigate("/dashboard/")
            }else {
                Swal.fire({
                    icon : "error" , 
                    title :"error" , 
                    text : "error since creation" , 
                    timer : 2000 
                })
            }
        })
    }else {
        Swal.fire({
            icon : "error" , 
            title :"error" , 
            text : "invalid form" , 
            timer : 2000 
        }) 
    }
  };
  const validate = () => {
    if(errors.username == null && errors.password == null && errors.conirmPassword == null && errors.email == null && errors.role ){
        setIsValid(true)
    }
  }
  return (
    <AddDataTemplate name="account information">
      <div className="form-grou my-2">
        <TextField
          label="username"
          fullWidth
          inputRef={username}
          error={errors.username != null}
          helperText={errors.username}
          onMouseLeave={()=>{
            if(username.current.value.length < 8) {
                setErrors({...errors , username : "invalid username , please enter a strong username"})
            }else {
                setErrors({...errors , username : null}) 
                validate()
            }
          }}
        />
      </div>
      <div className="form-group my-2">
        <TextField label="email" fullWidth inputRef={email} 
        error={errors.email != null}
        helperText={errors.email}
        onMouseLeave={()=>{
          if(email.current.value.length < 8) {
              setErrors({...errors , email : "invalid email , please enter a valid email"})
          }else {
              setErrors({...errors , email : null}) 
              validate()
          }
        }}
        />
      </div>
      <div className="form-group my-2 d-flex">
        <TextField label="password" fullWidth 
        error={errors.password != null}
        inputRef={password}
        helperText={errors.password}
        type="password"
        onMouseLeave={()=>{
          if(password.current.value.length < 8) {
              setErrors({...errors , password : "invalid password , please enter a strong password"})
          }else {
              setErrors({...errors , password : null}) 
              validate()
          }
        }}
        />
        <TextField label="confirm password" fullWidth 
        inputRef={confirmPassword}
        error={errors.confirmPassword != null}
        type="password"
        helperText={errors.confirmPassword}
        onMouseDown={()=>{
          if(confirmPassword.current.value != password.current.value ) {
              setErrors({...errors , confirmPassword : "password and confirm password most be equals"})
          }else {
              setErrors({...errors , confirmPassword : null}) 
              validate()
          }
        }}
        />
      </div>
      <div className="form-group">
        <FormControl fullWidth>
          <InputLabel>role</InputLabel>
          <Select inputRef={role}
          >
            <MenuItem value="ADMIN">admin</MenuItem>
            <MenuItem value="PROVIDER_AIRLINE">airline</MenuItem>
            <MenuItem value="PROVIDER_RAILWAYOPERATOR">
              railway operator
            </MenuItem>
            <MenuItem value="PROVIDER_CARAGENCY">car agency</MenuItem>
            <MenuItem value="PROVIDER_TRAVELAGENCY">travel agency</MenuItem>
            <MenuItem value="PROVIDER_HOTEL">hotel</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="d-flex align-items-center justify-content-end w-100">
        <button className="btn btn-dark mt-4" onClick={save}>save</button>
      </div>
    </AddDataTemplate>
  );
}
