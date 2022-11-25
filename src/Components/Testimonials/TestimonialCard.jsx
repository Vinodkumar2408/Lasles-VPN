import React from 'react'
import './TestimonialCard.css'
import { AiFillStar } from 'react-icons/ai';

function TestimonialCard(props) {
  return (
    <div className='mycard'>
      <div className='userDetails'>

        <div className='userName_Image'>
          <img src={props.user} />
          <div className='userName'>
            <h3>{props.userName}</h3>
            <p>{props.userLocation}</p>
          </div>
        </div>
        <div className='review'>
          <div className='reviewPoints'>
            <p>4.5</p>
          </div>
          <div className='reviewStar'>
            <AiFillStar />
          </div>
        </div>
      </div>
      <div className='userComments'>
        <p>{props.userComments}</p>
      </div>
    </div>
  )
}

export default TestimonialCard