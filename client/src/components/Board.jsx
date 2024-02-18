import React, { useState, useEffect } from 'react';
import '../styles/component-styles/Board.css';
import dropdown from '../assets/icons/dropdown.png'
import Section from './Section';
import Filter from './Filter';
function Board() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
      updateCurrentDate();
    }, []); // Empty dependency array ensures that this effect runs only once after the component mounts
  
    function updateCurrentDate() {
      const currentDateObj = new Date();
      const day = currentDateObj.getDate();
      const suffix = (day >= 11 && day <= 13) ? 'th' : ['th', 'st', 'nd', 'rd'][day % 10] || 'th';
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const formattedDate = day + suffix + ' ' + monthNames[currentDateObj.getMonth()] + ', ' + currentDateObj.getFullYear();
      setCurrentDate(formattedDate);
    }
  return (
    
    <div className='board'>
        <div className='home-title-row b'>
          <h2>Welcome! Risu</h2>
          <p>{currentDate}</p>
        </div>
        <div className='board-main-row'>
          <h2>Board</h2>
          <div className='board-period'>
          <h4>This Week</h4>
          <img src={dropdown} alt=''></img>
          </div>
        </div>
        <div className='board-main-row sec'>
          <Section></Section>
          <Section></Section>
          <Section></Section>
          <Section></Section>
        </div>
        {/* <Filter text1={"Today"} text2={"This Week"} text3={"This Month"}></Filter> */}
        
      
    </div>
  )
}

export default Board
