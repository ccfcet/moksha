import React from 'react'
import Grid from '@material-ui/core/Grid'

import PeopleCard from '../../simple/administration/cards/people_card_1'

class AdministrationPage extends React.Component {
    render() {
        return (
            <div>
                <div id="administration-container-paper">
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <div id="heading">
                                    {this.props.administration.heading}
                                </div>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <div id="subheading">
                                    {this.props.administration.governance.title}
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <div id="small-description">
                                    {this.props.administration.governance
                                        .description}
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <PeopleCard links={this.props.administration
                                    .governance.links}/>
                            </Grid>
                        </Grid>


                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <div id="subheading">
                                    {this.props.administration.offices.title}
                                </div>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container>
                                <div id="small-description">
                                    {this.props.administration.offices
                                        .description}
                                </div>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <PeopleCard links={this.props.administration
                                    .offices.links}/>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <div id="subheading">
                                    {this.props.administration.rti.title}
                                </div>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container>
                                <div id="small-description">
                                </div>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container justify="center">
                            <PeopleCard links={this.props.administration
                                    .rti.links}/>
                            </Grid>
                        </Grid>

                    </Grid>
                </div>
                <style jsx> {`

                #administration-container-paper {
                    margin-left: 20vw;
                    margin-right: 20vw;
                    margin-bottom: 2vh;
                }

                #heading {
                    font-family: 'Open Sans',sans-serif;
                    font-weight: 400;
                    height : 100%;
                    padding-top : 5px;
                    padding-bottom : 5px;
                    text-align : center;
                    font-size : 2.5em;
                    color : black;
                }

                #subheading {
                    font-family: 'Open Sans',sans-serif;
                    font-weight: 300;
                    height : 100%;
                    padding-top : 5px;
                    padding-bottom : 5px;
                    text-align : center;
                    font-size : 2em;
                    color : black;
                }

                #small-description {
                    font-family: 'Open Sans',sans-serif;
                    font-weight: 300;
                    height : 100%;
                    padding-top : 5px;
                    padding-bottom : 5px;
                    // text-align : center;
                    font-size : 1.1em;
                    color : black;
                    opacity: 0.87;
                }
                `}
                </style>
            </div>
        );
    }
}

export default AdministrationPage;