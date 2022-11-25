import React from 'react'
import './Companies.css'
import netflix from "../../Assets/Netflix.svg";
import reditt from "../../Assets/Reditt.svg";
import amazon from "../../Assets/Amazon.svg";
import discord from "../../Assets/Discord.svg";
import spotify from "../../Assets/Spotify.svg";

function Companies() {
  return (
    <div className='CompaniesContainer'>
        <img src={netflix} alt="" />
        <img src={reditt} alt="" />
        <img src={amazon} alt="" />
        <img src={discord} alt="" />
        <img src={spotify} alt="" />
    </div>
  )
}

export default Companies