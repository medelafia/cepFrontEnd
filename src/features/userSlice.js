import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    username : "mohamed" , 
    email : "email@gmail.com" , 
    accountType : "ADMIN" , 
    providerType : "CAR_AGENCY"
}
const userSlice = createSlice({
    name : "user" , 
    initialState ,
    reducers : {
        logout : (state) => {
            return null
        } , 
        login : (state , action) => {
            state = action.payload.data ; 
            return state 
        }
    }
})
export default userSlice.reducer ; 
export const {login,logout} = userSlice.actions  