import React from 'react'
// import Grid from '@material-ui/core/Grid';
import DepartmentCard from '../../simple/department_cards'
import {Container,Row,Col} from 'reactstrap'
import { Button } from 'reactstrap';

class departmentPage extends React.Component{
    render(){
        return(
            <div style={{height:'100%'}}>
              <Container fluid={true}>
                <Row >
                  <Col sm="6">
                    <div id="ug-img">
                      <img src='../../../static/images/12.jpg'/><br/>

                    </div>
                  </Col>

                  <Col sm="6"  style={{'background-color' :'#5265ad'}}>
                    <div id="ug-content">
                      <h2>Undergraduate Courses</h2>
<p>An undergraduate degree (also called first degree, bachelor's degree or simply
degree) is a colloquial term for an academic degree taken by a person who has
completed undergraduate courses. It is usually offered at an institution of
higher education, such as a university.</p><br/>
<p><Button color="danger">Learn More</Button>{' '}</p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col sm="6" style={{'background-color' :'#5265ad'}}>
                    <div id="pg-content">
                    <h2>Postgraduate Courses</h2>
<p>ostgraduate education, or graduate education in North America, involves
learning and studying for academic or professional degrees, academic or
professional certificates, academic or professional diplomas, or other
qualifications for which a first or bachelor's degree generally is required,
and it is normally considered to be part of higher education.</p>
<br/>
<p><Button color="danger">Learn More</Button>{' '}</p>
                    </div>
                  </Col>
                  <Col sm="6">
                    <div id="pg-img">
                      <img src='../../../static/images/13.jpg'/><br/>
                    </div>
                  </Col>
                </Row>

              <style jsx>
                {`
                  #ug-img {
                    text-align : center;
                    // height : 40vh;
                  }
                  #ug-content {
                    padding-left : 20px;
                    padding-right : 20px;
                    padding-top : 40px;
                    color : white;
                    font-size : 1.3em;
                  }

                  #pg-img {
                    text-align : center;
                  }

                  #pg-content {
                    color : white;
                    font-size : 1.3em;
                    padding-left : 20px;
                    padding-right : 20px;
                    padding-top : 40px;
                  }

                  img {
                    width: 100%;
                    height : 40vh;
                    padding : 20px;
                  }

                `}
              </style>
              </Container>
            </div>
       )
     }
}
export default departmentPage
