import React, { Component } from 'react';
import EventList from '../eventlist/EventList.jsx'
class EventComponent extends React.Component {
    render() {
        return <div className='event-component'> 
        <EventList />
        </div>
    }
}

export default EventComponent