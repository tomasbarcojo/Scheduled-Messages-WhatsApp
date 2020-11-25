import React, { useEffect } from 'react'
import './Dashboard.css'
import NavBar from '../NavBar/NavBar'
import Classes from './Classes/Classes'
import { useDispatch, useSelector } from 'react-redux'
import { getClasses } from '../../actions/classes'
import { getUser } from '../../actions/user'

export default function Dashboard() {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token')
    const user = localStorage.getItem('userData')

    useEffect(() => {
        dispatch(getUser(user.id, token))
        dispatch(getClasses(user.id, token))
      }, [])

    return (
        <div>
            <NavBar />
            <Classes />
        </div>
    )
}
