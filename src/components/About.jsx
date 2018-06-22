import React from 'react';
import { Row, Col } from 'antd';

import StaticUpperNav from './StaticUpperNav/StaticUpperNav'
import BlogTemplate from './TextContent/BlogTemplate'
import './about.css'

class About extends React.Component {
    render() {
        return <div>
            <div>
                <Row>
                    <Col span={24}>
                        <StaticUpperNav />
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="blog-container">
                            <BlogTemplate />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    }
}

export default About