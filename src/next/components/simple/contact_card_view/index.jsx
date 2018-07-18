import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
const styles = {
  card: {
    minWidth: 300,
    marginTop:20,
    background : '#0d1f3a'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography >
            {props.facultyName}
          </Typography>
          <Typography  color='textSecondary'>
            {props.position}
          </Typography>
          <Divider/>
          <Typography >
          {props.mobile}
          </Typography>
          <Typography>
          {props.email}
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
