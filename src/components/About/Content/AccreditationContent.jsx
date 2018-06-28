import React from 'react'
import { Table, Card, Row, Col } from 'antd'

import './text-content.css'
import './accreditation-content.css'

class AccreditationContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [{
                key: '1',
                id: 1,
                name: 'Civil Engineering',
                status: 'Accredited',
                validity: '5 years w.e.f  18-09-2013'
            }, {
                key: '2',
                id: 2,
                name: 'Computer Science and Engineering',
                status: 'Not accredited',
                validity: '-'
            }, {
                key: '3',
                id: 3,
                name: 'Electrical & Electronics Engineering',
                status: 'Accredited',
                validity: '5 years w.e.f  18-09-2013'
            }, {
                key: '4',
                id: 4,
                name: ' Electronics & Communication Engineering',
                status: 'Accredited',
                validity: '5 years w.e.f  18-09-2013'
            }, {
                key: '5',
                id: 5,
                name: ' Mechanical Engineering',
                status: 'Accredited',
                validity: '5 years w.e.f  18-09-2013'
            }],
            columns: [{
                title: 'Sl. No',
                dataIndex: 'id',
                key: 'id',
            }, {
                title: 'Name of programme',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: 'Accreditation status',
                dataIndex: 'status',
                key: 'status',
            }, {
                title: 'Period of validity',
                dataIndex: 'validity',
                key: 'validity',
            }]
        };
    }

    render() {
        return <Card className="text-content">
            <div>
                <Row>
                    <div className="title">
                        <Col span={24}>
                            <h1>Accreditation</h1>
                        </Col>
                    </div>
                    <div className="accreditation-table-container">
                        <Table id="accreditation-table" dataSource={this.state.dataSource} columns={this.state.columns} />
                    </div>
                </Row>
            </div>
        </Card>
    }
}

export default AccreditationContent;