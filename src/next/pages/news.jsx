import React from 'react';

import NewsContent from '../components/content/news_page';
import MainLayout from '../components/derived/main_layout';

class HomePage extends React.Component {
  render() {
    return(
      <MainLayout>
        <NewsContent />
      </MainLayout>
        )
      }
    }

    export default HomePage
