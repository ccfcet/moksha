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
  constructor(props) {
    super(props);
    this.state = {
      sidebarButtons: ["Stories", "Events", "Exhibitions", "Results", "Tenders"]
    }
  }

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
            {/* <Paper className={classes.paper} elevation={1} square={true}>
              <Typography variant="headline">
                News
              </Typography>
            </Paper> */}
          </Grid>
          <Grid item xs={8}>
            <Grid
              container
              justify="flex-start"
              spacing={16}
              >
                <Grid item xs={12}>
                  {/* <Card className={classes.card} square={true}>
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
                  </Card> */}

                  <NewsPreview />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
      }
    }

    export default withStyles(styles)(News);