import { createSlice } from "@reduxjs/toolkit"
import { createStudent, deleteStudent, getStudent } from "./studentApiSlice"

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
            state.loading = true
        }).addCase(getStudent.fulfilled,(state,action)=>{
            state.loading =false,
            state.message = "get all data",
            state.students = [...action.payload]
        }).addCase(getStudent.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.error.message
        }).addCase(deleteStudent.pending,(state)=>{
            state.loading = true
            
        }).addCase(deleteStudent.fulfilled,(state,action)=>{
            state.loading = false,
            state.message = `student deleted`,
            state.students = state.students.filter(data=>data.id !== action.payload.id)
        }).addCase(deleteStudent.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.error.message
        })
    }
})

export const studentSelector = (state) => state.student

export const { } = studentSlice.actions

export default studentSlice.reducer

