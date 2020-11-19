import React from 'react'

export default function NavBar() {
    return (
        <div>
            <nav>
                <ul className='nav_links'>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>Projects</a></li>
                    <li><a href='#'>About</a></li>
                </ul>
            </nav>
            <a className='cta' href='#'><button>Contact</button></a>
        </div>
    )
}
