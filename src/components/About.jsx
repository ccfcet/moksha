import React from 'react';
import StaticUpperNav from './StaticUpperNav/StaticUpperNav'
import BlogTemplate from './TextContent/BlogTemplate'

class About extends React.Component {
    render() {
        return <div>
            <StaticUpperNav />
            <BlogTemplate />
        </div>
    }
}

export default About