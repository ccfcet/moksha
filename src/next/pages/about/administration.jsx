import React from 'react'

import MainLayout from '../../components/derived/main_layout'
import Administration from '../../components/content/administration_page'

import config from '../../config.json'

class ActivityPage extends React.Component{
  static async getInitialProps() {
    let data = {}
    let res;
    
    
    res = await fetch(config.apiLocation + '/public/information/entity_name/cet')
    data['collegeName'] = await res.json()
    
    res = await fetch(config.apiLocation + '/public/menu/cet/1')
    data['menu'] = await res.json()
    
    res = await fetch(config.apiLocation + '/public/information/administration/cet')
    data['administration'] = await res.json(); 
    
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
      },
      administration: {
        heading: data.administration.data.heading,
        governance: {
          title: data.administration.data.governance.title,
          description: data.administration.data.governance.description,
          links: data.administration.data.governance.links
        },
        offices: {
          title: data.administration.data.offices.title,
          description: data.administration.data.offices.description,
          links: data.administration.data.offices.links
        },
        rti: {
          title: data.administration.data.rti.title,
          links: data.administration.data.rti.links
        }
      }
    }
  }

  render(){
    return(
      <MainLayout mainLayout={this.props.mainLayout}>
        <Administration administration={this.props.administration}/>
      </MainLayout>
    )
  }
}

export default ActivityPage
