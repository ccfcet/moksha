import React, { Component } from 'react';
import CollegeName from '../collegename/CollegeName.jsx'
import Links from '../links/Links.jsx'
import './mainComponent.css'
class MainComponent extends React.Component {
    render() {
        return <div className='main-component'> 
            <CollegeName />
            <Links />
        </div>
    }
}

export default MainComponent