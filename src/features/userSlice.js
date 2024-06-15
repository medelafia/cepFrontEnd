import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    id : 3 , 
    username : "mohamed" , 
    email : "email@gmail.com" , 
    accountType : "ADMIN" , 
    providerType : "TRAVEL_AGENCY"
}
const userSlice = createSlice({
    name : "user" , 
    initialState ,
    reducers : {
        logout : (state) => {
            return null
        } , 
        login : (state , action) => {
            console.log(action.payload)
            state = action.payload ; 
            return state 
        }
    }
})
export default userSlice.reducer ; 
export const {login,logout} = userSlice.actions  