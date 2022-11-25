import React from 'react'
import TestimonialCard from './TestimonialCard'
import './Testimonials.css'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import user1 from "../../Assets/User1.png";
import user2 from "../../Assets/User2.png";
import user3 from "../../Assets/User3.png";

function Testimonials() {

    const btnpressprev = () => {
        let box = document.querySelector(".product-container");
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width/1;
        console.log(width);
    };

    const btnpressnext = () => {
        let box = document.querySelector(".product-container");
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width/1;
        console.log(width);
    };

    return (
        <div className='TestimonialsContainer'>
            <div className='TestimonialsHeading'>
                <h1>Trusted by Thousands of <br />Happy Customer</h1>
            </div>

            <div className='TestimonialSubHeading'>
                <p>These are the stories of our customers who have joined us with great <br /> pleasure when using this crazy feature.</p>
            </div>

            <div className="product-carousel">
                <div className="product-container">
                    <TestimonialCard 
                    user={user1}
                    userComments = {`“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.`}
                    userName = {`Viezh Robert`}
                    userLocation ={`Warsaw, Poland`}/>
                    <TestimonialCard
                    user={user2}
                    userComments = {`“I like it because I like to travel far and still can connect with high speed.”`}
                    userName ={`Yessica Christy`}
                    userLocation ={`Shanxi, China`}/>
                    <TestimonialCard
                    user={user3}
                    userComments = {`“This is very unusual for my business that currently requires a virtual private network that has high security.”`}
                    userName = {`Kim Young Jou`}
                    userLocation ={`Seoul, South Korea`}/>
                </div>
                <div className='btn'>
                    <button className="pre-btn" onClick={btnpressprev}><span><FiArrowLeft/></span></button>
                    <button className="next-btn" onClick={btnpressnext}><span><FiArrowRight/></span></button>
                </div>
            </div>

        </div>
    )
}

export default Testimonials