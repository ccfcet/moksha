import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = {
  card: {
    maxWidth: "100%",
    paddingLeft: "0",
    paddingRight: "0"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card} square={true}>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
            News Highlight
          </Typography>
          <Divider />
          <Grid container justify="space-around">
            <Grid item xs={4}>
              <img src="https://lh3.googleusercontent.com/kO8QB1Hj8SN2wHN3gfDYAbnWB1VkJJYJIh7PxY9MNACU_22xGPA67KOOWZ1pyEqNNrva4JcUZljfBF1dyFcVF-pUShG0hW7dyQ=s300" width="100%" />
            </Grid>
            <Grid item xs={7}>
            <Typography gutterBottom variant="headline">
              Engaging with Portuguese Design
            </Typography>
            <Typography gutterBottom>
              A fascinating exhibition at RISD showcases contemporary work using traditional materials and
              techniques and kicks off a multiyear collaboration between RISD and several organizations in 
              Portugal. 
            </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Read More News
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);