import React from 'react';

import './institution-name.css'
class InstitutionName extends React.Component {
render() {
    return <div id="wrapper">
        {/* <span id="name"> College of Engineering </span>
        <span id="place">Trivandrum</span>          */}
        <li>
            <ol id="name-ol"><span id="name"> College of Engineering </span></ol>
            <ol id="place-ol"><span id="place">Trivandrum</span></ol>
        </li>
    </div>
}
}

export default InstitutionName