import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = {
  card: {
    minWidth: 275,
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
  listitem: {
    marginTop:10,
    marginBottom:10,
  }
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.listitem}>
          <Typography variant="subheading" component="h2">
          <a href="/" >Office of the Principal</a>
          </Typography>
          </div>

          <Divider />
          <div className={classes.listitem}>
          <Typography variant="subheading" component="h2">
          <a href="/" >Office of the Undergraduate Dean</a>
          </Typography>
          </div>
          <Divider />
          <div className={classes.listitem}>
          <Typography variant="subheading" component="h2">
          <a href="/" >Office of the Postgraduate Dean</a>
          </Typography>
          </div>
          <Divider />
          <div className={classes.listitem}>
          <Typography variant="subheading" component="h2">
          <a href="/" >Office of the Research Dean</a>
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
