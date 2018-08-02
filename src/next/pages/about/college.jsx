import React from 'react';
import fetch from 'isomorphic-unfetch';

import AboutPageContent from '../../components/content/about_page';
import MainLayout from '../../components/derived/main_layout';

import config from '../../config.json'

class AboutPage extends React.Component {
  static async getInitialProps() {
    let data = {}
    let res;
    
    res = await fetch(config.apiLocation + '/public/information/about/cet')
    data['about'] = await res.json(); 

    res = await fetch(config.apiLocation + '/public/information/entity_name/cet')
    data['collegeName'] = await res.json()

    res = await fetch(config.apiLocation + '/public/menu/cet/1')
    data['menu'] = await res.json()

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
      aboutContent: {
        heading: data.about.data.heading,
        description: data.about.data.description,
        beginning: data.about.data.beginning,
        mission: data.about.data.mission,
        vision: data.about.data.vision
      }
    }

  }
  render() {
    return(
      <MainLayout mainLayout={this.props.mainLayout}>
        <AboutPageContent aboutContent={this.props.aboutContent}/>
      </MainLayout>
    )
  }
}

export default AboutPage
