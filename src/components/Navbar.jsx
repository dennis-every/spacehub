import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logo.png';
import '../styles/Navbar.css';

const links = [
  { path: 'missions', text: 'Missions' },
  { path: 'rockets', text: 'Rockets' },
  { path: 'profile', text: 'My Profile' },
];

const Navbar = () => (
  <nav>
    <NavLink to="/">
      <div className="nav_index">
        <img src={Logo} alt="Logo" className="nav_img" />
        <h1 className="nav_title">Space Travelers&apos; Hub</h1>
      </div>
    </NavLink>
    <ul className="nav_list">
      {links.map((link) => (
        <li key={link.text} className="nav_list_list">
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
