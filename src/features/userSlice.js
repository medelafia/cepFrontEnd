import { ContentCutOutlined } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";


let initialState = null
if(sessionStorage.getItem("token")) {
    const tokenDecoded = jwtDecode(sessionStorage.getItem("token"))
    console.log(tokenDecoded)
    if( tokenDecoded.exp * 1000 > new Date().getTime()) {
        initialState = tokenDecoded
    }
}else if(localStorage.getItem("token")){
    const token = localStorage.getItem("token")
    const tokenDecoded = jwtDecode(token) 
    if( tokenDecoded.exp * 1000 > new Date().getTime() ) {
        initialState = tokenDecoded
    }else {
        Swal.fire({
            text : "the token was expired , please login" , 
            timer : 4000 , 
            icon : "error" 
        }) 
    }
}
/*const initialState =    jwtDecode(sessionStorage.getItem("accessToken")) |
                        jwtDecode(JSON.parse(localStorage.getItem("tokens")).accessToken) |
                        null */

console.log(sessionStorage.getItem("accessToken"))
const userSlice = createSlice({
    name : "user" , 
    initialState ,
    reducers : {
        logout : (state) => {
            localStorage.removeItem("token")
            sessionStorage.removeItem("token") 
            return null
        } , 
        login : (state , action) => {
            state = jwtDecode(action.payload.token) ;
            console.log(state) 
            if(action.remember) localStorage.setItem("token" , action.payload.token)
            else sessionStorage.setItem("token" , action.payload.token)
            return state  
        } , 
        update : (state , action ) => {
            action.payload.forEach(elem => {
                state[elem.item] = elem.value   
            })
            return state 
        }
    }
})
export default userSlice.reducer ; 
export const {login,logout, update} = userSlice.actions  