import React from 'react';

import HomePageContent from '../components/content/home_page';
import MainLayout from '../components/derived/main_layout';

class HomePage extends React.Component {
  render() {
    return(
      <MainLayout>
        <HomePageContent />
      </MainLayout>
    )
  }
}

export default HomePage;
