import React from 'react';
import Headroom from 'react-headroom'
import BrandBar from '../../simple/brand_bar'
import MenuBar from '../../simple/menu_bar';

class TopBar extends React.Component {
  render() {
    return (
      <div id="top-bar">
        <div id="brand-bar-container">
          <BrandBar brandBar={this.props.topBar.brandBar} />
        </div>
        <div id="menu-bar-container">
          {/* <Headroom> */}
            <MenuBar menuBar={this.props.topBar.menuBar} />
          {/* </Headroom> */}
        </div>
        <style jsx>
          {`
            #top-bar {
              height: 100%;
              background: #fafafa;
              display: grid;
              grid-template-rows: 1.61803398875fr 1fr;
            }

            #brand-bar-container {
              grid-row-start: 1;
              grid-row-end: 2;
              display: grid;
              grid-template-rows: 0.5fr 1.61803398875fr 0.5fr;
              border-bottom: 1px solid #9e9e9e;
            }

            #menu-bar-container {
              grid-row-start: 2;
              grid-row-end: 3;
            }
            `}
          </style>
        </div>
      );
    }
  }

  TopBar.displayName = 'TopBar';

  export default TopBar;
