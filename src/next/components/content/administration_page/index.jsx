import React from 'react'
import PeopleCard from '../../simple/administration/cards/people_card'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class AdministrationPage extends React.Component {
    render() {
        return (
            <div>
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
                            <div id="subheading">
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
                <style jsx>
                {`
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
                `}
                </style>
            </div>
        );
    }
}

export default AdministrationPage;