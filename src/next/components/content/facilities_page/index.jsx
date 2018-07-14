import React from 'react'
import Grid from '@material-ui/core/Grid';
import DepartmentCard from '../../simple/department_cards'
class Facilities extends React.Component{
    render(){
        return(
            <div id='facility-page'>
                <div id='facility-page-title'>
                    Facilities
                </div>
                <div id='facility-page-content'>
                    <Grid container spacing={32} justify='center' id='row'>
                        <Grid item xs={6} sm={3} >
                            <DepartmentCard departmentName='Chemistry Lab'
                              image='/static/icons/chemistry.png'
                              departmentURL='/chemistry'
                              departmentDescription='The description comes here'/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <DepartmentCard departmentName='Physics Lab'
                              image='/static/icons/physics.png'
                              departmentURL='/physics'
                              departmentDescription='The description comes here'/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <DepartmentCard departmentName='CCF'
                              image='/static/icons/ccf.png'
                              departmentURL='/ccf'
                              departmentDescription='The description comes here'/>
                        </Grid>
                     </Grid>

                </div>
                <style jsx>
                  {`
                    #facility-page-title {
							        grid-row : 1/2;
							        height : 100%;
							        padding-top : 50px;
							        text-align : center;
							        background-color : #0089ff;
							        font-size : 50px;
							        color : white;
                      padding-bottom: 50px;
						        }

                   #facility-page-content {
                     padding-top:20px;
                     padding-bottom:20px;
                   }

                   #row {
                     padding-bottom:32px;
                   }
             `}
                </style>
            </div>
        )
    }
}
export default Facilities
