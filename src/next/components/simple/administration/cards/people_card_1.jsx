import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';


class PeopleCards extends React.Component {

    render() {
        const links = this.props.links.map(link => (
            <div>
            <div className="listitem">
                <Typography variant="subheading"
                    component="h2">
                    <a href={link.url} >{link.title}</a>
                </Typography>
            </div>
            <Divider />
        </div>
        ))
        return (
            <div>
                <div>
                    <Card className="card">
                        <CardContent>
                            <div id="card-content-container">
                                {links}
                            </div>
                        </CardContent>
                    </Card>
                    <style jsx>
                        {`
                         .card {
                            width: '40vw',
                            borderTop: '5px #0000e8 solid',
                            marginTop: 10,
                            minWidth: 275,
                        },
                        .listitem {
                            textAlign: 'center',
                            marginTop: 15,
                            marginBottom: 15,
                        }
                        #card-content-container {
                            width: 50%;
                            margin-left: 25%;
                            margin-right: 25%;
                        }
                        `}
                    </style>
                </div>
            </div>
        )
    }
}


export default PeopleCards;
