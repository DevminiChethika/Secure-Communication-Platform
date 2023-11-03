import React from 'react';

// Importing the CSS file for styling
import './Message.css';

// Importing the 'react-emoji' library for handling emojis in messages
import ReactEmoji from 'react-emoji';

// Define the Message component
const Message = ({ message: { text, user }, name }) => {
  // Determine if the message was sent by the current user
  let isSentByCurrentUser = false;

  // Trim and convert the user's name to lowercase for comparison
  const trimmedName = name.trim().toLowerCase();

  // Check if the message user matches the current user
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        // Render message sent by the current user
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
            {/* Render the message text with emojis using 'react-emoji' */}
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
      )
      : (
        // Render message sent by other users
        <div className="messageContainer justifyStart">
          <div className="messageBox backgroundLight">
            {/* Render the message text with emojis using 'react-emoji' */}
            <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
          </div>
          <p className="sentText pl-10 ">{user}</p>
        </div>
      )
  );
}

// Export the Message component for use in other parts of the application
export default Message;
