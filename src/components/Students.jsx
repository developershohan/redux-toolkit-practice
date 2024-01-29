<<<<<<< HEAD
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createStudent, getStudent } from '../features/student/studentApiSlice'
import { useSelector } from 'react-redux'
import { studentSelector } from '../features/student/studentSlice'
=======
import  { useState } from 'react'
import {useDispatch} from 'react-redux'
import { createstudent } from '../features/student/studentApiSlice'
>>>>>>> 6a5586cb1d6005b6c752ed8d0c08affc6ede7f40



const Students = () => {
    const {loading} = useSelector(studentSelector)


    const dispatch = useDispatch()
    const [input, setInput] = useState({
        name: "",
        roll: "",
        email: "",
        photo: ""
    })
useEffect(() => {
dispatch(getStudent())
}, [dispatch])

    const handleInputChange = (e) => {
        setInput((presState) => ({
            ...presState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit =()=>{
        dispatch(createStudent(input))
    }

    return (
        <div >
            {loading && `<div className="loading">Loading...</div>`}
            <input type="text" placeholder='name' name='name' value={input.name} onChange={handleInputChange} />
            <input type="text" placeholder='roll' name='roll' value={input.roll} onChange={handleInputChange} />
            <input type="text" placeholder='email' name='email' value={input.email} onChange={handleInputChange} />
            <input type="text" placeholder='photo' name='photo' value={input.photo} onChange={handleInputChange} />
            <button onClick={handleSubmit}>add</button>
        </div>
    )
}

export default Students