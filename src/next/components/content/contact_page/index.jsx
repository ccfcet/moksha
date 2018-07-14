import React from 'react'
import ContactCardView from '../../../components/simple/contact_card_view'
import Grid from '@material-ui/core/Grid';
import CollegeCardView from '../../../components/simple/college_contact_card'
import Divider from '@material-ui/core/Divider'
// import Typography from '@material-ui/core/Typography';

class ContactPage extends React.Component{
    render(){
        return(
            <div id='contact-page-content'>
                <div id='contact-page-head'>
                    Contact Us
                </div>
                <div id='college-contact'>
                    
                    <Grid container spacing={16} justify='center' >
                        <Grid item xs={6} sm={3}>
                            <CollegeCardView PropertyName='Email' PropertyContent1='cetvm@cet.ac.in' />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <CollegeCardView PropertyName='Address' PropertyContent1=' College of Engineering Trivandrum.' PropertyContent2='Thiruvananthapuram.' PropertyContent3='Pin 695016.' PropertyContent4='Kerala,India.' />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <CollegeCardView PropertyName='Phone Number' PropertyContent1='0471-2515556' />
                        </Grid>
                        
                    </Grid>
                    <div id='firstDivider'>
                        <Divider />
                    </div>
                </div>

                <div id='contact-content'>
                    <Grid container spacing={16} justify='center'> 
                        <Grid item xs={6} sm={3}>
                            <ContactCardView facultyName='Dr Jiji C V' position='Principal' mobile='0471 2515555' email='hello@cet.ac.in'/>
                
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <ContactCardView facultyName=' Dr K Krishna Kumar' position='Dean Research' mobile='9447254303' email='hello@cet.ac.in'/>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <ContactCardView facultyName='Prof. Shaji T L' position='UG Dean' mobile='9447054334' email='hello@cet.ac.in'/>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <ContactCardView facultyName='Prof. Neena Thomas' position='PG Dean' mobile='9895642569' email='hello@cet.ac.in'/>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <ContactCardView facultyName='Dr A Samson' position='HOD Mechanical' mobile='9447324844'  email='hello@cet.ac.in'/>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <ContactCardView facultyName=' Dr M.S Girish' position='HOD Civil' mobile='0471 2515560' email='hello@cet.ac.in'/>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <ContactCardView facultyName='Dr. S. Ushakumari' position='HOD Electrical' mobile='0471 2515562' email='hello@cet.ac.in'/>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <ContactCardView facultyName=' Dr. Ciza Thomas' position='HOD Electronics' mobile='0471 2515563' email='hello@cet.ac.in'/>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <ContactCardView facultyName=' Dr. Shreelekshmi R' position='HOD Computer Science' mobile='0471 2515564' email='hello@cet.ac.in'/>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <ContactCardView facultyName=' Dr. Sheeja K P' position='HOD Architecture' mobile='0471 2515565' email='hello@cet.ac.in'/>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <ContactCardView facultyName='Dr. Suresh Subramoniam' position='HOD MBA' mobile='0471 2515588' email='hello@cet.ac.in'/>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <ContactCardView facultyName='Prof. Sajeev Mohan M' position='HOD Physics' mobile='0471 2515567' email='hello@cet.ac.in'/>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <ContactCardView facultyName='Prof. P. S. Rajendran' position='HOD Mathematics' mobile='0471 2515569' email='hello@cet.ac.in'/>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <ContactCardView facultyName='Dr. Muhammed Arif M' position='HOD Chemistry' mobile='0471 2515568' email='hello@cet.ac.in'/>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <ContactCardView facultyName=' Dr Jayarajan David' position='HOD Physical Education' mobile='0471 2515575' email='hello@cet.ac.in'/>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <ContactCardView facultyName='Dr Arvee Sujil Johnson' position='Principal(Evening Courses)' mobile='0471 2515574' email='hello@cet.ac.in'/>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <ContactCardView facultyName='Dr D Bijulal' position='Co-Ordinator (CGPU)' mobile='0471 2595152' email='hello@cet.ac.in'/>

                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <ContactCardView facultyName='Prof. Jose T. Joseph' position='HOD MCA' mobile='0471 2599655' email='hello@cet.ac.in'/>

                        </Grid>

      
                    </Grid>
                </div>
                <style jsx>
					{`
						@import url('https://fonts.googleapis.com/css?family=Roboto');

						#contact-page-content {
							height : 100%;
							display : grid;
							grid-template-rows : .5fr 1.5fr 3fr;
						}

						#contact-page-head {
							grid-row : 1/2;
							height : 100%;
							padding-top : 50px;
							text-align : center;
							background-color : #0089ff;
							font-size : 2em;
							color : white;
						}

						#contact-content {
							grid-row : 3/4;
							padding : 0px 50px;
                            margin-top:0px;
							font-family: 'Roboto', sans-serif;
							font-size : 1.5em;
							background-color : white;
							color : white;
						}
                        #college-contact{
                            grid-row: 2/3;
                            padding-top :30px;
                            margin-top:20px;
                        }
                        #firstDivider{
                            margin-top :20px;
                            
                        }
                        #content-title{
							font-family: 'Roboto', sans-serif;
                            font-size:40px;
                            text-align:center;
                        }
					`}   
                </style>
            </div>




        )


    }




}

export default ContactPage