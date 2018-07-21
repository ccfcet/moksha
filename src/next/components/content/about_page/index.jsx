import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class AboutPageContent extends React.Component {
	render() {
		return(
			<div style={{background: '#0089ff', height: '100%'}}>
				<Container fluid={ true }>
					<Row>
						<Col>
							<div id="head">
								About Us
							</div>
						</Col>
					</Row>
					<Row>
						<Col>
							<div id="about-content">
								The College of Engineering, Trivandrum was established in 1939 as the first
								Engineering College in the then Travancore State. The first classes were started
								on 3rd July 1939 during the reign of the Travancore King, Sri Chithira Thirunal
								Balarama Varma and as the head of the then Travancore state he deserves his
								share of credit in the establishment of the college. Initially the College was
								housed in the former office and bungalow of the Chief Engineer (present PMG
									Office). Maj T.H. Mathewman, a Britisher was the first Principal. Started as a
									constituent College of Travancore University, the College had an initial intake
									of 21 students each for Degree and Diploma courses in Civil, Mechanical and
									Electrical branches. With the establishment of the Directorate of Technical
									Education in the late fifties, the College administration came under the control
									of the Government of Kerala. The College was shifted to the present sprawling
									125 acres in 1980.
								</div>
							</Col>
						</Row>
						<Row style={{background: '#40acf9', color: '#fafafa', fontSize: '1.3em', fontFamily: '\'Open Sans\',sans-serif', fontWeight: '300'}}>
							<Col>
								<div class="inner-column" style={{paddingBottom: '25px'}}>
									<h2 style={{fontWeight: '300', paddingTop: '25px', paddingBottom: '10px'}}>Mission</h2>
									To facilitate Quality Engineering Education to Equip and Enrich
									Young Men and Women to Meet Global Challenges in Development,
									Innovation and Application of Technology in the Service of Humanity
								</div>
							</Col>
							<Col>
								<div class="inner-column" style={{paddingBottom: '25px'}}>
									<h2 style={{fontWeight: '300', paddingTop: '25px', paddingBottom: '10px'}}>Vision</h2>
									National Level Excellence and International Visibility in Every
									facet of Engineering Education.
								</div>
							</Col>
						</Row>
					</Container>
					<style jsx>
						{`
							@import url('https://fonts.googleapis.com/css?family=Roboto');

							#about-page-head {
								width : 100%;
								align : center;
							}

							#head {
								font-family: 'Open Sans',sans-serif;
								font-weight: 300;
								height : 100%;
								padding-top : 50px;
								padding-bottom : 50px;
								text-align : center;
								background-color : #0089ff;
								font-size : 2em;
								color : white;
							}

							#about-content {
								font-family: 'Open Sans',sans-serif;
								font-weight: 300;
								font-size : 1.3em;
								background-color : #0089ff;
								color : white;
								padding-bottom: 100px;
							}
							`}
						</style>
					</div>
				)
			}
		}

		export default AboutPageContent
