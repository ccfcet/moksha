import React from 'react'
// import Grid from '@material-ui/core/Grid';
import DepartmentCard from '../../simple/department_cards'
import {Container,Row,Col} from 'reactstrap'
class departmentPage extends React.Component{
    render(){
        return(
            <div style={{height:'100%'}}>
              <Container fluid={true}>
                <Row>
                  <Col>
                    <div id='department-page-title'>
                      Academics
                    </div>
                  </Col>  
                </Row>
                  <div id='department-page-content'>
                  <Row>
                    
                
                      <Col sm={{ size: 'auto', offset: 2}} >
                        
                            <DepartmentCard departmentName='Undergraduate Studies' image='/static/icons/ug.png' departmentURL='/ug'/>
                        
                      </Col>
                      <Col sm={{ size: 'auto', offset: 2 }}>    
                        
                            <DepartmentCard departmentName='Postgraduate Studies' image='/static/icons/pg.png' departmentURL='/pg'/>
                        
                      </Col>    
                
              </Row>    

                </div>

              <style jsx>
                {`
                  #department-page-title {
                    height : 100%;
                    padding-top : 50px;
                    text-align : center;
                    background-color : #0000e8;
                    font-size : 50px;
                    color : white;
                    padding-bottom: 50px;
                    width:100%;
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
              </Container>
            </div>
       )
     }
}
export default departmentPage
