import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Row, Col, List } from 'antd';

import './administration.css'

import StaticUpperNav from '../StaticUpperNav/StaticUpperNav'

class Administration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            staff : [
                <Link to='/'>College Office</Link>,
                <Link to='/'>Dean Office</Link>,
                <Link to='/'>Technical Documentation Center</Link>,
                <Link to='/'>Office of Evening Courses</Link>,
                <Link to='/'>Office of Evening Courses</Link>
            ],
            other : [
                <Link to='/'>Right to information</Link>,
                <Link to='/'>Tenders</Link>,
            ]
        }
    }
    render() {
        return <div>
            <div id="outermost-container">
                <Row>
                    <Col span={24}>
                        <StaticUpperNav />
                    </Col>
                </Row>
                <div className="admin-content">
                    <Card className="admin-card">
                        <Row>
                            <Col span={24}>
                                <div className="title">
                                    <h1>Administration</h1>
                                </div>
                            </Col>
                            <div className="">
                                <h1>Admininstrative Staff</h1>
                                <List
                                    size="small"
                                    dataSource={this.state.staff}
                                    renderItem={item => (<List.Item className="admin-list-item">{item}</List.Item>)}
                                />
                            </div>
                            <div className="">
                                <h1>Other Links</h1>
                                <List
                                    size="small"
                                    dataSource={this.state.other}
                                    renderItem={item => (<List.Item className="admin-list-item">{item}</List.Item>)}
                                />
                            </div>
                        </Row>
                    </Card>
                </div>
            </div>
        </div>
    }
}

export default Administration