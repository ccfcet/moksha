import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';

import NewsPreview from '../../simple/news_preview';

const styles = theme => ({
  root: {
    // background: theme.palette.primary.dark
    background: '#0000e8'
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
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        className={classes.root}
        direction="column"
        justify="flex-start"
        alignItems="center"
        spacing={16}
        >
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={8}>
            <Grid
              container
              justify="flex-start"
              spacing={16}
              >
                <Grid item xs={12}>
                  <NewsPreview newsData={this.props.newsData}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
      }
    }

    export default withStyles(styles)(News);
