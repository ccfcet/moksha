import React from 'react';
import fetch from 'isomorphic-unfetch';

import AboutPageContent from '../../components/content/about_page';
import MainLayout from '../../components/derived/main_layout';

class AboutPage extends React.Component {
  static async getInitialProps() {
    let data = {}
    let res = await fetch(config.apiLocation + '/public/information/about/cet')
    data['about'] = await res.json(); 
  }
  render() {
    aboutData = data;
    return(
      <MainLayout>
        <AboutPageContent aboutContent={this.props.aboutData}/>
      </MainLayout>
    )
  }
}

export default AboutPage
