import React from 'react';
import fetch from 'isomorphic-unfetch';

import NewsContent from '../components/content/news_page';
import MainLayout from '../components/derived/main_layout';

import config from '../config.json';

class HomePage extends React.Component {
  
  static async getInitialProps() {
    let data = {}
    let res;

    res = await fetch(config.apiLocation + '/public/information/entity_name/' +
    config.slug)
    data['collegeName'] = await res.json()

    res = await fetch(config.apiLocation + '/public/menu/' + config.slug + '/1')
    data['menu'] = await res.json()

    res = await fetch(config.apiLocation + '/private/news/' + config.slug)
    data['news'] = await res.json()

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
      newsContent: {
        news: data.news
      }
    }
  }

  render() {
    return(
      <MainLayout mainLayout={this.props.mainLayout}>
        <NewsContent newsData={this.props.newsContent}/>
      </MainLayout>
        )
      }
    }

    export default HomePage
