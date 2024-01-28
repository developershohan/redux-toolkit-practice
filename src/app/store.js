import {configureStore}  from "@reduxjs/toolkit"
import studentReducer from "../features/student/studentSlice"
const store = configureStore({
    reducer:{
        student: studentReducer
    },
    middleware: (getDefaultMiddleWares)=> getDefaultMiddleWares()
})
export default store