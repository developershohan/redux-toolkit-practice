import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const createstudent = createAsyncThunk("student/createstudent", async(data)=>{
try {
     const res = await axios.post("http://localhost:6060/students",data)
console.log(res.data);
} catch (error) {
    console.log(error.message);
}
})