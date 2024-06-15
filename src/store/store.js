import { configureStore } from "@reduxjs/toolkit"
import pageSlice from "../features/pageSlice"
import userSlice from "../features/userSlice"

export const store = configureStore({
    reducer : {
        user : userSlice , 
        page : pageSlice
    }
})

