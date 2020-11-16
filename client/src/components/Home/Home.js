import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='OuterContainer'>
            <div className='InnerContainer'>
                <h1 className='heading'>Welcome!</h1>
                <div>
                    <input
                    className='Input' 
                    type='text'
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input 
                    className='Input mt-20' 
                    type='password' 
                    placeholder='Password'
                    onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <Link /*onClick={dispatch()}*/ to='/dashboard'>
                    <button className='button mt-20' type="submit">Log In</button>
                </Link>
            </div>
        </div>
    )
}