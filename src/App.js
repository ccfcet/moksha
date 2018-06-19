import React from 'react';

import { Menu } from 'antd';
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import About from './components/About.jsx'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
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
                  <Link to="/about">About</Link>
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
          <Route path="/about" component={About} />
        </div>
        </BrowserRouter>
      );
    }
  }

  export default App;
