import React, { useEffect } from 'react'
import './Dashboard.css'
import NavBar from '../NavBar/NavBar'
import Classes from './Classes/Classes'
import { useDispatch, useSelector } from 'react-redux'
import { getClasses } from '../../actions/classes'

export default function Dashboard() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    const token = localStorage.getItem('token')

    useEffect(() => {
        dispatch(getClasses(user.id, token))
      }, [])

    return (
        <div>
            <NavBar />
            <Classes />
        </div>
    )
}
