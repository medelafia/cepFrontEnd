import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name : "mohamed" , 
    accountType : "PROVIDER" , 
    providerType : "AIRLINE"
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