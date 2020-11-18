import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import './Home.css'

export default function Home() {
    const [data, setData] = useState ({
        name: '',
        lastname: '',
    })

    const dispatch = useDispatch()

    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div className='OuterContainer'>
            <div className='InnerContainer'>
                <h1 className='heading'>Welcome!</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <div>
                        <input
                        name='name'
                        className='Input' 
                        type='text'
                        placeholder='Email'
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                        name='password'
                        className='Input mt-20' 
                        type='password' 
                        placeholder='Password'
                        onChange={handleChange}
                        />
                    </div>
                    <button className='button mt-20' type="submit">Log In</button>
                </form>
                <div className='CreateAccount mt-20'>
                <Link to='/register'>
                    <span>Create account</span>
                </Link>
                </div>
            </div>
        </div>
    )
}