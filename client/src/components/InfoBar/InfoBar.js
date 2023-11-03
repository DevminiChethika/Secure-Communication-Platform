import React from 'react';

// Importing images for icons
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

// Importing the CSS file for styling
import './InfoBar.css';

// Define the InfoBar component
const InfoBar = ({ room }) => (
  <div className="infoBar">
    {/* Left inner container for room name and online icon */}
    <div className="leftInnerContainer">
      {/* Online icon */}
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      {/* Display the room name */}
      <h3>{room}</h3>
    </div>

    {/* Right inner container for closing the chat */}
    <div className="rightInnerContainer">
      {/* Create a link that, when clicked, navigates to the root URL ('/') */}
      <a href="/">
        {/* Close icon */}
        <img src={closeIcon} alt="close icon" />
      </a>
    </div>
  </div>
);

// Export the InfoBar component for use in other parts of the application
export default InfoBar;
