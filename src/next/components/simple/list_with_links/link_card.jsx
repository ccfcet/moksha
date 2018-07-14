import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  date: {
    marginBottom: 12,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  description: {
    fontSize: 18
  }
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.date} color="textSecondary">
            07-Jul-2018
          </Typography>
          <Typography className={classes.description} variant="headline" component="h4">
            Purchase of measuring instruments for the Electrical Machines Lab
            of Electrical Engineering Department of this Institution.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View Tender</Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
