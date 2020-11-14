import React from 'react'
import './Home.css'

export default function Home() {
    return (
        <div className='OuterContainer'>
            <div className='InnerContainer'>
                <h1 className='heading'>Sign In</h1>
                <div className='Input'>
                    <span className='descInputs'>User:</span>
                    <input className='Input' type='text' placeholder='Type something'/>
                </div>
            </div>
        </div>
    )
}