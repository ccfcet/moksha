import React, { Component } from 'react';
import './App.css';
import OuterComponent from './components/OuterComponent/OuterComponent.js'
class App extends Component {
  render() {
    return (
      <div>
        <OuterComponent />
      </div>
    );
  }
}

export default App;
