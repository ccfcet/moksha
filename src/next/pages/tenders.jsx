import React from 'react';

import TendersContent from '../components/content/tenders_page';
import MainLayout from '../components/derived/main_layout';

class HomePage extends React.Component {
  render() {
    return(
      <MainLayout>
        <TendersContent />
      </MainLayout>
    )
  }
}

export default HomePage
