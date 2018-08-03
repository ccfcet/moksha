import React from 'react'
import fetch from 'isomorphic-unfetch'

import Department from '../../components/content/department_page'
import MainLayout from '../../components/derived/main_layout'
import config from '../../config.json'

class department extends React.Component {
    static async getInitialProps() {
        let data = {}
        let res;

        res = await fetch(config.apiLocation + '/public/information/entity_name/' +
            config.slug)
        data['collegeName'] = await res.json()

        res = await fetch(config.apiLocation + '/public/menu/' + config.slug + '/1')
        data['menu'] = await res.json()

        res = await fetch(config.apiLocation + '/public/information/')
        return {
            mainLayout: {
                topBar: {
                    brandBar: {
                        collegeName: data.collegeName.data.entity_name
                    },
                    menuBar: {
                        menu: data.menu
                    }
                }
            }
        }
    }

    render() {
        return (
            <MainLayout mainLayout={this.props.mainLayout}>
                <Department />
            </MainLayout>
        )
    }
}

export default department
