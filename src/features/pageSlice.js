import { createSlice } from "@reduxjs/toolkit"
export const ALERT_TYPE = {
    ERROR : "error" , 
    SUCCESS : "success" 
}
const intialState = {
    alert : {
        showAlert : false , 
        alertText : null , 
        alertType : null 
    } , 
    confirm : {
        open : false , 
        title : null , 
        content : null ,
        confirmCallBack : null 
    }
}
const pageSlice = createSlice({
    name : "page" , 
    initialState : intialState , 
    reducers : {
        showAlert : (state , action) =>{
            state.alert = action.payload ; 
            return state
        } , 
        hideALert : (state , action) => {
            state.alert = {
                showAlert : false , 
                alertType : null , 
                alertText : null 
            }
            return intialState 
        } , 
        showConfirm : (state , action) => {
            state.confirm = {
                open : true , 
                title : action.payload.title , 
                content : action.payload.content , 
                confirmCallBack : action.payload.callBack
            }
            return state 
        } , 
        closeCofirm : (state , action )=>{
            return intialState
        }
    }
})
export default pageSlice.reducer 
export const {showAlert , hideAlert , showConfirm , closeCofirm} = pageSlice.actions  