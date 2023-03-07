import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logo.png';
import './Navbar.css';

const links = [
  { path: 'missions', text: 'Missions' },
  { path: 'rockets', text: 'Rockets' },
  { path: 'profile', text: 'My Profile' },
];

const Navbar = () => (
  <nav>
    <NavLink to="/">
      <img src={Logo} alt="Logo" />
    </NavLink>
    <h1>Space Travelers`&apos;` Hub</h1>
    <ul>
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
