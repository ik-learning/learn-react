// Import the react and react dom libraries
import React from 'react';
import ReactDOM from 'react-dom';

const getButtonText = obj => {
  return obj.text;
}

const getTime = _ => {
  return (new Date()).toLocaleTimeString()
}
// Create react component
const App = _ => {
  const buttonText = { text: 'click me!' };
  const labelText = 'Enter name';
  const style = { backgroundColor: 'blue', color: 'white' };
  return (
    <div>
      <div>Current Time:</div>
      <h3>{getTime()} PM</h3>
      <label className="name" htlmfor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={style}>
        {getButtonText(buttonText)}
      </button>
    </div>
  );
};
// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
