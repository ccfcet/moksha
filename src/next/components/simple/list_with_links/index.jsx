import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import LinkCard from './link_card'

class LinksContainer extends React.Component {
    render() {
        return (
            <div>
                <style jsx>
                    {`
                        #outercontainer {
                            padding-left: 2;
                            padding-right: 2;
                        }
                        #headcontainer {
                            font-size: 24;
                        }
                        #heading {
                            font-size: 18;
                        }  
                        #card-container {
                            margin:2
                        }
                    `}
                </style>

                <div id='outercontainer'>
                    <div id='headcontainer'>
                        <Typography id='heading'>
                            Tenders
                    </Typography>
                    </div>

                    <div id='card-container'>
                        {<LinkCard />}
                    </div>
                </div>
            </div >
        );
    }

}

export default LinksContainer;