import React, { useState } from 'react'
import { useDisPatch } from 'react-redux'
import { createstudent } from '../features/student/studentApiSlice'



const Students = () => {


    const dispatch = useDisPatch()
    const [input, setInput] = useState({
        name: "",
        roll: "",
        email: "",
        photo: ""
    })

    const handleInputChange = (e) => {
        setInput((presState) => ({
            ...presState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit =()=>{
        dispatch(createstudent(input))
    }

    return (
        <div >
            <input type="text" placeholder='name' name='name' value={input.name} onChange={handleInputChange} />
            <input type="text" placeholder='roll' name='roll' value={input.roll} onChange={handleInputChange} />
            <input type="text" placeholder='email' name='email' value={input.email} onChange={handleInputChange} />
            <input type="text" placeholder='photo' name='photo' value={input.photo} onChange={handleInputChange} />
            <button onClick={handleSubmit}>add</button>
        </div>
    )
}

export default Students