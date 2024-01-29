
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createStudent, deleteStudent, getStudent } from '../features/student/studentApiSlice'
import { useSelector } from 'react-redux'
import { studentSelector } from '../features/student/studentSlice'



const Students = () => {
    const { loading, students } = useSelector(studentSelector)


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


    const handleSubmit = () => {
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
            {students && students.map((item, index) => {
                return <ul key={index}>
                    <li>{item.name} - {item.roll} - {item.email} - <img style={{ width: "100px", height: "100px" }} src={item.photo} alt="" /> <button onClick={()=>dispatch(deleteStudent(item.id))}>x</button> </li>

                </ul>
            })}

        </div>
    )
}

export default Students