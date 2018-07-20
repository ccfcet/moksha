import React from 'react';

class MenuBar extends React.Component {
  render() {
    return (
      <div id="menu-bar">
        <ul id="menu-bar-list">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/academics">Academics</a></li>
          <li><a href="/activities">Activities</a></li>
          <li><a href="/departments">Departments</a></li>
          <li><a href="/facilities">Facilities</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <style jsx>
          {`
            @import url('https://fonts.googleapis.com/css?family=Raleway');

            #menu-bar {
              margin: 0 auto;
              margin-top: 0px;
              text-align:center;
              height: 100%;
            }

            #menu-bar-list {
              display: table;
              margin: auto;
              padding-left:10px;
              padding-right:10px;
              height: 100%;
            }

            #menu-bar-list li {
              display: table-cell;
              vertical-align: middle;
              // height: 100%;
              // display: inline-block;
              // display: table;
              list-style-type:none;
              // margin: 2px;
              padding-left: 20px;
              padding-right: 20px;
            }

            #menu-bar-list li a{
              color:#5d5d5d;
              text-decoration: none;
              display: inline-block;
              // display: table-cell;
              // vertical-align: middle;
              font-family: 'Open Sans',sans-serif;
              text-align: center;
              font-weight: 300;
              font-size: 2.6vh;
              margin-bottom: 0.4vh;
            }
            `}
          </style>
        </div>
      );
    }
  }

  export default MenuBar;
