import React from 'react';

import StaticUpperNav from '../StaticUpperNav/StaticUpperNav.jsx';

import {Card,Col,Row} from 'antd';

import { Link } from 'react-router-dom';
 import './academics.css'
class Academics extends React.Component {
    render() {
        return(
          <div className='academics'>
          <StaticUpperNav />
          <div>
    	<Row gutter={8} >
      	<Col span={8}>
        <Card title="Computer Science" bordered={false}><Link to="/">More Info</Link></Card>
      	</Col>
      <Col span={8}>
        <Card title="Mechanical Engineering" bordered={false}><Link to="/">More Info</Link></Card>
      </Col>
      <Col span={8}>
        <Card title="Electronics & Communication" bordered={false}><Link to="/">More Info</Link></Card>
      </Col>
    </Row>
    <br/>
    <Row gutter={8}>
      	<Col span={8}>
        <Card title="Civil Engineering" bordered={false}><Link to="/">More Info</Link></Card>
      	</Col>
      <Col span={8}>
        <Card title="Architecure" bordered={false}><Link to="/">More Info</Link></Card>
      </Col>
      <Col span={8}>
        <Card title="Electrical & Electronics" bordered={false}><Link to="/">More Info</Link></Card>
      </Col>
    </Row>
    <br/>
    <Row gutter={8}>
      	<Col span={8}>
        <Card title="Computer Applications" bordered={false}><Link to="/">More Info</Link></Card>
      	</Col>
      <Col span={8}>
        <Card title="Buisness Administration" bordered={false}><Link to="/">More Info</Link></Card>
      </Col>
      <Col span={8}>
        <Card title="Physical Education" bordered={false}><Link to="/">More Info</Link></Card>
      </Col>
    </Row>
    </div>
  </div>
  );
    }
}

export default Academics