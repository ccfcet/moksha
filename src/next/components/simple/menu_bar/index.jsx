import React from 'react';
import ResponsiveMenu from 'react-responsive-navbar'

import './style.css'

class MenuBar extends React.Component {
  render() {
    return (
      <div>
        <ResponsiveMenu
          className="menu-tag"
          menuOpenButton={<div id="menu-open-text">
            Menu
            </div>}
            menuCloseButton={<div id="menu-close-text">Close</div>}
            changeMenuOn="660px"
            largeMenuClassName="large-menu"
            smallMenuClassName="small-menu"
            menu={
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
              </div>
            }
          />
          <style jsx>{`
            #menu-open-text, #menu-close-text {
              color: #5d5d5d;
              font-family: 'Open Sans',sans-serif;
              font-weight: 300;
              font-size: 2.6vh;
              margin-bottom: 0.2vh;
            }
            `}</style>
          </div>
        );
      }
    }

    export default MenuBar;
