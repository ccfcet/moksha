import React, { Component } from 'react';
import NewsComponent from './news/NewsComponent.jsx'
import EventComponent from './event/EventComponent.jsx'
import MainComponent from './main/MainComponent.jsx'
import './outerComponent.css'
class OuterComponent extends Component {
    render() {
        return <div className = 'row outer-component container'>  
            <MainComponent className='col-md-6' />
            <div className='col-md-6'>
                <EventComponent className='row' />
                <NewsComponent className='row'/>
            </div>
        </div>
    }
}

export default OuterComponent