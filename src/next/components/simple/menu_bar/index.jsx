import React from 'react';

class MenuBar extends React.Component {
  render() {
    return (
      <div id="menu-bar">
<<<<<<< HEAD
          <ul id="menu-bar-list">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/academics">Academics</a></li>
            <li><a href="/departments">Departments</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/activities">Activities</a></li>
            <li><a href="/facilities">Facilities</a></li>
          </ul>
=======
        <ul id="menu-bar-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
>>>>>>> 838ad143b906e2c7439f65ab4b401fcd36ce8ad8
        <style jsx>
          {`
            @import url('https://fonts.googleapis.com/css?family=Raleway');

            #menu-bar {
              margin:0 auto;
              margin-top:0px;
              text-align:center;
            }

            #menu-bar-list {
              padding-left:10px;
              padding-right:10px;
            }

            #menu-bar-list li {
              display:inline;
              list-style-type:none;
              margin: 2px;
              padding-left:20px;
              padding-right:20px;
            }

            #menu-bar-list li a{
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
