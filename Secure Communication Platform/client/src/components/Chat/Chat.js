import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

// Define the server endpoint for the socket.io connection
const ENDPOINT = 'https://project-chat-application.herokuapp.com/';

let socket;

// Define the Chat component
const Chat = ({ location }) => {
  // State variables to store user information and messages
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // useEffect to run when the component mounts
  useEffect(() => {
    // Parse user and room information from the URL query string
    const { name, room } = queryString.parse(location.search);

    // Initialize a socket.io client connection to the server
    socket = io(ENDPOINT);

    // Set the user's name and room
    setRoom(room);
    setName(name);

    // Emit a 'join' event to the server with user and room information
    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  // useEffect to run when the component mounts and when messages are received
  useEffect(() => {
    // Listen for 'message' events from the server
    socket.on('message', message => {
      // Update the messages state with the received message
      setMessages(messages => [ ...messages, message ]);
    });
    
    // Listen for 'roomData' events from the server
    socket.on("roomData", ({ users }) => {
      // Update the users state with the list of users in the room
      setUsers(users);
    });
  }, []);

  // Function to send a message
  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      // Emit a 'sendMessage' event to the server with the message
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  // Render the Chat component
  return (
    <div className="outerContainer">
      <div className="container">
        {/* InfoBar component displaying room information */}
        <InfoBar room={room} />
        
        {/* Messages component displaying chat messages */}
        <Messages messages={messages} name={name} />
        
        {/* Input component for sending messages */}
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      
      {/* TextContainer component displaying a list of users in the room */}
      <TextContainer users={users} />
    </div>
  );
}

export default Chat;
