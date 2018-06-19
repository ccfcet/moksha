import React from 'react';

import StaticUpperNav from './StaticUpperNav/StaticUpperNav'

class Administration extends React.Component {
    render() {
        return <div>
            <StaticUpperNav />
            <h1>This is the Administration page.</h1>
        </div>
    }
}

export default Administration