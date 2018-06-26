import React from 'react'
import { Card } from 'antd'
// import Content from './HistoryContent/HistoryContent'
import HistoryContent from './Content/HistoryContent';
class History extends React.Component {
    render() {
        return <Card>
            <HistoryContent />
        </Card>
    }
}

export default History;