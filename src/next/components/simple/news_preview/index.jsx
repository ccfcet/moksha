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

const styles = theme => ({
  card: {
    maxWidth: "100%",
    paddingLeft: "0",
    paddingRight: "0",
    marginBottom: theme.spacing.unit * 2,
  },
  cardContent: {
    padding: 0
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  articleBase: {
    display: "grid",
    gridColumn: "1fr 4fr 1fr 8fr 1fr",
    gridRow: "8dp 1fr 8dp",
    padding: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
  },
  articleHeading: {
    margin: theme.spacing.unit * 2,
  },
  articleImg: {
    gridArea: "2 / 2 / 2 / 2"
  },
  articleContent: {
    padding: theme.spacing.unit * 2,
    gridArea: "2 / 4 / 2 / 5"
  }
});

class NewsPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articlesPreview: [{
        img: "preview",
        heading: "Engaging with Portuguese Design",
        text: "A fascinating exhibition at RISD showcases contemporary work using traditional materials and techniques and kicks off a multiyear collaboration between RISD and several organizations in Portugal.",
      },
      {
        img: "preview",
        heading: "Engaging with Portuguese Design",
        text: "A fascinating exhibition at RISD showcases contemporary work using traditional materials and techniques and kicks off a multiyear collaboration between RISD and several organizations in Portugal.",
      },
      {
        img: "preview",
        heading: "Engaging with Portuguese Design",
        text: "A fascinating exhibition at RISD showcases contemporary work using traditional materials and techniques and kicks off a multiyear collaboration between RISD and several organizations in Portugal.",
      }],
    }
  }
  render () {
    const { classes } = this.props;
    const { articlesPreview } = this.state;
    return (
      <div>
        <Card className={classes.card} square={true}>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.articleHeading} variant="headline" component="h1">
              News Highlights
            </Typography>
            <Divider />

            {
            articlesPreview.map( key => (
              <div>
                <div className={classes.articleBase}>
                  <div className={classes.articleImg}>
                    <img src={`/static/${key.img}.jpg`} alt={key.heading} title={key.heading} width="100%"/>
                  </div>
                  <div className={classes.articleContent}>
                    <Typography gutterBottom variant="headline">
                      {key.heading}
                    </Typography>
                    <Typography gutterBottom>
                      {key.text} 
                    </Typography>
                    <Button size="small">
                      Read More
                    </Button>
                  </div>
                </div>
                <Divider dark />
              </div>
            ))
            }

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
}

NewsPreview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsPreview);