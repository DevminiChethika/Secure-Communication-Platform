// Import the Express.js framework
const express = require("express");

// Create a router object to define routes
const router = express.Router();

// Define a GET route at the root ("/") of the server
router.get("/", (req, res) => {
  // Send a JSON response to the client with a message and status code 200 (OK)
  res.send({ response: "Server is up and running." }).status(200);
});

// Export the router to be used in other parts of the application
module.exports = router;
