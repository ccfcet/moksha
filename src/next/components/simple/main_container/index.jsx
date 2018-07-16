import React from 'react';

class MainContainer extends React.Component {
  render() {
      return(
        <div id="main-container">
          <style jsx global>
            {`
              @import url('https://fonts.googleapis.com/css?family=Open+Sans:400');
              @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
              @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

              body {
                margin: 0;
                padding: 0;
                font-family: 'Open Sans', sans-serif;
                font-weight: 400;
                color: #5d5d5d;
              }
              `}
            </style>
            <style jsx>
              {`
                #main-container {
                  display: grid;
                  height: 100vh;
                  width: 100vw;
                  grid-template-rows: 1fr 11.3262379212fr 1fr;
                }

                #top-bar-container {
                  border-bottom: 1px solid #9e9e9e;
                  grid-row-start: 1;
                  grid-row-end: 2;
                }

                #content-outer-container {
                  grid-row-start: 2;
                  grid-row-end: 3;
                }

                #action-bar-container {
                  border-top: 1px solid #9e9e9e;
                  grid-row-start: 3;
                  grid-row-end: 4;
                }

                @media screen and (max-height: 479px) {
                  // override for small screens
                  #main-container {
                    grid-template-rows:1fr 6.472135955fr 1fr;
                  }
                }
                `}
              </style>
              <div id="top-bar-container">
                {this.props.topBar}
              </div>
              <div id="content-outer-container">
                {this.props.content}
              </div>
              <div id="action-bar-container">
                {this.props.actionBar}
              </div>
            </div>
          )
        }
      }

      export default MainContainer;
