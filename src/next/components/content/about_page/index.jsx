import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class AboutPageContent extends React.Component {
	render() {
		return(
			<div style={{height: '100%', color:'#5d5d5d'}}>
				<h1>
					About CET
				</h1>
				<h3 style={{paddingBottom:'1%'}}>
					A place for learning, discovery, innovation, expression and discourse
				</h3>
				<Container fluid={true}>
					<Row>

						<Col sm="8" style={{ borderRight:' 3px solid blue',margin : 10, background :'white'}}>
							<p id="about-content">
								<h3>The Beginning</h3>
									{this.props.aboutData.about}
						</p>
						</Col>

						<Col style={{paddingTop:30}}>
							<div style={{paddingTop:30, paddingBottom :30}}>
								<h3>Mission</h3>
								<blockquote style={{ background:'url("../../../static/images/oq.png") top left no-repeat', paddingLeft:55}}>
									<p style={{paddingRight:35, lineHeight:2, background:'url("../../../static/images/cq.png") bottom right no-repeat', paddingBottom:15, fontStyle:'italic', fontSize:22}}>
										National Level Excellence and International Visibility in every facet of Engineering Education.
									</p>
								</blockquote>
							</div>
							<div id="mis-div">
								<h3>Vision</h3>
								<blockquote style={{background:'url("../../../static/images/oq.png") top left no-repeat', paddingLeft:55}}>
									<p style={{paddingRight:35, lineHeight:2, background:'url("../../../static/images/cq.png") bottom right no-repeat', paddingBottom:15, fontStyle:'italic', fontSize:22}}>
										To facilitate Quality Engineering Education to Equip and Enrich Young Men and Women to Meet Global challenges in Development, Innovation and Application of Technology in the service of Humanity.
									</p>
								</blockquote>
							</div>
						</Col>
					</Row>

				</Container>
					<style jsx>
						{`
							@import url('https://fonts.googleapis.com/css?family=Roboto');
							@import url('https://fonts.googleapis.com/css?family=Lato:300');

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
			 					padding-left : 20px;
								font-size : 1.6em;
								padding-top : 8%;
								padding-right : 10px;
								font-weight : 300px;
								font-family : 'Lato', sans-serif;
							}

							h1 {
								text-align : center;
								font-family : 'Open Sans',sans-serif;
								@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600i');
								padding-top : 1%;
								padding-bottom : 1%;

							}

							h3 {
								text-align : center;
								font-family : 'Open Sans',sans-serif;
								font-weight : 500;
							}

							#mis-div {
								border-top : 3px solid blue;
									padding-top : 20px;
									padding-bottom : 20px;
							}

							@import url('https://fonts.googleapis.com/css?family=Lato');


							`}
						</style>
					</div>
				)
			}
		}

		export default AboutPageContent
