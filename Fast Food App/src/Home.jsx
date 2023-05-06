import React from 'react'
import { Link } from 'react-router-dom'
import banner from './asset/burger.jpg'
import './Home.css'

function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${banner})`}}>
            <div className='headercontainer'>
                <h1>The Burger Palace</h1>
                <p className='my'>LET'S GET THIS PATTY STARTED</p>
                <Link to='/menu'>
                    <button>
                        ORDER NOW
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home