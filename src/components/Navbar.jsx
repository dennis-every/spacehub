import React from 'react';
import Logo from '../img/logo.png';

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt='Logo' />
      <h1>Space Travelers' Hub</h1>
      <ul>
        <li>Rockets</li>
        <li>Missions</li>
        <li>My Profile</li>
      </ul>
    </nav>
  )
}

export default Navbar