import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
// import './Register.css'

export default function Register() {
  const history = useHistory()
  const [data, setData] = useState({
      name: '',
      lastname: '',
      email: '',
      password: ''
  })

  const handleChange = (event) => {
      setData({...data, [event.target.name]: event.target.value})
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      if (!data.name) {
          alert('Faltan datos')
      } else {
          history.push('/dashboard')
      }
  }

  return (
    <div className='OuterContainer'>
            <div className='InnerContainer'>
                <h1 className='heading'>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                        name='name'
                        className='Input' 
                        type='text'
                        placeholder='Name'
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                        name='lastname'
                        className='Input mt-20' 
                        type='text'
                        placeholder='Lastname'
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                        name='email'
                        className='Input mt-20'
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
                    <button className='button mt-20' type="submit">Register</button>
                </form>
            </div>
        </div>
  )
}

