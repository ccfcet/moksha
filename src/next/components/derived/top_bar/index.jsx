import React from 'react';

import BrandBar from '../../simple/brand_bar'
import MenuBar from '../../simple/menu_bar';

class TopBar extends React.Component {
  render() {
    return (
      <div id="top-bar">
        {<BrandBar />}
        {<MenuBar />}
      </div>
      );
    }
  }

  TopBar.displayName = 'TopBar';

  export default TopBar;
