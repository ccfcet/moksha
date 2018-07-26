import React from 'react'
import PeopleCard from '../../simple/administration/cards/people_card'
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

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
                                <div id="governance-text">
                                    College of Engineering Trivandrum is led by the
                                    Principal, Deans and the College Council.
                             </div>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <PeopleCard />
                            </Grid>
                        </Grid>

                    </Grid>
                </div>
                <style jsx> {`

                #administration-container-paper {
                    margin-left: 10vw;
                    margin-right: 10vw;
                }

                #heading {
                    font-family: 'Open Sans',sans-serif;
                    font-weight: 300;
                    height : 100%;
                    padding-top : 5px;
                    padding-bottom : 5px;
                    text-align : center;
                    font-size : 3em;
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

                #governance-text {
                    font-family: 'Open Sans',sans-serif;
                    font-weight: 300;
                    height : 100%;
                    padding-top : 5px;
                    padding-bottom : 5px;
                    text-align : center;
                    font-size : 1.2em;
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