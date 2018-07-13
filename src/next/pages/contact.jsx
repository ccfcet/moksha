import React from 'react';
import CardView from '../components/simple/card_view';
import Grid from '@material-ui/core/Grid';
class Contact extends React.Component{
    render(){
        return(
           <Grid container spacing={16}> 
            <Grid item xs={6} sm={3}>
                <CardView facultyName='Dr Sumesh' position='Principal' mobile='123456789' email='abc@gmail.com'/>
                
            </Grid>
            <Grid item xs={6} sm={3}>
                <CardView facultyName='Dr Sumesh' position='Principal' mobile='123456789' email='abc@gmail.com'/>

            </Grid>
        {/* <Grid item xs={12} sm={6}>
                <CardView />
            </Grid> */}
            {/* <CardView /> */}
            {/* </Grid> */}
            </Grid>
        )
    }
}

export default Contact;