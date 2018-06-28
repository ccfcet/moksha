import React from 'react'
import { Table, Card, Row, Col } from 'antd'
import './text-content.css'
import './contact-content.css'

class ContactContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [{
                key: '1',
                name: 'Dr. Jiji C. V',
                position: 'Principal',
                phone: ' 0471 2515555'
            }, {
                key: '2',
                name: 'Dr K Krishna Kumar',
                position: 'Dean Research ',
                phone: ' 9447254303 '
            }, {
                key: '3',
                name: 'Prof. Shaji T L',
                position: 'UG Dean ',
                phone: '9447054334'
            }, {
                key: '4',
                name: 'Prof. Neena Thomas',
                position: 'PG Dean ',
                phone: '9895642569'
            }],
            columns: [{
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: 'Position',
                dataIndex: 'position',
                key: 'position',
            }, {
                title: 'Phone',
                dataIndex: 'phone',
                key: 'phone',
            }]
        };
    }
    render() {
        return <Card className="text-content">
            <div>
                <Row>
                    <div className="title">
                        <Col span={24}>
                            <h1>Contact</h1>
                        </Col>
                    </div>
                    <div className="contact-table-container">
                        <Table id="contact-table" dataSource={this.state.dataSource} columns={this.state.columns} />
                    </div>
                </Row>
            </div>
        </Card>
    }
}

export default ContactContent;