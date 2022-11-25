import React from 'react'
import './ChooseYourPlan.css'
import pricing from "../../Assets/Pricing.svg";

function ChooseYourPlan() {
    return (
        <div className='choosePlanContainer'>
            <div className='choosePlanHeading'>
                <h1>Choose Your Plan</h1>
            </div>
            <div className='choosePlanSubHeading'>
                <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
            </div>
            <div className='Pricing'>
                <div className='priceCard'>
                    <img src={pricing} alt="" />
                    <h4>Free Plan</h4>
                    <ul className="planFeatures">
                        <li>Unlimited Bandwitch</li>
                        <li>Encrypted Connection</li>
                        <li>No Traffic Logs</li>
                        <li>Works on All Devices</li>
                    </ul>
                    <div className='select'>
                        <h3>Free</h3>
                        <button className='btn_secondary'>Select</button>
                    </div>
                </div>
                <div className='priceCard'>
                    <img src={pricing} alt="" />
                    <h4>Standard Plan</h4>
                    <ul className="planFeatures">
                        <li>Unlimited Bandwitch</li>
                        <li>Encrypted Connection</li>
                        <li>Yes Traffic Logs</li>
                        <li>Works on All Devices</li>
                        <li>Connect Anyware</li>
                    </ul>
                    <div className='select'>
                        <h3>$9 <span>/ mo</span></h3>
                        <button className='btn_secondary'>Select</button>
                    </div>
                </div>
                <div className='priceCard'>
                    <img src={pricing} alt="" />
                    <h4>Premium Plan</h4>
                    <ul className="planFeatures">
                        <li>Unlimited Bandwitch</li>
                        <li>Encrypted Connection</li>
                        <li>No Traffic Logs</li>
                        <li>Works on All Devices</li>
                        <li>Connect Anyware</li>
                        <li>Get New Features</li>
                    </ul>
                    <div className='select'>
                        <h3>$12 <span>/ mo</span></h3>
                        <button className='btn_secondary'>Select</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseYourPlan