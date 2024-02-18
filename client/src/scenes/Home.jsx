
import Menu from '../components/Menu';
import '../styles/scene-styles/Home.css';
import Board from '../components/Board';
import Settings from '../components/Settings';
import Analytics from '../components/Analytics';
import { useLocation } from 'react-router-dom';
import PopUp from '../components/PopUp';
import { useState } from 'react';
import CardPopUp from '../components/CardPopUp';
function Home({path}) {
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const handleLogoutClick = () => {
    setShowPopup(true); // Show the popup when Logout is clicked
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };
  
  return (
    <div className="home">
      <Menu />
      {/* <PopUp PopUpText={'logout'} handleClose={handleClosePopup}></PopUp> */}
      {/* <CardPopUp></CardPopUp> */}
      <div className="home-main">
        
      {path === '/settings' && <Settings />}
      {(path === '/board' || path === '/') && <Board />}

        {path === '/analytics' && <Analytics />}
       
      </div>
    </div>
  );
}

export default Home;

