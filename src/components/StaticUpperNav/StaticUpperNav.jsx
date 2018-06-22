import React from 'react';

import { Menu } from 'antd';
import InstitutionName from './InstitutionName'
import './static-upper-nav.css'
class StaticUpperNav extends React.Component {
    render() {
        return <div id="static-upper-nav">
            <Menu mode="horizontal" id="static-upper-nav-menu">
            <Menu.Item> 
                <InstitutionName id="institution-name"/>
            </Menu.Item> 
            <Menu.Item id="settings-icon"> 
                V
            </Menu.Item>    
            </Menu>            
        </div>
    }
}

export default StaticUpperNav