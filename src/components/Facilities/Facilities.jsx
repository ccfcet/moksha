import React from 'react';

import StaticUpperNav from '../StaticUpperNav/StaticUpperNav'
import { Card } from 'antd';
import { Row, Col } from 'antd';
import {Link} from 'react-router-dom';
import './Facilities.css';


class Facilities extends React.Component {
    render() {
        return <div className="facilities">
            <StaticUpperNav />
            <Card className="facilities-card">
                <div>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card >
                                <h1 className="card-height"><Link to="/"> Bosch Rexorth </Link></h1>
                            </Card >
                        </Col>
                        <Col span={8}>
                            <Card >
                                <h1 className="card-height"><Link to="/">Hostel</Link></h1>

                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card >
                                <h1 className="card-height"><Link to="/">Placements(CGPU)</Link></h1>

                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card>
                                <h1 className="card-height"><Link to="/">Central Computing Facility</Link></h1>

                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card >
                                <h1 className="card-height"><Link to="/">Centre For Continuing Education</Link></h1>

                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card>
                                <h1 className="card-height"><Link to="/">Refri. & AC Maintenance Unit</Link></h1>

                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card>
                                <h1 className="card-height"><Link to="/">Guest House</Link></h1>

                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card>
                                <h1 className="card-height"><Link to="/">Technical Library</Link></h1>

                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card>
                                <h1 className="card-height"><Link to="/">Research Programmes</Link></h1>

                            </Card>
                        </Col>
                    </Row>
                </div>
            </Card>
        </div>
    }
}

export default Facilities