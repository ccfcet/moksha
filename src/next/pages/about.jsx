import React from 'react';

import AboutPageContent from '../components/content/about_page';
import MainLayout from '../components/derived/main_layout';

class AboutPage extends React.Component {
  render() {
    return(
      <MainLayout>
        <AboutPageContent />
      </MainLayout>
    )
  }
}

export default AboutPage
