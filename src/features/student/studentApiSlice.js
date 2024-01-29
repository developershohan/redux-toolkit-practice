
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const createStudent = createAsyncThunk("Student/createStudent", async (data) => {
    try {
        const res = await axios.post(`http://localhost:6060/students`, data)
        return res.data
    } catch (error) {
        throw new Error(error.message)
    }
})

export const getStudent = createAsyncThunk("student/getStudent", async (data) => {
    try {
        const res = await axios.get(`http://localhost:6060/students`)
        return res.data
    } catch (error) {
        throw new Error(error.message)

    }
})