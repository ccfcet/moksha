import React from 'react';

class MenuBar extends React.Component {
  render() {
    return (
      <div >
        <div>
          <h1 id="college-name">
            College Of Engineering Trivandrum
          </h1>
        </div>
        <div id="navigation-wrapper">
          <ul id="top-navigation">
            <li><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <style jsx>
          {`
            @import url('https://fonts.googleapis.com/css?family=Raleway');
            @import url('https://fonts.googleapis.com/css?family=Markazi+Text');

            #college-name {
              font-family: 'Markazi Text', serif;
              text-align : center;
              font-weight: 500;
              font-size: 3.5vw;
              margin-top:3px;
              margin-bottom: 0px;
              color : black;
            }

            #navigation-wrapper {
              margin:0 auto;
              margin-top:0px;
              text-align:center;
            }

            #top-navigation {
              padding-left:10px;
              padding-right:10px;
            }

            #top-navigation li {
              display:inline;
              list-style-type:none;
              margin: 2px;
              padding-left:20px;
              padding-right:20px;
            }

            #top-navigation li a{
              color:#5d5d5d;
              text-decoration: none;
            }
            `}
          </style>
        </div>
      );
    }
  }

  export default MenuBar;
