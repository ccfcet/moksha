import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
// import { CSSTransition } from 'react-transition-group';

import MainContainer from './components/MainContainer/MainContainer.jsx'
import About from './components/About.jsx'
import Academics from './components/Academics/Academics.jsx'
import Activities from './components/Activities/Activities.jsx'
import Administration from './components/Administration.jsx'
import Facilities from './components/Facilities/Facilities.jsx'
import Drawer from './components/Drawer/DrawerContainer.jsx'
import More from './components/More.jsx'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={MainContainer} />
          <Route path="/about" component={About} />
          <Route path="/academics" component={Academics} />
          <Route path="/activities" component={Activities} />
          <Route path="/administration" component={Administration} />
          <Route path="/facilities" component={Facilities} />
          <Route path="/more" component={More} />

          <Route path="/drawer" component={Drawer} />          
          {/* <CSSTransition
            in={this.state.isActive}
            timeout={300}
            classNames="drawer"
            unmountOnExit>
            <h1 key="1">Hello There, Welcome to the Control Center</h1>
          </CSSTransition> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
