// Import the necessary React library
import React from 'react';

// Import the Chat and Join components
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

// Import the BrowserRouter and Route components from react-router-dom for routing
import { BrowserRouter as Router, Route } from "react-router-dom";

// Define the main App component
const App = () => {
  return (
    // Use the Router component to enable routing within the application
    <Router>
      {/* Define routes using the Route component */}
      {/* The exact attribute ensures that this route matches exactly the path */}
      <Route path="/" exact component={Join} />
      {/* This route matches the path '/chat' and renders the Chat component */}
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

// Export the App component as the default export
export default App;
