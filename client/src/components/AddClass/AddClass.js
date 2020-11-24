import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import NavBar from '../NavBar/NavBar'
import { newClass } from '../../actions/classes'
import './AddClass.css'

export default function AddClass() {
    const dispatch = useDispatch()
    const [classData, setclassData] = useState({
        description: '',
        url: '',
        start: '',
        end: '',
    })

    const handleSubmit = () => {

        dispatch(newClass())
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
                        <div>
                            <input
                            name='description'
                            className='Input' 
                            type='text'
                            placeholder='Description'
                            onChange={handleChange}
                            />
                        </div>
                        {/* {showErr && errors.firstName && (<p className='danger'>{errors.firstName}</p>)} */}
                        <div>
                            <input
                            name='url'
                            className='Input mt-20'
                            type='text'
                            placeholder='URL'
                            onChange={handleChange}
                            />
                        </div>
                        {/* {showErr && errors.lastName && (<p className='danger'>{errors.lastName}</p>)} */}
                        <div>
                            <input
                            name='start'
                            className='Input mt-20'
                            type='text'
                            placeholder='Start time'
                            onChange={handleChange}
                            />
                        </div>
                        {/* {showErr && errors.email && (<p className='danger'>{errors.email}</p>)} */}
                        <div>
                            <input
                            name='end'
                            className='Input mt-20' 
                            type='password' 
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
