import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter";
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon />
      </div>
      <p className='we'> &copy; 2023 Adwait-website</p>
    </div>
  )
}

export default Footer