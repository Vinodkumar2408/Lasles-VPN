import React from 'react'
import './Hero.css'
import heroImage from "../../Assets/HeroImage.svg";

function Hero() {
  return (
    <div className='heroContainer'>
        <div className='heroContent'>
            <div className='heading'>
                <h1>Want anything to be easy with <span>LaslesVPN.</span></h1>
            </div>
            <div className='subHeading'>
                <p>Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> <br/>discover interesting features from us.</p>
            </div>
            <div className='CTA'>
                <div className='blur'></div>
                <button>Get Started</button>
            </div>
        </div>
        <div className='heroImage'>
            <img src={heroImage} alt="" />
        </div>
    </div>
  )
}

export default Hero