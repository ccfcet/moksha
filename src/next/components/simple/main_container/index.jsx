import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

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
              font-weight: 300;
              color: #5d5d5d;
            }

            ::-moz-selection { /* Code for Firefox */
              color: #fafafa;
              background: #5d5d5d;
            }

            ::selection {
              color: #fafafa;
              background: #5d5d5d;
            }
            `}
          </style>
          <style jsx>
            {`
              #main-container {
                display: grid;
                height: 100vh;
                width: 100vw;
                // grid-template-rows: 1.618033989fr 11.3262379212fr 1fr;
                // grid-template-rows: 1fr 11.3262379212fr 1fr;
              }

              #top-bar-container {
                border-bottom: 1px solid #9e9e9e;
                // grid-row-start: 1;
                // grid-row-end: 2;
                height: calc(((1.618033989)/(1.618033989 + 11.3262379212 + 1)) * 100vh);
                position: fixed;
                width:100%;
                top:0;
                z-index: 999;
              }

              #content-outer-container {
                // grid-row-start: 2;
                // grid-row-end: 3;
                // switch to something better if possible -- start
                margin-top: calc(((1.618033989)/(1.618033989 + 11.3262379212 + 1)) * 100vh);
                padding-bottom: calc(((1)/(1.618033989 + 11.3262379212 + 1)) * 100vh);
                // switch to something better if possible -- end
              }

              #action-bar-container {
                border-top: 1px solid #9e9e9e;
                // grid-row-start: 3;
                // grid-row-end: 4;
                height: calc(((1)/(1.618033989 + 11.3262379212 + 1)) * 100vh);
                position: fixed;
                width:100%;
                bottom:0;
              }

              @media screen and (max-height: 479px) {
                // override for small screens
                #main-container {
                  grid-template-rows: 1.618033989fr 11.3262379212fr 1fr;
                  // grid-template-rows: 1fr 6.472135955fr 1fr;
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
