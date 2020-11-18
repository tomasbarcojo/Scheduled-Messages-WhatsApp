import React, { useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { userLogin } from '../../actions/index'
import './Home.css'

export default function Home() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [data, setData] = useState ({
        email: '',
        password: '',
    })


    const handleChange = (event) => {
        setData({...data, [event.target.name]: event.target.value})
        console.log(event.target.name, event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(userLogin(data, history))
    }

    return (
        <div className='OuterContainer'>
            <div className='InnerContainer'>
                <h1 className='heading'>Welcome!</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <div>
                        <input
                        name='email'
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