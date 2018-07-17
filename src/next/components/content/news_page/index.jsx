import React from 'react';

import NewsPage from '../../derived/news_layout';
import TopBar from '../../derived/top_bar';
import ActionBar from '../../derived/action_bar';

const actions = ['Login', 'Settings'];


class NewsPageContent extends React.Component {
  render() {
    return(
        <div>
          <style jsx global>
            {`
              @import url('https://fonts.googleapis.com/css?family=Open+Sans:400');
              @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');
              @import url('https://fonts.googleapis.com/icon?family=Material+Icons');


              body {
                margin: 0;
                padding: 0;
                font-family: 'Open Sans', sans-serif;
                font-weight: 400;
                color: #5d5d5d;
              }
              `}
            </style>

              <style jsx> {`
                #top-bar-container {
                  border-bottom: 1px solid #9e9e9e;
                  grid-row-start: 1;
                  grid-row-end: 2;
                }

                #action-bar-container {
                  border-top: 1px solid #9e9e9e;
                  grid-row-start: 3;
                  grid-row-end: 4;
                }
                `}
              </style>
            <div id='top-bar-container'>
              <TopBar />
            </div>
            <NewsPage />
            <div id='action-bar-container'>
              <ActionBar actions={actions} />
            </div>

        </div>
    )
  }
}

export default NewsPageContent
