import React from 'react';
import ContactPage from '../../components/content/contact_page'
import MainLayout from '../../components/derived/main_layout'


class Contact extends React.Component{

    render(){
        return(
        <MainLayout>
            <ContactPage />
        </MainLayout>
        )
    }
}

export default Contact;
