import React from 'react';

import ActionBar from '../../simple/action_bar';
import MainContainer from '../../simple/main_container';
import TopBar from '../top_bar';

const actions = ['Login', 'Settings'];

class MainLayout extends React.Component {
  render() {
    return (
      <div id="main-layout">
        <MainContainer
          topBar={<TopBar />}
          content={null}
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

  MainLayout.displayName = 'MainLayout';

  export default MainLayout;
