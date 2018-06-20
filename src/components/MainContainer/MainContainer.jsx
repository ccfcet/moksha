import React from 'react';

import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import './main-container.css';

class MainContainer extends React.Component {
  render() {
    return (
      <div className="MainContainer">
        <div id="container">
          <div id="header">
            <h1 id="institute-name">College of Engineering</h1>
            <h2 id="institute-name-sub">Trivandrum</h2>
          </div>
          <div id="main-menu">
            <Menu
              mode="horizontal"
              selectable={ false }
              >
                <Menu.Item>
                  <Link to="/about">About</Link>
                </Menu.Item>
                <Menu.Item>
                <Link to="/administration">Administration</Link>
                </Menu.Item>
                <Menu.Item>
                <Link to="/academics">Academics</Link>
                </Menu.Item>
                <Menu.Item>
                <Link to="/activities">Activities</Link>
                </Menu.Item>
                <Menu.Item>
                <Link to="/facilities">Facilities</Link>
                </Menu.Item>
                <Menu.Item>
                <Link to="/more">More</Link>
                </Menu.Item>
                {/* <Menu.Item>
                  <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                </Menu.Item> */}
              </Menu>
            </div>
          </div>
        </div>
      );
    }
  }

  export default MainContainer;
