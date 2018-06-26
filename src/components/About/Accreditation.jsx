import React from 'react'
import { Card } from 'antd'

import AccreditationContent from './Content/AccreditationContent';
class Accreditation extends React.Component {
    render() {
        return <Card>
            <AccreditationContent />
        </Card>
    }
}

export default Accreditation;