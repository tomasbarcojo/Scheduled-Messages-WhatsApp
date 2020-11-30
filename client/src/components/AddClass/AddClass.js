import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from '../NavBar/NavBar'
import { newClass } from '../../actions/classes'
import './AddClass.css'

export default function AddClass() {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const user = useSelector(state => state.user)
    const [classData, setclassData] = useState({
        description: '',
        url: '',
        start: '',
        end: '',
        userId: user.id
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(newClass(classData, token))
    }

    const handleChange = (event) => {
        setclassData({...classData, [event.target.name]: event.target.value})
    }

    return (
        <div>
            <NavBar />
            <div className='OuterContainerNavBar'>
                <div className='InnerContainerNavBar shadow'>
                <h1>Add new class</h1>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className='dataRow mt-20'>
                            <p>Description:</p>
                            <input
                            name='description'
                            className='Input'
                            type='text'
                            placeholder='Description'
                            onChange={handleChange}
                            />
                        </div>
                        {/* {showErr && errors.firstName && (<p className='danger'>{errors.firstName}</p>)} */}
                        <div className='dataRow'>
                            <p>Url:</p>
                            <input
                            name='url'
                            className='Input'
                            type='text'
                            placeholder='URL'
                            onChange={handleChange}
                            />
                        </div>
                        {/* {showErr && errors.lastName && (<p className='danger'>{errors.lastName}</p>)} */}
                        <div className='dataRow'>
                            <p>Starting day and time:</p>
                            <input
                            name='start'
                            className='Input'
                            type='datetime-local'
                            placeholder='Start time'
                            onChange={handleChange}
                            />
                        </div>
                        {/* {showErr && errors.email && (<p className='danger'>{errors.email}</p>)} */}
                        <div className='dataRow'>
                            <p>Test:</p>
                            <input
                            name='end'
                            className='Input' 
                            type='datetime-local' 
                            placeholder='End time'
                            onChange={handleChange}
                            />
                        </div>
                        {/* {showErr && errors.password && (<p className='danger'>{errors.password}</p>)} */}
                        <button className='buttonRegister mt-20' type="submit">Add</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
