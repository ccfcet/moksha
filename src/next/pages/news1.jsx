import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


import MainLayout from '../components/derived/main_layout';
import NewsPreview from '../components/simple/news_preview';
import TendersList from '../components/simple/list_with_links';

const styles = theme => ({
  root: {
    background: theme.palette.primary.dark
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
  constructor(props){
    super(props);
    this.state = {
      sidebarButtons: ["Stories","Events","Exhibitions","Xyz","Tenders"]
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Grid 
          container
          className={classes.root}
          direction="column"
          justify="flex-start"
          alignItems="center"
          spacing={16}
        >
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={1} square={true}>
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
                <Paper elevation={1} square={true}>
                  <List component="nav" disablePadding={true}>
                    {
                      this.state.sidebarButtons.map(value => (
                        <ListItem button disableTypography={true} divider>
                          <ListItemText> 
                            <Typography className={classes.sidebarButtonText} variant="button">
                              {value}
                            </Typography>
                          </ListItemText>
                        </ListItem>
                      ))
                    }
                  </List>
                </Paper>
              </Grid>
              <Grid item xs={9}>
                <Card className={classes.card} square={true}>
                  <CardMedia
                    className={classes.media}
                    image="https://lh3.googleusercontent.com/gOpfjctx6qRG0hCN-4vBxEtNbL5226p_Q9su94GHdd5T1uByG1KfvDoUUwrlQpsbxLFKXifXXnhhXZ2JQ3NUgUui0gewFPsJ5KJMj0dqJA=s816"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                      Depth of Focus
                    </Typography>
                    <Typography component="p">
                      Digital media fellow <b>Rocio Delaloye</b> MFA 16 DM helps the RISD Museum reach new audiences
                      with bold creative content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
                
                <NewsPreview />

                <TendersList />
                
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(News);