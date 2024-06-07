import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    username : "mohamed" , 
    accountType : "ADMIN", 
    providerType : "AIRLINE" , 
    email : "mohamedelafia@gmail.com" , 
    tel : "0658045721" , 
    userInfo : {
        firstName : "mohamed" , 
        lastName : "el afia" , 
        country : "morrocoo" , 
        age : 20 ,
        gender : "m" 
    }
}
const userSlice = createSlice({
    name : "user" , 
    initialState ,
    reducers : {
        logout : (state) => {
            return null
        } , 
        login : (state , action) => {
            state = action.payload ; 
            return state 
        }
    }
})
export default userSlice.reducer ; 
export const {login,logout} = userSlice.actions  