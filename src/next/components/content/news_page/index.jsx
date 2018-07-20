import React from 'react';

import NewsPage from '../../derived/news_layout';
import TopBar from '../../derived/top_bar';
import ActionBar from '../../derived/action_bar';

const actions = ['Login', 'Settings'];


class NewsTendersContent extends React.Component {
  render() {
    return (
      <div>
        <TopBar />

        <NewsPage />

        <ActionBar actions={actions} />
      </div>
    )
  }
}

export default NewsTendersContent
