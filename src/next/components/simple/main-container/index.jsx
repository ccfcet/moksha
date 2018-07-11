import React from 'react';

class MainContainer extends React.Component {
  render() {
    return (
      <div id="main-container">
        <style jsx>
          {`
            #main-container {
              display: grid;
              height: 100vh;
              width: 100vw;
              grid-template-rows: 1fr 6.47212fr;
            }

            #menu-bar-container {
              grid-row-start: 1;
              grid-row-end: 2;
            }

            #content-outer-container {
              grid-row-start: 2;
              grid-row-end: 3;
              display: grid;
              grid-template-rows: 9.70818fr 1fr;
            }

            #action-bar-container {
              border-top: 1px solid #9e9e9e;
              grid-row-start: 2;
              grid-row-end: 3;
            }
            `}
          </style>
          <div id="menu-bar-container">
            {this.props.menuBar}
          </div>
          <div id="content-outer-container">
            {this.props.contentInnerContainer}
            <div id="action-bar-container">
              {this.props.actionBar}
            </div>
          </div>
        </div>
      );
    }
  }

  export default MainContainer;
