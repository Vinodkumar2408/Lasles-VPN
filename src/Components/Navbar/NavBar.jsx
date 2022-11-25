// import React from 'react'
// import './NavBar.css';
import logo from "../../Assets/Logo.svg";

// function NavBar() {
//   return (
//     <nav className='NavBarContainer'>
//       <div className='navBar'>
//         <div className='logo'>
//           <img src={logo} alt='logo'></img>
//         </div>
//         <ul className='menuItems'>
//           <li className='menu'>About</li>
//           <li className='menu'>Features</li>
//           <li className='menu'>Pricing</li>
//           <li className='menu'>Testimonials</li>
//           <li className='menu'>Help</li>
//         </ul>
//         <div className='Btn'>
//           <button className='signIn'>Sign In</button>
//           <button className='btn_secondary'>Sign Up</button>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default NavBar

import React, { useState } from "react";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";




const NavBar = () => {

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src={logo} />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li><p>About</p></li>
            <li><p>Features</p></li>
            <li><p>Pricing</p></li>
            <li><p>Testimonials</p></li>
            <li><p>Help</p></li>

          </ul>
        </div>
        <div className="responsive">
        <div className="Btn">
            <button className='signIn'>Sign In</button>
            <button className='btn_secondary'>Sign Up</button>
          </div>
          <div className="hamburger-menu">
            <span onClick={() => setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu /></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;