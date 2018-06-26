import React from 'react'
import { Card } from 'antd'
import ContactContent from './Content/ContactContent';
class Contact extends React.Component {
    render() {
        return <Card>
            <ContactContent />
        </Card>
    }
}

export default Contact;