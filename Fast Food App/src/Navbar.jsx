import React from 'react'
import blogo from './asset/blogo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navbar">
            <div className="leftside">
                <img src={blogo} />
            </div>
            <div className="rightside">
                <Link to='/'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact </Link>
            </div>
        </div>
    )
}

export default Navbar