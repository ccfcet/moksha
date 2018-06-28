import React from 'react';

import StaticUpperNav from '../StaticUpperNav/StaticUpperNav.jsx';

import { Card, Col, Row } from 'antd';

import { Link } from 'react-router-dom';
import './academics.css'
class Academics extends React.Component {
  render() {
    return (
      <div className='outermost-container'>
        <StaticUpperNav />
        <div className="academics-content">
          <Card className="academics-card">
            <div>

              <Row>
                <Col span={24}>
                  <div className="title">
                    <h1>Academics</h1>
                  </div>
                </Col>
              </Row>

              <Row gutter={8}>
                <Col span={8}>
                  <Card className="department-name-card" bordered={false}>Civil Engineering</Card>
                </Col>
                <Col span={8}>
                  <Card className="department-name-card" bordered={false}>Computer Science and Engineering</Card>
                </Col>
                <Col span={8}>
                  <Card className="department-name-card" bordered={false}>Electronics & Communication</Card>
                </Col>
              </Row>
              <br />
              <Row gutter={8}>
                <Col span={8}>
                  <Card className="department-name-card" bordered={false}>Mechanical Engineering</Card>
                </Col>
                <Col span={8}>
                  <Card className="department-name-card" bordered={false}>Architecure</Card>
                </Col>
                <Col span={8}>
                  <Card className="department-name-card" bordered={false}>Electrical & Electronics</Card>
                </Col>
              </Row>
              <br />
              <Row gutter={8}>
                <Col span={8}>
                  <Card className="department-name-card" bordered={false}>Computer Applications</Card>
                </Col>
                <Col span={8}>
                  <Card className="department-name-card" bordered={false}>Buisness Administration</Card>
                </Col>
                <Col span={8}>
                  <Card className="department-name-card" bordered={false}>Physical Education</Card>
                </Col>
              </Row>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default Academics