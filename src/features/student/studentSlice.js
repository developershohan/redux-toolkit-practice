import {createSlice} from "@reduxjs/toolkit"

const studentslice = createSlice({
    name: "student",
    initialState: {
        students:[]
    },
    reducers: {},
    extraReducers:(builder)=>{}
})
export const {} = studentslice.actions

export default studentslice.reducer