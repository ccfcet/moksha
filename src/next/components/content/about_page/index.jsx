import React from 'react';

class AboutPageContent extends React.Component {
	render() {
		return(
			<div id="about-page-content">
				<div id="head">
					About Us
				</div>
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
				<div id="inner-columns">
					<div id="inner-column1">
						<h2>Mission</h2>
						To facilitate Quality Engineering Education to Equip and Enrich
						Young Men and Women to Meet Global Challenges in Development,
						Innovation and Application of Technology in the Service of Humanity
					</div>
					<div id="inner-column2">
						<h2>Vision</h2>
						National Level Excellence and International Visibility in Every
						facet of Engineering Education.
					</div>
				</div>

				<style jsx>
					{`
						@import url('https://fonts.googleapis.com/css?family=Roboto');

						#about-page-content {
							height : 100%;
							display : grid;
							grid-template-rows : .5fr 1.61803398875fr 1fr;
						}

						#head {
							grid-row : 1/2;
							height : 100%;
							padding-top : 50px;
							text-align : center;
							background-color : #0089ff;
							font-size : 2em;
							color : white;
						}

						#about-content {
							grid-row : 2/3;
							padding : 0px 50px;
							font-family: 'Roboto', sans-serif;
							font-size : 1.5em;
							background-color : #0089ff;
							color : white;
						}

						#inner-columns {
							grid-row : 3/4;
							height : 100%;
							display : grid;
							grid-template-columns : 50% 50%;
							font-size : 1.4em;

						}

						#inner-column1 {
							background-color : #40acf9;
							color : white;
							padding : 0px 50px;
						}

						#inner-column2 {
							background-color : #00a1ff;
							color : white;
							padding : 0px 50px;
						}

					`}
				</style>
			</div>
		)
	}
}

export default AboutPageContent
