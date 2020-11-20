import React from 'react'
import './NavBar.css'
import img from '../../../Images/GoogleMeet.svg'

export default function NavBar() {
    return (
        <header>
            <img className='logo' src={img} alt='logo' />
            <nav>
                <ul className='nav_links'>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Add class</a></li>
                    <li><a href='#'>Profile</a></li>
                </ul>
            </nav>
            <a className='cta' href='#'><button className='buttonDashboard'>Log out</button></a>
        </header>
    )
}
