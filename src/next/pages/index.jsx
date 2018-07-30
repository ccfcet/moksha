import React from 'react';
import fetch from 'isomorphic-unfetch';

import HomePageContent from '../components/content/home_page';
import MainLayout from '../components/derived/main_layout';

import config from '../config.json';

class HomePage extends React.Component {
  static async getInitialProps() {
    const res = await fetch(config.apiLocation + '/public/information/entity_name/cet')
    const data = await res.json()

    return {
      mainLayout: {
        topBar: {
          brandBar: {
            collegeName: data.data.entity_name
          }
        }
      }
    }
  }

  render() {
    return(
      <MainLayout mainLayout={this.props.mainLayout}>
        <HomePageContent />
      </MainLayout>
    )
  }
}

export default HomePage;
