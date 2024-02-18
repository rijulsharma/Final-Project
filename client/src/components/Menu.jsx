import React from 'react'
import logoIcon from '../assets/logo/codesandbox.png'
import board from '../assets/icons/board.png'
import analytics from '../assets/icons/analytics.png'
import settings from '../assets/icons/settings.png'
import logout from '../assets/icons/Logout.png'
import '../styles/component-styles/Menu.css'
import PopUp from '../components/PopUp'
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Menu() {
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const handleLogoutClick = () => {
    setShowPopup(true); // Show the popup when Logout is clicked
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };
  return (
    <div className='menu'>
      <div>
      <div className='menu-row top'>
        <img src={logoIcon} alt='logo'></img>
        <p>Pro Manage</p>
      </div>
      <Link to="/board">
      <div className='menu-row'>
        <img src={board} alt='board'></img>
        <p>Board</p>
      </div>
      </Link>
      <Link to="/analytics">
      <div className='menu-row'>
          <img src={analytics} alt='analytics'></img>
          <p>Analytics</p>
          </div>
        </Link>
        <Link to="/settings">
      <div className='menu-row'>
        <img src={settings} alt='settings'></img>
        <p>Settings</p>
      </div>
      </Link>
      </div>
      <div>
      <div className='menu-row logout'>
        <img src={logout} alt='logout' onClick={handleLogoutClick}></img>
        <p>Logout</p>
      </div>
      </div>
      {showPopup && <PopUp PopUpText="logout" handleClose={handleClosePopup} />}
    </div>
  )
}

export default Menu
