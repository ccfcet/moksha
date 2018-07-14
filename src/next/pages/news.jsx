import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MainLayout from '../components/derived/main_layout';

const styles = theme => ({
  root: {
    background: "#3f51b5"
  },
  paper: {
    padding: theme.spacing.unit
  },
  menu: {
    padding: "0px"
  }
});

class News extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <Grid 
        container
        className={classes.root}
        justify="center"
        alignItems="flex-start"
        spacing={16}
        //className={classes.root} 
      >
        <Grid item xs={8}>
          <Paper className={classes.paper} elevation={1}>
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
              <Paper elevation={1}>
                <List className={classes.menu} component="nav">
                  <ListItem button>
                    <ListItemText primary="Inbox" />
                  </ListItem>
                  <Divider />
                  <ListItem button divider>
                    <ListItemText primary="Drafts" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Trash" />
                  </ListItem>
                  <Divider light />
                  <ListItem button>
                    <ListItemText primary="Spam" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.paper} elevation={1}>
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