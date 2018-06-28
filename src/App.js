import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
// import { CSSTransition } from 'react-transition-group';

import MainContainer from './components/MainContainer/MainContainer.jsx'
import AboutContainer from './components/About/AboutContainer.jsx'
import Academics from './components/Academics/Academics.jsx'
import Activities from './components/Activities/Activities.jsx'
import Administration from './components/Administration/Administration.jsx'
import Facilities from './components/Facilities/Facilities.jsx'
import More from './components/More/More.jsx'
// import Drawer from './components/Drawer/DrawerContainer.jsx'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={MainContainer} />
          <Route path="/about" component={AboutContainer} />
          <Route path="/academics" component={Academics} />
          <Route path="/activities" component={Activities} />
          <Route path="/administration" component={Administration} />
          <Route path="/facilities" component={Facilities} />
          <Route path="/more" component={More} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
