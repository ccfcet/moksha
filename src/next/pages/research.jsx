import React from 'react'

import MainLayout from '../components/derived/main_layout'
import Research from '../components/content/research_page'

import config from '../config.json'

class ResearchPage extends React.Component{
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
      }
      }
    }
  // }

  render(){
    return(
      <MainLayout mainLayout={this.props.mainLayout}>
        <Research/>
      </MainLayout>
    )
  }
}

export default ResearchPage
