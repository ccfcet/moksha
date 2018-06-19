import React from 'react';

import { Menu } from 'antd';
import InstitutionName from './InstitutionName'
import './static-upper-nav.css'
class StaticUpperNav extends React.Component {
    render() {
        return <div id="static-upper-nav">
            <Menu mode="horizontal">
            <Menu.Item> 
                <InstitutionName />
            </Menu.Item> 
            <Menu.Item id="settings-icon"> 
                Settings
            </Menu.Item>    
            </Menu>            
        </div>
    }
}

export default StaticUpperNav