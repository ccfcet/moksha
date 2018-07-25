import React from 'react';

import NewsTendersContent from '../components/content/news_page';
import MainLayout from '../components/derived/main_layout';

class HomePage extends React.Component {
  render() {
    return(
      <MainLayout>
        <NewsTendersContent />
      </MainLayout>
        )
      }
    }

    export default HomePage
