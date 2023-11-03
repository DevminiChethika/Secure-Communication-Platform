import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  // State variables to store the user's name and room
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        {/* Heading */}
        <h1 className="heading">Join</h1>
        <div>
          {/* Input field for entering the user's name */}
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          {/* Input field for entering the room name */}
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        {/* Link to navigate to the chat room */}
        <Link
          onClick={(e) => (!name || !room) ? e.preventDefault() : null}
          to={`/chat?name=${name}&room=${room}`}
        >
          {/* Button for signing in */}
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
