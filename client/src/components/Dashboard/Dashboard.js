import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Dashboard.css'
import NavBar from './NavBar/NavBar'

export default function Dashboard() {
    const classes = useSelector(state => state.user)

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <NavBar />
        </div>
    )
}
