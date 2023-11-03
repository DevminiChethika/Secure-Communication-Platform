// Import required modules
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

// Import user-related functions from the users.js file
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

// Import the router for additional routes
const router = require('./router');

// Create an Express application
const app = express();

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Create a Socket.io server and pass the HTTP server
const io = socketio(server);

// Enable Cross-Origin Resource Sharing (CORS) for the app
app.use(cors());

// Use the router for additional routes
app.use(router);

// Define Socket.io events
io.on('connect', (socket) => {
  // Event when a user joins a room
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    // Emit a welcome message to the user
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.` });
    
    // Broadcast a message to all users in the room that a new user has joined
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

    // Emit room data to all users in the room
    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  // Event when a user sends a message
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    // Emit the message to all users in the room
    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  });

  // Event when a user disconnects
  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      // Emit a message that the user has left
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      
      // Emit updated room data to all users in the room
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }
  });
});

// Start the server and listen on the specified port or 5000
server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));
