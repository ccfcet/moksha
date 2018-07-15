import React from 'react'
import Card from '../../simple/college_contact_card'
import Grid from '@material-ui/core/Grid';

class ActivityPage extends React.Component{
    render(){
        return(
            <div id='activityPage'>
                <Grid container justify='center' spacing={24}>
                    <Grid item xs={6} sm={3}>
                        <Card PropertyName='IEEE' PropertyContent1='Description'/>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Card PropertyName='ISTE' PropertyContent1='Description'/>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Card PropertyName='ENCRESE' PropertyContent1='Description'/>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Card PropertyName='BAJA' PropertyContent1='Description'/>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Card PropertyName='IPR CELL' PropertyContent1='Description'/>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Card PropertyName='ISNT' PropertyContent1='Description'/>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Card PropertyName='Environmental Club' PropertyContent1='Description'/>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Card PropertyName='Industry Institute Partnership Club' PropertyContent1='Description'/>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Card PropertyName='Entrepreneurship Development Club' PropertyContent1='Description'/>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Card PropertyName='Kerala Education Grid' PropertyContent1='Description'/>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Card PropertyName='National Service Scheme' PropertyContent1='Description'/>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Card PropertyName='EGRC-CET' PropertyContent1='Description'/>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Card PropertyName='EScholarships and Awards' PropertyContent1='Description'/>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Card PropertyName='CETAA(Alumni)' PropertyContent1='Description'/>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Card PropertyName='Parent Teacher Association ' PropertyContent1='Description'/>
                    </Grid>

                </Grid>
                <style jsx>
                {`
                    #activityPage{
                        padding-bottom:20px

                    }
                
                `}
                </style>
            </div>

        )
    }



}

export default ActivityPage