import React from 'react';

import { Menu } from 'antd';
import {Link} from 'react-router-dom';
// import Drawer from '../Drawer/Drawer.jsx';
// import '../Drawer/Drawer.css';
// import { CSSTransition } from 'react-transition-group';

import InstitutionName from './InstitutionName'
import './static-upper-nav.css'
class StaticUpperNav extends React.Component {
    render() {
        return <div id="static-upper-nav">
            <Menu mode="horizontal" id="static-upper-nav-menu">
            <Menu.Item>
                <InstitutionName id="institution-name"/>
            </Menu.Item>
            {/* <Link to="/drawer">
            <Menu.Item id="settings-icon">
                V
            </Menu.Item>
            </Link>     */}
            </Menu>
        </div>
    }
}

export default StaticUpperNav
