import React from 'react';

import StaticUpperNav from '../StaticUpperNav/StaticUpperNav'
import {Card} from 'antd';
import {Row,Col} from 'antd';
import './Facilities.css';


class Facilities extends React.Component {
    render() {
        return <div className="facilities">
            <StaticUpperNav />
            <div>
            <Row gutter={16}>
            <Col span={8}>
            <Card >
            <h1 className="card-height">Bosch Rexorth</h1>
            </Card >
            </Col>
            <Col span={8}>
            <Card >
            <h1 className="card-height">Hostel</h1>
            
            </Card>
            </Col>
            <Col span={8}>
            <Card >
            <h1 className="card-height">Placements(CGPU)</h1>
           
            </Card>
            </Col>
            </Row>
            <br/>
            <Row gutter={16}>
            <Col span={8}>
            <Card>
            <h1 className="card-height">Central Computing Facility</h1>
           
            </Card>
            </Col>
            <Col span={8}>
            <Card >
            <h1 className="card-height">Centre For Continuing Education</h1>
            
            </Card>
            </Col>
            <Col span={8}>
            <Card>
            <h1 className="card-height">Refri. & AC Maintenance Unit</h1>
            
            </Card>
            </Col>
            </Row>
            <br/>
            <Row gutter={16}>
            <Col span={8}>
            <Card>
            <h1 className="card-height">Guest House</h1>
            
            </Card>
            </Col>
            <Col span={8}>
            <Card>
            <h1 className="card-height">Technical Library</h1>
            
            </Card>
            </Col>
            <Col span={8}>
            <Card>
            <h1 className="card-height">Research Programmes</h1>
          
            </Card>
            </Col>
            </Row>
            </div>
            </div>
    }
}

export default Facilities