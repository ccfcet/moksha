import React from 'react'
import Grid from '@material-ui/core/Grid';
import DepartmentCard from '../../simple/department_cards'
class departmentPage extends React.Component{
    render(){
        return(
            <div id='department-page'>
                <div id='department-page-title'>
                    Departments
                </div>
                <div id='department-page-content'>
                    <Grid container spacing={32} justify='center' id='row'>
                        <Grid item xs={6} sm={3} >
                            <DepartmentCard departmentName='Mechanical Engineering' image='/static/icons/mechanical.png' departmentURL='/mechanical'/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <DepartmentCard departmentName='Civil Engineering' image='/static/icons/civil.png' departmentURL='/civil'/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <DepartmentCard departmentName='Electrical Engineering' image='/static/icons/electrical.png' departmentURL='/electrical'/>
                        </Grid>
                     </Grid>
                     <Grid container spacing={32} justify='center' id='row'>
                        <Grid item xs={6} sm={3}>
                            <DepartmentCard departmentName='Computer Science ' image='/static/icons/computer.png' departmentURL='/computer'/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <DepartmentCard departmentName='Electronics Engineering' image='/static/icons/electronics.png' departmentURL='/electronics'/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <DepartmentCard departmentName='Architecture' image='/static/icons/architecture.png' departmentURL='/architecture'/>
                        </Grid>
                    </Grid>
                     <Grid container spacing={32} justify='center' id='row'>
                        <Grid item xs={6} sm={3}>
                            <DepartmentCard departmentName='MCA' image='/static/icons/mca.png' departmentURL='/mca'/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <DepartmentCard departmentName='Business' image='/static/icons/business.png' departmentURL='/business'/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <DepartmentCard departmentName='Physical Education' image='/static/icons/physical.png' departmentURL='/physical'/>
                        </Grid>
                    </Grid>
                </div>    
            <style jsx>
             {`   #department-page-title {
							grid-row : 1/2;
							height : 100%;
							padding-top : 50px;
							text-align : center;
							background-color : #0000e8;
							font-size : 50px;
							color : white;
                            padding-bottom: 50px;
						}
                   #department-page-content{
                       padding-top:20px;
                       padding-bottom:20px;
                   }     
                   #row{
                       padding-bottom:32px;
                   }
             `}
            </style>
            </div>
        )
    }



}

export default departmentPage

