// Import the react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create react component
const App = _ => {
  return <div>Hi there!</div>
};
// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
