import React from 'react';
import '../styles/component-styles/PopUp.css';

function PopUp({ PopUpText, handleClose }) {
  return (
    <>
      <div className="overlay">
        <div className="popup-container">
          <p>Are you sure you want to {PopUpText}?</p>
          <button onClick={() => handleClose(true)}>Yes, {PopUpText}</button>
          <button onClick={() => handleClose(false)}>Cancel</button>
        </div>
      </div>
    </>
  );
}

export default PopUp;
