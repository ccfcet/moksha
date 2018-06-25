import React from 'react'
import { Row, Col } from 'antd'

class ContactContent extends React.Component {
    render() {
        return <div>
            <div className="text-content">
                <Row>
                    <div className="title">
                        <Col span={24}>
                            <h1>Contact</h1>

                        </Col>
                    </div>
                </Row>
            </div>

        </div>
    }
}

export default ContactContent;