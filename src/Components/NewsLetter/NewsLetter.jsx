import React from 'react'
import './NewsLetter.css'

function NewsLetter() {
    return (
        <div className='NewsLetterContainer'>
            <div className='NewsLetterText'>
                <h1>Subscribe Now for <br />Get Special Features!</h1>
                <p>Let's subscribe with us and find the fun.</p>
            </div>
            <div className='CTA'>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter