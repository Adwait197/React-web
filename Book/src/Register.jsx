import React from 'react'
import './register.css'
import Log from './assets/log.jpg'

function Register() {
    return (

        <div className='register' style={{ backgroundImage: `url(${Log})` }}>
            <div className='box'>
                <h4 className='title'>Register</h4>
                <div>
                    <div className='row'>
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder='Enter your username' />
                    </div>
                    <div className='row'>
                        <label>Password</label>
                        <input
                            type="text"
                            placeholder='Enter your password' />
                        <button type="submit"> Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Register