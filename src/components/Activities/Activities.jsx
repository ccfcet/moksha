import React from 'react';
import { Card, Row, Col } from 'antd';
import './Activities.css';
import { Link } from 'react-router-dom';

import StaticUpperNav from '../StaticUpperNav/StaticUpperNav'

class Activities extends React.Component {
    render() {
        return <div className="main">
            <StaticUpperNav />
            <Card className="activities-card">
                <div >
                    <h1>Activities</h1>
                    <Row gutter={16}>
                        <Col span={8}>
                            <h2><Link to="/">IEEE</Link></h2>
                        </Col>
                        <Col span={8}>
                            <h2><Link to="/">ISTE</Link></h2>
                        </Col>
                        <Col span={8}>
                            <h2><Link to="/">ENCRESE</Link></h2>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <h2><Link to="/">BAJA</Link></h2>
                        </Col>
                        <Col span={8}>
                            <h2><Link to="/">IPR CELL</Link></h2>
                        </Col>
                        <Col span={8}>
                            <h2><Link to="/">ISNT</Link></h2>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <h2><Link to="/">Environmental Club</Link></h2>
                        </Col>
                        <Col span={8}>
                            <h2><Link to="/">CEETA(Alumini)</Link></h2>
                        </Col>
                        <Col span={8}>
                            <h2><Link to="/">EGRC-CET</Link></h2>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <h2><Link to="/">Industry Institute Partnership Cell</Link></h2>
                        </Col>
                        <Col span={8}>
                            <h2><Link to="/">National Service Scheme</Link></h2>
                        </Col>
                        <Col span={8}>
                            <h2><Link to="/">Parent Teacher Association</Link></h2>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <h2><Link to="/">Entrepreneurship Development</Link></h2>
                        </Col>
                        <Col span={8}>
                            <h2><Link to="/">Kerala Education Grid</Link></h2>
                        </Col>
                    </Row>
                </div>
            </Card>
        </div>
    }
}

export default Activities