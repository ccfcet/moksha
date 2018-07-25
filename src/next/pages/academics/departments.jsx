import React from 'react'
import Department from '../../components/content/department_page'
import MainLayout from '../../components/derived/main_layout'
// import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

class department extends React.Component{
   render(){
    return(
        <MainLayout>
            <Department />
        </MainLayout>
    )
    }
}

export default department
