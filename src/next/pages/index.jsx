import React from 'react';

import HomePageContent from '../components/content/home_page';
import MainLayout from '../components/derived/main_layout';

class HomePage extends React.Component {
  static async getInitialProps() {
    return {
      mainLayout: {
        topBar: {
          brandBar: {
            collegeName: "College of Engineering Trivandrum"
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
