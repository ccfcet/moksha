import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';

import NewsPreview from '../../simple/news_preview';

const styles = theme => ({
  root: {
    // background: theme.palette.primary.dark
    // background: '#0000e8'
  },
  paper: {
    padding: theme.spacing.unit
  },
  pageHeading: {
  },
  card: {
    maxWidth: "100%",
    marginBottom: theme.spacing.unit
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  sidebarButtonText: {
    alignText: "center"
  }
});

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarButtons: ["Stories", "Events", "Exhibitions", "Results", "Tenders"]
    }
  }

  render() {
    return (
      <div>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          spacing={16}
        >
          <div id="heading">
            Events
          </div>
          <Grid item xs={8}>
            <Grid
              container
              justify="flex-start"
              spacing={16}
            >
              <div id="subheading">
                Dhwani
              </div>
              <div id="small-description">
                Dhwani is the annual cultural festival of CET. It is known for
                its organisation and activities. It is a four-day-long event
                held every year and attracts a crowd of 40,000 students and
                young people from across the country, making it one of the
                largest such fests in Kerala. Dhwani events include speaking,
                dancing, thespian, quizzing and word games, professional shows
                (nicknamed proshows) and workshops on music, fashion, art, and
                dance.
                </div>

              <div id="subheading">
                Drishti
              </div>
              <div id="small-description">
                Drishti is the annual technical festival of CET. It is known for
                its organisation and activities. It is a three-day-long event
                held every year and attracts a crowd of 5,000 students and young
                people from across the country, making it one of the largest
                such fests in kerala.
                </div>

            </Grid>
          </Grid>
        </Grid>
        <style jsx>
          {`
          #heading {
            font-family: 'Open Sans',sans-serif;
            font-weight: 400;
            height : 100%;
            padding-top : 5px;
            padding-bottom : 5px;
            text-align : center;
            font-size : 2.5em;
            color : black;
          }
          #subheading {
            font-family: 'Open Sans',sans-serif;
            font-weight: 300;
            height : 100%;
            padding-top : 5px;
            padding-bottom : 5px;
            text-align : center;
            font-size : 2em;
            color : black;
        }

        #small-description {
            font-family: 'Open Sans',sans-serif;
            font-weight: 300;
            height : 100%;
            padding-top : 5px;
            padding-bottom : 5px;
            // text-align : center;
            font-size : 1.1em;
            color : black;
            opacity: 0.87;
        }
          `}
        </style>
      </div>
    );
  }
}

export default withStyles(styles)(News);
