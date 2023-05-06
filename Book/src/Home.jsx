import React from 'react'
import backpic from './assets/homeb.jpg'
import './home.css'

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${backpic})` }}>
            <div className="header">
                <h1 className='my'>Book Store</h1>
                <p className='qw'>Read Think Grow</p>
            </div>
        </div>
    )
}

export default Home