import React from 'react';
import fetch from 'isomorphic-unfetch';

import NewsContent from '../components/content/news_page';
import MainLayout from '../components/derived/main_layout';

import config from '../config.json';

class HomePage extends React.Component {
  
  static async getInitialProps() {
    let data = {}
    let res;

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
      }
    }
  }

  render() {
    return(
      <MainLayout mainLayout={this.props.mainLayout}>
        <NewsContent />
      </MainLayout>
        )
      }
    }

    export default HomePage
