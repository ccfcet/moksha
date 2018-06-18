import React from 'react';

import { Menu } from 'antd';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
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
                  About
                </Menu.Item>
                <Menu.Item>
                  Administration
                </Menu.Item>
                <Menu.Item>
                  Academics
                </Menu.Item>
                <Menu.Item>
                  Activities
                </Menu.Item>
                <Menu.Item>
                  Facilities
                </Menu.Item>
                <Menu.Item>
                  More
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

  export default App;
