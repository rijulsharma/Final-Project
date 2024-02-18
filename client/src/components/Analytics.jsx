import React from 'react'
import '../styles/component-styles/Analytics.css'
function Analytics() {
  return (
    <div className='analytics'>
      <div className='home-title-row'>
      <h1>Analytics</h1>
      <div className='an-content'>
      <div className='an-list'>
        <ul>
            <li><p>Backlog Tasks</p><p>16</p></li>
            <li><p>To-do Tasks</p><p>04</p></li>
            <li><p>In-Progress Tasks </p><p>08</p></li>
            <li><p>Completed Tasks</p> <p>12</p> </li>
        </ul>
      </div>
      <div className='an-list'>
        <ul>
            <li><p>Low Priority</p> <p>03</p></li>
            <li><p>Moderate Priority</p> <p>14</p></li>
            <li><p>High Priority</p> <p>04</p></li>
            <li><p>Due Date Tasks</p><p>10</p></li>
        </ul>
      </div>
      </div>
      </div>
    </div>
  ) 
}

export default Analytics
