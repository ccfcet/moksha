import React, { Component } from 'react';
import NewsComponent from './NewsComponent/NewsComponent.js'
import EventComponent from './EventComponent/EventComponent.js'
import MainComponent from './MainComponent/MainComponent'
import './outerComponent.css'
class OuterComponent extends React.Component {
    render() {
        return <div className = 'outer-component'>  
            <MainComponent />
            <EventComponent />
            <NewsComponent />
        </div>
    }
}

export default OuterComponent