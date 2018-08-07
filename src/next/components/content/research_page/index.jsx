import React from 'react'
import Grid from '@material-ui/core/Grid'

import PeopleCard from '../../simple/administration/cards/people_card_1'

class ResearchPage extends React.Component {
    render() {
        return (
            <div>
                <div id="administration-container-paper">
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container justify="center">
                                <div id="heading">
                                    Research at CET
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container justify="center">
                            <div id="small-description">
                                The range of research activities at College 
                                of Engineering Trivandrum is broad and deep. 
                                CET scholars conduct research in almost every 
                                field, and seek to expand human knowledge 
                                through analysis, innovation, and insight.

                                Research is supported by more than $800 million of
                                sponsored research funds each year, and it is
                                carried out in all the departments, and
                                at more than 100 research centers, on campus and
                                around the world. Researchers include faculty
                                members, visiting scholars, post-doctoral fellows,
                                and graduate and undergraduate students, and they
                                collaborate with colleagues across the University,
                                at affiliated institutions, and at other research
                                institutions.
                            </div>
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

export default ResearchPage;