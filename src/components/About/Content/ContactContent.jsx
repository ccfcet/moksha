import React from 'react'
import { Card, Row, Col } from 'antd'
import './text-content.css'
class ContactContent extends React.Component {
    render() {
        return <Card className="text-content">
            <div>
                <Row>
                    <div className="title">
                        <Col span={24}>
                            <h1>Contact</h1>
                        </Col>
                    </div>
                </Row>
            </div>
        </Card>
    }
}

export default ContactContent;