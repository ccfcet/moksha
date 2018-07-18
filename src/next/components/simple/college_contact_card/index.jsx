import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// import PhoneIcon from '@material-ui/icons/PermPhoneMsg'
const styles = {
  card: {
    minWidth: 200,
    marginTop:20,
    maxWidth:300,
    minHeight:150,
    background: '#194f85'

  },

  title: {
    marginTop:20,
    marginBottom: 5,
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
  content:{
      marginTop:15,
      fontSize: 15,

  }
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent >

          <Typography className={classes.title} align='center'>
            {props.PropertyName}
          </Typography>
          <Divider/>
        <div className={classes.content}>
          <Typography color='textSecondary'>
            {props.PropertyContent1}
          </Typography>
          <Typography color='textSecondary'>
            {props.PropertyContent2}
          </Typography>
          <Typography color='textSecondary'>
            {props.PropertyContent3}
          </Typography>
          <Typography color='textSecondary'>
            {props.PropertyContent4}
          </Typography>
        </div>
        </CardContent>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SimpleCard);
