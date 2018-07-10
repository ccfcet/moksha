import React from 'react';

import MainContainer from '../../simple/main-container';
import MenuBar from '../../simple/menu-bar';
import HomePage from '../../content/home-page';
import ActionBar from '../../simple/action-bar';

const actions = ['Login', 'Settings'];

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <MainContainer
          menuBar={<MenuBar />}
          content={<HomePage />}
          actionBar={<ActionBar actions={actions} />}
        />
        <style jsx global>
          {`
      @import url('https://fonts.googleapis.com/css?family=Open+Sans:400');

      body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
        color: #5d5d5d;
      }
      `}
        </style>
      </div>
    );
  }
}

App.displayName = 'App';

export default App;