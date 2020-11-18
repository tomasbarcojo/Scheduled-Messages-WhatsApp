import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../../actions'

// import './Register.css'

export default function Register() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [errors, setErrors] = useState({})
  const [data, setData] = useState({
      name: '',
      lastname: '',
      email: '',
      password: ''
  })

  const handleChange = (event) => {
      setData({...data, [event.target.name]: event.target.value})
      setErrors(validate({ ...data, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      if (!data.name || !data.lastname || !data.email || !data.password) {
          alert('Faltan datos')
      } else {
          console.log(data)
          dispatch(addUser(data))
          history.push('/')
      }
  }

  function validate(data) {
    let errors = {};
    if (!data.firstName  || data.firstName.length === 0) {
      errors.firstName = 'El nombre es requerido';
    }

    if (!data.lastName || data.lastName.length === 0) {
      errors.lastName = 'El apellido es requerido';
    }

    if (!data.email  || data.email.length === 0) {
      errors.email = 'Email requerido';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email invalido';
    }
    
    if (!data.password  || data.password.length === 0) {
      errors.password = 'Contraseña requerida';
    } else if (!/(?=.*[0-9])/.test(data.password)) {
      errors.password = 'Contraseña invalida';
    } else if(data.password.length < 8){
      errors.password = 'La contraseña debe tener 8 o más caracteres'
    }
    return errors
  }

  return (
    <div className='OuterContainer'>
            <div className='InnerContainer'>
                <h1 className='heading'>Sign In</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <div>
                        <input
                        name='name'
                        className='Input' 
                        type='text'
                        placeholder='Name'
                        onChange={handleChange}
                        />
                    </div>
                    {errors.firstName && (<p className='danger'>{errors.firstName}</p>)}
                    <div>
                        <input
                        name='lastname'
                        className='Input mt-20' 
                        type='text'
                        placeholder='Lastname'
                        onChange={handleChange}
                        />
                    </div>
                    {errors.lastName && (<p className='danger'>{errors.lastName}</p>)}
                    <div>
                        <input
                        name='email'
                        className='Input mt-20'
                        type='text'
                        placeholder='Email'
                        onChange={handleChange}
                        />
                    </div>
                    {errors.email && (<p className='danger'>{errors.email}</p>)}
                    <div>
                        <input
                        name='password'
                        className='Input mt-20' 
                        type='password' 
                        placeholder='Password'
                        onChange={handleChange}
                        />
                    </div>
                    {errors.password && (<p className='danger'>{errors.password}</p>)}
                    <button className='button mt-20' type="submit">Register</button>
                </form>
            </div>
        </div>
  )
}

