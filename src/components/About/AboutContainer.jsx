import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Row, Col } from 'antd';

import StaticUpperNav from '../StaticUpperNav/StaticUpperNav'
import About from './About.jsx'
import History from './History.jsx'
import Accreditation from './Accreditation.jsx'
// import Statements from './Statements.jsx'
import Contact from './Contact.jsx'


import './about-container.css'
class AboutContainer extends React.Component {
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
                            <BrowserRouter>
                                <div className="content"> 
                                    <Route exact path="/about" component={About} />
                                    <Route path="/about/history" component={History} />
                                    <Route path="/about/accreditation" component={Accreditation} />
                                    {/* <Route path="/about/statements" component={Statements} /> */}
                                    <Route path="/about/contact" component={Contact} />
                                </div>
                            </BrowserRouter>
                        </Col>
                    </Row>
                </div>
            </div>
            {/* }


            <BrowserRouter>
                <div>
                    <Route exact path="/about" component={About} />
                    <Route path="/about/history" component={History} />
                </div>
            </BrowserRouter> */}
        
    }
}

export default AboutContainer;