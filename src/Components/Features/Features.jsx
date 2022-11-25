import React from 'react'
import './Features.css'
import featureImage from "../../Assets/featureImage.svg";
import pointer from "../../Assets/pointer.svg";

function Features() {
  return (
    <div className='FeaturesContainer'>
        <div className='FeatureImage'>
            <img src={featureImage} alt='Feature' />
        </div>
        <div className='FeatureText'>
            <div className='FeatureHeading'>
                <h1>We Provide Many Features You Can Use</h1>
            </div>
            <div className='FeatureSubHeading'>
                <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
            </div>
            <div className='FeaturesPoints'>
                <div className="feature"><img src={pointer} alt="pointer"/>Powerfull online protection.</div>
                <div className="feature"><img src={pointer} alt="pointer"/>Internet without borders.</div>
                <div className="feature"><img src={pointer} alt="pointer"/>Supercharged VPN</div>
                <div className="feature"><img src={pointer} alt="pointer"/>No specific time limits.</div>
            </div>
        </div>
    </div>
  )
}

export default Features