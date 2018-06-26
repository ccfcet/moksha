import React from 'react';
import { Row, Col, Card } from 'antd';
// import { Carousel } from 'antd';
import { Link } from 'react-router-dom'

import './text-content.css'

class BlogTemplate extends React.Component {
    render() {
        return <Card className="text-content">
                <div>
                    <Row>
                      <Col span={24}>
                        <div className="title">
                                <h1>About CET</h1>
                              </div>
                                <p style={{fontSize: "1.3em"}}>
                                    The College of Engineering, Trivandrum was established
                                    in 1939 as the first Engineering College in the then
                                    Travancore State. The first classes were started on 3rd
                                    July 1939 during the reign of the Travancore King,
                                    Sri Chithira Thirunal Balarama Varma and as the head of
                                    the then Travancore state he deserves his share of
                                    credit in the establishment of the college. Initially
                                    the College was housed in the former office and bungalow
                                    of the Chief Engineer (present PMG Office).
                                    Maj T.H. Mathewman, a Britisher was the first Principal.
                                    Started as a constituent College of Travancore
                                    University, the College had an initial intake of 21
                                    students each for Degree and Diploma courses in Civil,
                                    Mechanical and Electrical branches. With the
                                    establishment of the Directorate of Technical Education
                                    in the late fifties, the College administration came
                                    under the control of the Government of Kerala. The
                                    College was shifted to the present sprawling
                                    125 acres in 1980.
                            </p>
                            </Col>
                    </Row>
                    <div>
                        <Row type="flex" justify="center">
                            <Col span={12}>
                                <Card>
                                    <h1>Mission</h1>
                                    <p className="mission-statement">
                                        To facilitate Quality Engineering Education to Equip and
                                        Enrich Young Men and Women to Meet Global Challenges in
                                        Development, Innovation and Application of Technology in
                                        the Service of Humanity
                            </p>
                                    <h1>Vision</h1>
                                    <p className="vision-statement">
                                        National Level Excellence and International Visibility
                                        in Every facet of Engineering Education.
                            </p>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <Row gutter={16}>
                            <h1>More</h1>
                            <Col span={8}>
                                <Card  className="link-card">
                                    <h1><Link to="/about/history"> CET at a glance</Link></h1>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card  className="link-card">
                                    <h1><Link to="/about/accreditation">Accreditation </Link></h1>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card  className="link-card">
                                    <h1><Link to="/about/contact">Contact Us</Link></h1>
                                    {/* <h1>Contact Us</h1> */}
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
        </Card>
    }
}

export default BlogTemplate;
