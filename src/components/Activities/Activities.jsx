import React from 'react';
import {Row,Col} from 'antd';
import './Activities.css';
import {Link} from 'react-router-dom';

import StaticUpperNav from '../StaticUpperNav/StaticUpperNav'

class Activities extends React.Component {
    render() {
        return <div>
            <StaticUpperNav />
            <div>
            <h1 className="Activities">Activites<hr/></h1>
            </div>
            <br/>
            <Row gutter={8}>
            <Col span={8}>
            	<h2><Link to="/" className="Activities-link">IEEE</Link></h2>
            </Col>
            <Col span={8}>
            	<h2><Link to="/" className="Activities-link">ISTE</Link></h2>
            </Col>
            <Col span={8}>
            	<h2><Link to="/" className="Activities-link">ENCRESE</Link></h2>
            </Col>
            </Row>
            <Row gutter={8}>
            <Col span={8}>
            	<h2><Link to="/" className="Activities-link">BAJA</Link></h2>
            </Col>
            <Col span={8}>
            	<h2><Link to="/" className="Activities-link">IPR CELL</Link></h2>
            </Col>
            <Col span={8}>
            	<h2><Link to="/" className="Activities-link">ISNT</Link></h2>
            </Col>
            </Row>
            <Row gutter={8}>
            <Col span={8}>
            	<h2><Link to="/" className="Activities-link">Environmental Club</Link></h2>
            </Col>
            <Col span={8}>
            	<h2><Link to="/" className="Activities-link">CEETA(Alumini)</Link></h2>
            </Col>
            <Col span={8}>
            	<h2><Link to="/" className="Activities-link">EGRC-CET</Link></h2>
            </Col>
            </Row>
            <Row gutter={8}>
            <Col span={8}>
            	<h2><Link to="/" className="Activities-link">Industry Institute Partnership Cell</Link></h2>
            </Col>
            <Col span={8}>
            	<h2><Link to="/" className="Activities-link">National Service Scheme</Link></h2>
            </Col>
            <Col span={8}>
            	<h2><Link to="/" className="Activities-link">Parent Teacher Association</Link></h2>
            </Col>
            </Row>
              <Row gutter={8}>
            <Col span={8}>
            	<h2><Link to="/" className="Activities-link">Entrepreneurship Development</Link></h2>
            </Col>
            <Col span={8}>
            	<h2><Link to="/" className="Activities-link">Kerala Education Grid</Link></h2>
            </Col>
            </Row>
        </div>
    }
}

export default Activities