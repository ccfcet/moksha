import React from 'react';

import ActionBar from '../../derived/action_bar';
import MainContainer from '../../simple/main_container';
import TopBar from '../top_bar';

const actions = ['Login', 'Settings'];

class MainLayout extends React.Component {
  render() {
    return (
      <MainContainer
        topBar={<TopBar topBar={this.props.mainLayout.topBar}/>}
        content={this.props.children}
        actionBar={<ActionBar actions={actions} />} />
      );
    }
  }

  MainLayout.displayName = 'MainLayout';

  export default MainLayout;
