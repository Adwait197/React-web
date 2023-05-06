import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import Logo from './assets/logo.png'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='leftside'>
            <img src={Logo} />
            </div>
            <div className='rightside'>
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/register">Register</Link>
            </div>

        </div>

    )
}

export default Navbar