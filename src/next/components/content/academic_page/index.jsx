import React from 'react'
import Grid from '@material-ui/core/Grid';
import DepartmentCard from '../../simple/department_cards'
class departmentPage extends React.Component{
    render(){
        return(
            <div id='department-page'>
              <div id='department-page-title'>
                    Academics
              </div>
              <div id='department-page-content'>
                <Grid container spacing={32} justify='center' id='row'>
                  <Grid item xs={6} sm={3} >
                    <DepartmentCard departmentName='Undergraduate Studies' image='/static/icons/ug.png' departmentURL='/ug'/>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <DepartmentCard departmentName='Postgraduate Studies' image='/static/icons/pg.png' departmentURL='/pg'/>
                  </Grid>
                </Grid>
              </div>

              <style jsx>
                {`
                  #department-page-title {
                    grid-row : 1/2;
                    height : 100%;
                    padding-top : 50px;
                    text-align : center;
                    background-color : #0089ff;
                    font-size : 50px;
                    color : white;
                    padding-bottom: 50px;
                  }

                  #department-page-content {
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
export default departmentPage
