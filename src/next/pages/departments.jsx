import React from 'react'
import DepartmentCard from '../components/simple/department_cards'
import MainLayout from '../components/derived/main_layout'
import {withStyles} from '@material-ui/core/styles';

class department extends React.Component{
   render(){ 
    return(
        <MainLayout>
            <DepartmentCard departmentName='Computer Science' image="../../icons/computer.png" departmentDescription='Since 1995'/>
        </MainLayout>
    )
    }
}

export default department