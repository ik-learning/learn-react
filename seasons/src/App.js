import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      long: null,
      errorMessage: null
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      },
      err => {
        this.setState({
          errorMessage: err.message
        });
      }
    );
  }

  render() {
    return (
      <div>
        <div>Latitude: {this.state.lat} </div>
        <div>Longitute: {this.state.long} </div>
        <div>Error: {this.state.errorMessage} </div>
      </div>
    );
  };
};

export default App;
