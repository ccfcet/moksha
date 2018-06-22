import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'

import MainContainer from './components/MainContainer/MainContainer.jsx'
import About from './components/About.jsx'
import Academics from './components/Academics/Academics.jsx'
import Activities from './components/Activities/Activities.jsx'
import Administration from './components/Administration.jsx'
import Facilities from './components/Facilities.jsx'
import Drawer from './components/Drawer/Drawer.jsx'
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
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
