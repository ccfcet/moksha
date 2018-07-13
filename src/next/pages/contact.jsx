import React from 'react';
import CardView from '../components/simple/card_view';
import Grid from '@material-ui/core/Grid';
import MainLayout from '../components/derived/main_layout';


class Contact extends React.Component{
    
    render(){
        return(
        <MainLayout>    
           <Grid container spacing={16} justify='center'> 
            <Grid item xs={6} sm={3}>
                <CardView facultyName='Dr Sumesh' position='Principal' mobile='123456789' email='abc@gmail.com'/>
                
            </Grid>
            <Grid item xs={6} sm={3}>
                <CardView facultyName='Dr Sumesh' position='Principal' mobile='123456789' email='abc@gmail.com'/>

            </Grid>
             <Grid item xs={6} sm={3}>
                <CardView facultyName='Dr Sumesh' position='Principal' mobile='123456789' email='abc@gmail.com'/>

            </Grid>
      
            </Grid>
        </MainLayout>
        )
    }
}

export default Contact;