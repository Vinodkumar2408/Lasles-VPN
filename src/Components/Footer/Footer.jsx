import React from 'react'
import './Footer.css'
import logo from "../../Assets/Logo.svg";
import facebook from "../../Assets/Facebook.svg";
import instagram from "../../Assets/Instagram.svg";
import twitter from "../../Assets/Twitter.svg";

function Footer() {
    return (
        <footer>
            <div className='FooterContainer'>
                <div className='footerLeft'>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <p><span>LaslesVPN</span> is a private virtual network that <br />has unique features and has high security.</p>
                    <div className='socialIcons'>
                        <img src={facebook} alt="facebook" />
                        <img src={twitter} alt="twitter" />
                        <img src={instagram} alt="instagram" />
                    </div>
                    <div className="copyRightText">
                        ©2020Lasles<span>VPN</span>
                    </div>
                </div>
                <div className='footerRight'>
                    <div className="product">
                        <h4>Product</h4>
                        <p>Download </p>
                        <p>Pricing</p>
                        <p>Locations</p>
                        <p>Server</p>
                        <p>Countries</p>
                        <p>Blog</p>
                    </div>
                    <div className="engage">
                        <h4>Engage</h4>
                        <p>Download </p>
                        <p>Pricing</p>
                        <p>Locations</p>
                        <p>Server</p>
                        <p>Countries</p>
                        <p>Blog</p>
                    </div>
                    <div className="earnMoney">
                        <h4>Earn Money</h4>
                        <p>Download </p>
                        <p>Pricing</p>
                        <p>Locations</p>
                        <p>Server</p>
                        <p>Countries</p>
                        <p>Blog</p>
                    </div>
                </div>

            </div>
            <h4 className='Lalit'>Developed with ❤️ by 👉 <a href="https://lalitkumarportfolio.netlify.app/" target="_blank">Lalit Kumar</a></h4>
        </footer>
    )
}

export default Footer