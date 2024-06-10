import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = localStorage.getItem("user") != undefined ?  JSON.parse(localStorage.getItem("user")) :  null
console.log(initialState)
const userSlice = createSlice({
    name : "user" , 
    initialState ,
    reducers : {
        logout : (state) => {
            return null
        } , 
        login : (state , action) => {
            console.log(action)
            state = action.payload.data ; 
            if(action.payload.rememberMe) localStorage.setItem("user" , JSON.stringify(state)) ;
            return state 
        }
    }
})
export default userSlice.reducer ; 
export const {login,logout} = userSlice.actions  