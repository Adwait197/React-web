import React from 'react'
import Last from './asset/last.jpg'
import './Contact.css'

function Contact() {
    return (
        <div className='contact'>
            <div className='left' style={{ backgroundImage: `url(${Last})` }}></div>
            <div className='right'>
                <h1>Contact us</h1>

                <form id="contact-form" method='POST'>
                    <label htmlFor='name'>Full Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name here" />
                    <label htmlFor='email'>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email here" />
                    <label htmlFor='message'>Message</label>
                    <textarea
                        placeholder="Enter your message..."
                        name="message">
                    </textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact