import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
// import PhoneIcon from '@material-ui/icons/PermPhoneMsg'
const styles = {
  card: {
    maxWidth: 325,
    minHeight:150,
    width: '100%',
  },
  media: {
    height: 128,
    paddingTop: '50%', // 16:9
    backgroundSize: 'contain'
  },
  title: {
    marginTop: 5,
    marginBottom: 15,
    fontSize: 20,
  },
};

function SimpleCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.media} title={props.title} image={props.image} />
        <CardContent >
          <Typography className={classes.title} align='center'>
            {props.activityName}
          </Typography>
          <Typography component="p">
            {props.activityDescription}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
