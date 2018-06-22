import React from 'react';
import './Drawer.css';
import {SlideDown} from 'react-slidedown';

class Drawer extends React.Component {

  render() {
    return (
      <div>
      <SlideDown className={'my-dropdown-slidedown'}>
      {this.props.open ? this.props.children : null}
    	</SlideDown>
        <h1>Data things</h1>
      </div>
    );
  }
}
export default Drawer