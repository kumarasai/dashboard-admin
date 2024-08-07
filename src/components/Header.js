import React from 'react';
import { FaSearch, FaEnvelope, FaBell } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <input type="text" placeholder="Search" className="search-bar" />
      <div className="header-icons">
        <FaEnvelope />
        <FaBell />
        <img src="user-profile.jpg" alt="Profile" className="profile-pic" />
      </div>
    </div>
  );
};

export default Header;
