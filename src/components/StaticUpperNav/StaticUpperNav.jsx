import React from 'react';

import { Menu } from 'antd';
import InstitutionName from './InstitutionName'
import './static-upper-nav.css'
class StaticUpperNav extends React.Component {
    render() {
        return <div id="static-upper-nav">
            <Menu mode="horizontal">
            <div> 
                <InstitutionName />
            </div> 
            <div id="settings-icon"> 
                Settings
            </div>    
            </Menu>            
        </div>
    }
}

export default StaticUpperNav