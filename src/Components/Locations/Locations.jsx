import React from 'react'
import './Locations.css'
import global from "../../Assets/Global.svg";

function Locations() {
    return (
        <div className='LocationContainer'>
            <div className="LocationHeading">
                <h1>Huge Global Network <br/>of Fast VPN</h1>
            </div>
            <div className='LocationSubHeading'>
                <p>See <span>LaslesVPN</span> everywhere to make it easier for you when you move <br/>locations.</p>
            </div>
            <div className='map'>
                <img src={global} alt=""/>
            </div>
        </div>
    )
}

export default Locations