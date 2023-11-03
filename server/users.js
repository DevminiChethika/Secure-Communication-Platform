// Create an empty array to store user data
const users = [];

// Function to add a new user to the array
const addUser = ({ id, name, room }) => {
  // Clean and standardize the username and room name by trimming and converting to lowercase
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Check if the username and room name are provided
  if (!name || !room) return { error: 'Username and room are required.' };

  // Check if the username is already taken in the room
  const existingUser = users.find((user) => user.room === room && user.name === name);
  if (existingUser) return { error: 'Username is taken.' };

  // Create a new user object and add it to the users array
  const user = { id, name, room };
  users.push(user);

  // Return the user object
  return { user };
}

// Function to remove a user from the array by their ID
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  // If the user is found, remove them from the array and return the removed user
  if (index !== -1) return users.splice(index, 1)[0];
}

// Function to get user information by their ID
const getUser = (id) => users.find((user) => user.id === id);

// Function to get all users in a specific room
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

// Export the functions to be used in other modules
module.exports = { addUser, removeUser, getUser, getUsersInRoom };
