import React, { Component } from 'react';
import './App.css';
import OuterComponent from './components/outer/OuterComponent.jsx'
class App extends React.Component {
  render() {
    return (
      <div>
        Hello
        <OuterComponent />
      </div>
    );
  }
}

export default App;
