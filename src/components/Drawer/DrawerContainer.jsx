import React from 'react'
import {CSSTransition} from 'react-transition-group'
import Drawer from './Drawer.jsx' 

import './drawer-container.css'

class DrawerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isActive : false
        }
      }
    
      componentDidMount() {
        this.setState({isActive: true})
      }
    
      componentWillUnmount() {
        this.setState({
          isActive: false,
        });
      }
      render() {
        return <div>
          <CSSTransition
            in={this.state.isActive}
            timeout={300}
            classNames="drawer-container"
            unmountOnExit>
            <Drawer />
          </CSSTransition>
        </div>;
      }
}

export default DrawerContainer