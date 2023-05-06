import React from 'react'
import Insta from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import FB from '@mui/icons-material/Facebook'
import Linkedin from '@mui/icons-material/LinkedIn'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='social'>
        <Insta /> <Twitter /> < FB /> <Linkedin />
      </div>
        <p className="qw"> &copy; 2023 Adwait-website</p>
    </div>
  )
}

export default Footer