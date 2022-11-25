import React from 'react'
import './Usage.css'
import userIcon from "../../Assets/user.svg";
import locationIcon from "../../Assets/location.svg";
import serverIcon from "../../Assets/server.svg";

function Usage() {
    return (
        <>
            <div className='usageContainer'>
                <div className='usageContent'>
                    <div className='rightBorder'>
                        <div className="detail">
                            <div className="icon">
                                <img src={userIcon} alt="icon" />
                            </div>
                            <div className="details">
                                <h4>90+</h4>
                                <p>Users</p>
                            </div>
                        </div>
                    </div>
                    <div className='rightBorder'>
                    <div className="detail">
                        <div className="icon">
                            <img src={locationIcon} alt="icon" />
                        </div>
                        <div className="details">
                            <h4>30+</h4>
                            <p>Locations</p>
                        </div>
                    </div>
                </div>
                <div className="detail">
                    <div className="icon">
                        <img src={serverIcon} alt="icon" />
                    </div>
                    <div className="details">
                        <h4>50+</h4>
                        <p>Servers</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Usage