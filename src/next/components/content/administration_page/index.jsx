import React from 'react'
import Grid from '@material-ui/core/Grid';

import PeopleCard from '../../simple/administration/cards/people_card'
import OfficesCard from '../../simple/administration/cards/offices_card'
import RTICard from '../../simple/administration/cards/rti'

class AdministrationPage extends React.Component {
    render() {
        return (
            <div>
                <div id="administration-container-paper">
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <div id="heading">
                                    Administration
                             </div>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <div id="subheading">
                                    Governance
                             </div>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <div id="small-description">
                                    College of Engineering Trivandrum is led by
                                    the Principal, Deans and the College
                                    Council.
                             </div>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <PeopleCard />
                            </Grid>
                        </Grid>


                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <div id="subheading">
                                    Administrative Offices
                             </div>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container>
                                <div id="small-description">
                                    College of Engineering Trivandrum's
                                    administrative offices are essential to
                                    supporting the operations and mission of the
                                    college. They deal with a diverse range of
                                    issues including human resources, financial
                                    activities, research administration and
                                    student affairs.
                             </div>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <OfficesCard />
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <div id="subheading">
                                    Right to Information
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
                                <RTICard />
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