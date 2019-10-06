import React from 'react';

const App = _ => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );
  return (
    <div>
      Hi, There!
    </div>
  );
}

export default App;
