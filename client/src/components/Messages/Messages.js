import React from 'react';

// Importing the 'react-scroll-to-bottom' library for scrolling messages
import ScrollToBottom from 'react-scroll-to-bottom';

// Importing the individual message component
import Message from './Message/Message';

// Importing the CSS file for styling
import './Messages.css';

// Define the Messages component
const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {/* Map through the array of messages and render each message using the 'Message' component */}
    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)}
  </ScrollToBottom>
);

// Export the Messages component for use in other parts of the application
export default Messages;
