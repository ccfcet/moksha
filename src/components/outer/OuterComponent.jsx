import React, { Component } from 'react';
import NewsComponent from './news/NewsComponent.jsx'
import EventComponent from './event/EventComponent.jsx'
import MainComponent from './main/MainComponent.jsx'
import './outerComponent.css'
class OuterComponent extends Component {
    render() {
        return <div className = 'outer-component'>  
            <MainComponent />
            <EventComponent />
            <NewsComponent />
        </div>
    }
}

export default OuterComponent