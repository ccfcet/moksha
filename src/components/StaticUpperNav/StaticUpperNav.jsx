import React from 'react';

import { Menu } from 'antd';

import InstitutionName from './InstitutionName'

import './static-upper-nav.css'
import './static-upper-nav.js'

class StaticUpperNav extends React.Component {
    render() {
        return <div>
        <div id="navbar-blur" aria-hidden="true"></div>        
        <div id="static-upper-nav">
            <Menu mode="horizontal" id="static-upper-nav-menu">
            <Menu.Item>
                <InstitutionName id="institution-name"/>
            </Menu.Item>
            </Menu>
        </div>
        <div className="text-content"></div>
        </div> 

    }
}

export default StaticUpperNav
