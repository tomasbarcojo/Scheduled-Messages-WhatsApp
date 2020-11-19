import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Dashboard() {
    const classes = useSelector(state => state.user)

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <h1>Holas</h1>
        </div>
    )
}
