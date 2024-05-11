import { createSlice } from "@reduxjs/toolkit";

const initialState = null
const userSlice = createSlice({
    name : "user" , 
    initialState ,
    reducers : {
        logout : (state) => {
            console.log("logout")
            state = null ; 
        } , 
        login : (state , action) => {
            state.username = action.payload.username 
            state.account_type = "costumer"
        }
    }
})
export default userSlice.reducer ; 
export const {login,logout} = userSlice.actions  