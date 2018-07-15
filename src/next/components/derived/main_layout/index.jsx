import React from 'react';

import ActionBar from '../../simple/action_bar';
import MainContainer from '../../simple/main_container';
import TopBar from '../top_bar';

const actions = ['Login', 'Settings'];

class MainLayout extends React.Component {
  render() {
    return (
      <MainContainer
        topBar={<TopBar />}
        content={this.props.children}
        actionBar={<ActionBar actions={actions} />} />
      );
    }
  }

  MainLayout.displayName = 'MainLayout';

  export default MainLayout;
