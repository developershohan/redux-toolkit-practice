import { createSlice } from "@reduxjs/toolkit"
import { createStudent, getStudent } from "./studentApiSlice"

const studentSlice = createSlice({
    name: "Student",
    initialState: {
        students: [],
        loading: false,
        error: null,
        message: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createStudent.pending, (state) => {
            state.loading = true
        }).addCase(createStudent.fulfilled, (state, action) => {
            state.loading = false,
                state.message = "student created successfully",
                state.students = [...state.students, action.payload]
        }).addCase(createStudent.rejected, (state, action) => [
            state.loading = false,
            state.error = action.error.message
        ]).addCase(getStudent.pending,(state)=>{
            state.loading = false
        }).addCase(getStudent.fulfilled,(state,action)=>{
            state.loading =false,
            state.message = "get all data",
            state.students = [...action.payload]
        })
    }
})

export const studentSelector = (state) => state.student

export const { } = studentSlice.actions

export default studentSlice.reducer

