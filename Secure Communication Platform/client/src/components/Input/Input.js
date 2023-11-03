import React from 'react';

import './Input.css';

// Input component takes three props: setMessage, sendMessage, and message
const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form"> {/* Create a form element with the "form" class */}
    <input
      className="input" /* Create an input field with the "input" class */
      type="text"
      placeholder="Type a message..." /* Placeholder text for the input field */
      value={message} /* Bind the input value to the "message" prop */
      onChange={({ target: { value } }) => setMessage(value)} /* Update the message state when input changes */
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} /* Trigger sendMessage function on Enter key press */
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button> {/* Create a button to send messages */}
  </form>
)

export default Input;
