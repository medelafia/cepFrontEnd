import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    id : 2, 
    username : "mohamed" , 
    email : "email@gmail.com" , 
    accountType : "PROVIDER" , 
    providerType : "CAR_AGENCY" , 
    profileImage : {
        url : "http://res.cloudinary.com/dl0zud05l/image/upload/v1718730001/db3dgdhqfybcgrvgof83.jpg"
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
        } , 
        update : (state , action ) => {
            state[action.payload.item] = action.payload.value 
            return state 
        }
    }
})
export default userSlice.reducer ; 
export const {login,logout, update} = userSlice.actions  