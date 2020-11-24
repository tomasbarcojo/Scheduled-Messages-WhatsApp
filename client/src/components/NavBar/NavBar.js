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
                    <li><a href='/addclass'>Add class</a></li>
                    <li><a href='#'>Profile</a></li>
                </ul>
            </nav>
            <a className='cta' href='#'><button onClick={e => handleLogOut()} className='buttonDashboard'>Log out</button></a>
        </header>
    )
}
