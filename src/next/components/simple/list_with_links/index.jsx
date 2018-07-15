import React from 'react';
import Grid from '@material-ui/core/Grid';

import LinkCard from './link_card'

class LinksContainer extends React.Component {
    render() {
        return (
            <div>
                <div id='outercontainer'>
                    <Grid container justify='center'>
                        <Grid item xs={12} sm={3}>
                        <Typography gutterBottom variant="headline" component="h1">
                            Recent Tender
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} justify='center'>
                        <Grid item xs={10} sm={10}>
                            <div id='card-container'>
                                {<LinkCard />}
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <style jsx>{`
                        #outercontainer {
                            padding-left: 2;
                            padding-right: 2;
                        }
                        #headcontainer {
                            font-size: 24;
                        }
                        #heading {
                            margin-top:10
                        }  
                        #card-container {
                            margin:2
                        }
                    `}</style>

            </div >
        );
    }

}

export default LinksContainer;