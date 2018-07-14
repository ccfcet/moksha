import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MainLayout from '../components/derived/main_layout';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit
  }
});

class News extends React.Component {

  render() {
    const { classes } = this.props;
    return (

      <Grid 
        container
        justify="center"
        alignItems="flex-start"
        spacing={16}
        //className={classes.root} 
      >
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Typography variant="headline">
              NEWS AND TENDERS
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Grid
            container
            justify="flex-start"
            spacing={16}
          >
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <Typography variant="headline">
                  Menu
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.paper}>
                <Typography variant="headline">
                  Content
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(News);