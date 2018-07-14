import React from 'react'
import Facilities from '../components/content/facilities_page'
import MainLayout from '../components/derived/main_layout'
// import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

class facilities extends React.Component{
   render(){
    return(
        <MainLayout>
            <Facilities />
        </MainLayout>
    )
    }
}

export default facilities
