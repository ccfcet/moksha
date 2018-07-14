import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 325,
  },
  media: {
    height: 128,
    paddingTop: '50%', // 16:9
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.media} title={props.departmentName} image={props.image}/>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.departmentName}
          </Typography>
          <Typography component="p">
            {props.departmentDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href={props.departmentURL}>
            Learn More
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
