import React from 'react'
import Academics from '../components/content/academic_page'
import MainLayout from '../components/derived/main_layout'
// import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

class academic extends React.Component{
   render(){
    return(
        <MainLayout>
            <Academics />
        </MainLayout>
    )
    }
}

export default academic
