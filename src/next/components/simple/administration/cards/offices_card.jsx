import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

const styles = {
  card: {
    width: '40vw',
    borderTop: '5px #0000e8 solid',
    marginTop: 10,
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
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
  }
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <div id="card-content-container">
            {this.props.links.map(link => {
              return (
                <div>
                  <div className={classes.listitem}>
                    <div className="list-item-link">
                      <a href={link.url} >{link.title}</a>
                    </div>
                  </div>
                  <Divider />
                </div>
              )
            })}

          </div>

        </CardContent>
      </Card>
      <style jsx>
        {`
      #card-content-container {
        width: 50%;
        margin-left: 25%;
        margin-right: 25%;
      }
      #list-item-link {
        font-family: 'Open Sans',sans-serif;
        font-weight: 300;
        font-size : 16px;
        color : black;
      }
      `}
      </style>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
