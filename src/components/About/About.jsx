import React from 'react';
import { Card } from 'antd'
import BlogTemplate from './Content/BlogTemplate'
import './about.css'

class About extends React.Component {
    render() {
        return <Card>
            <BlogTemplate />
        </Card>
    }
}

export default About