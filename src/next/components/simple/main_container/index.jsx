import React from 'react';

const _ = require('lodash')

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log('gets here buhahaha')
    if(_.has(props, "menuBarPresent"))
    {
      console.log('gets here')
      this.state = {menuBarPresent: props.menuBarPresent}
    }
    else {
      console.log("lalalala")
      this.state = {menuBarPresent: false};
    }
  }
  render() {
    if(this.state.menuBarPresent)
    {
      return (
        <div>
          Hey there!
        </div>
      )
    }
    else {
      return(
        <div id="main-container">
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
            <style jsx>
              {`
                #main-container {
                  display: grid;
                  height: 100vh;
                  width: 100vw;
                  grid-template-rows:1fr 11.3262379212fr 1fr;
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
                `}
              </style>
              <div id="top-bar-container">
                {this.props.topBar}
              </div>
              <div id="content-outer-container">
                {this.props.contentInnerContainer}
              </div>
              <div id="action-bar-container">
                {this.props.actionBar}
              </div>
            </div>
          )
        }}
      }

      export default MainContainer;
