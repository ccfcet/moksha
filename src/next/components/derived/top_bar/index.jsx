import React from 'react';
import Headroom from 'react-headroom'
import BrandBar from '../../simple/brand_bar'
import MenuBar from '../../simple/menu_bar';

class TopBar extends React.Component {
  render() {
    return (
      <div id="top-bar">
        <div id="bbar">
        {<BrandBar />}
        </div>
        <div id="mbar">
          <Headroom>
            {<MenuBar />}
          </Headroom>
        </div>
        <style jsx>
          {`
            #top-bar {
              height: 100%;
              background: #fafafa;
              display: grid;
              grid-template-rows: 1fr 1.61803398875fr;
            }

            #bbar {
              grid-row : 1/2;
              align : center;
              padding-left : 38vw;

            }

            #mbar {
              grid-row : 2/3;
            }

          `}
        </style>
      </div>
      );
    }
  }

  TopBar.displayName = 'TopBar';

  export default TopBar;
