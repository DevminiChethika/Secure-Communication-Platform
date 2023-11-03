import React from 'react';

// Importing an image for the online icon
import onlineIcon from '../../icons/onlineIcon.png';

// Importing the CSS file for styling
import './TextContainer.css';

// Define the TextContainer component
const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      {/* Title for the application */}
      <h1>Secure Communication Platform <span role="img" aria-label="emoji">💬</span></h1>
      {/* Subtitle */}
      <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    
    {/* Display a list of users if users are available */}
    {
      users
        ? (
          <div>
            {/* Title for the list of users */}
            <h1>People currently communicating:</h1>
            
            {/* Container for displaying active users */}
            <div className="activeContainer">
              <h2>
                {/* Map through the list of users and display their names and online icons */}
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {/* User's name */}
                    {name}
                    {/* Online icon */}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        // If no users are available, display nothing
        : null
    }
  </div>
);

// Export the TextContainer component for use in other parts of the application
export default TextContainer;
