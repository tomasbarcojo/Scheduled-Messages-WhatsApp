import React from 'react'
import './NavBar.css'
import img from '../../Images/GoogleMeet.svg'
import { useDispatch } from 'react-redux'
import { userLogout } from '../../actions/user'
import { useHistory, Link } from 'react-router-dom'

export default function NavBar() {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogOut = () => {
        dispatch(userLogout())
        history.push('/')
    }

    return (
        <header>
            <img className='logo' src={img} alt='logo' />
            <nav>
                <ul className='nav_links'>
                    <Link to='/dashboard'>
                    <li><button className='buttonNavBar'>About</button></li>
                    </Link>
                    <Link to='/addclass' >
                    <li><button className='buttonNavBar' >Add class</button></li>
                    </Link>
                    <Link to='/profile' >
                    <li><button className='buttonNavBar' >Profile</button></li>
                    </Link>
                </ul>
            </nav>
            <button onClick={e => handleLogOut()} className='buttonDashboard'>Log out</button>
        </header>
    )
}
