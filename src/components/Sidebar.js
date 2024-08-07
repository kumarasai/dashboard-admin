import React from 'react';
import { FaHome, FaChartBar, FaBox, FaUser, FaBars } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar({ isCollapsed, toggleSidebar }) {
  return (
    <div className={`sidebar bg-dark text-light p-3 ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <div className="sidebar-item"><FaHome /> {!isCollapsed && <span>Home</span>}</div>
      <div className="sidebar-item"><FaChartBar /> {!isCollapsed && <span>Analytics</span>}</div>
      <div className="sidebar-item"><FaBox /> {!isCollapsed && <span>Orders</span>}</div>
      <div className="sidebar-item"><FaUser /> {!isCollapsed && <span>Profile</span>}</div>
    </div>
  );
}

export default Sidebar;
