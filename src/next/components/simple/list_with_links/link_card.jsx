import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

import LinkContent from './link_content'

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
       {<LinkContent />}
       {<Divider />}
       {<LinkContent />}
       {<Divider />}
       {<LinkContent />}
       {<Divider />}
       {<LinkContent />}
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
