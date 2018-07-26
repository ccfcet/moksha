import React from 'react';

import EventsContent from '../components/content/events_page';
import MainLayout from '../components/derived/main_layout';

class HomePage extends React.Component {
  render() {
    return(
      <MainLayout>
        <EventsContent />
      </MainLayout>
        )
      }
    }

    export default HomePage
