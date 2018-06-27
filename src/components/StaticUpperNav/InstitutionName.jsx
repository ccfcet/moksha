import React from 'react';
import { Link } from 'react-router-dom';

import './institution-name.css'
class InstitutionName extends React.Component {
    render() {
        return <div>
            <Link to="/" id="wrapper">                                          
                <div id="name">College of Engineering  </div>
                <div id="place">Trivandrum</div>
            </Link>
        </div>
    }
}

export default InstitutionName