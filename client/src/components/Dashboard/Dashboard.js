import React, { useEffect } from 'react'
import './Dashboard.css'
import NavBar from '../NavBar/NavBar'
import Classes from './Classes/Classes'
import { useDispatch, useSelector } from 'react-redux'
import { getClasses } from '../../actions/classes'
import { useLocation } from 'react-router-dom'

export default function Dashboard() {
    const url = useLocation()
    const dispatch = useDispatch();
    const token = localStorage.getItem('token')
    const user = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getClasses(user.id, token))
      }, [url.pathname])

    return (
        <div>
            <NavBar />
            <Classes />
        </div>
    )
}
