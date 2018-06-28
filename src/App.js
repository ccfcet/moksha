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
  constructor() {
  super();
  this.state = {
    width: window.innerWidth,
  };
}

componentWillMount() {
  window.addEventListener('resize', this.handleWindowSizeChange);
}

// make sure to remove the listener
// when the component is not mounted anymore
componentWillUnmount() {
  window.removeEventListener('resize', this.handleWindowSizeChange);
}

handleWindowSizeChange = () => {
  this.setState({ width: window.innerWidth });
};

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if(!isMobile)
    {
    return (
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={MainContainer} />
            <Route path="/about" component={AboutContainer} />
            <Route path="/academics" component={Academics} />
            <Route path="/activities" component={Activities} />
            <Route path="/administration" component={Administration} />
            <Route path="/facilities" component={MainContainer} />
            <Route path="/more" component={MainContainer} />
          </div>
        </BrowserRouter>
      );
      }
      else {
        return (
          <div>
            <h1>Coming soon.</h1>
          </div>
        );
      }
  }
}

export default App;
