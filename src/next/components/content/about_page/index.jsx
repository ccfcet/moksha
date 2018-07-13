import React from 'react';
import About from '../../simple/about_content';

class AboutPageContent extends React.Component {
	render() {
		return(
			<div id="about-page-content">
				<div id="head">
					<h1>College Of Engineering, Trivandrum</h1>
					<h3> Our Story</h3>
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

				<style jsx>
					{`
						#about-page-content {
							height : 100%;
							display : grid;
							grid-template-rows : 1fr 1.61803398875fr;
							vertical-align : center;
						}

						#head {
							grid-row : 1/2;
							text-align : center;
							background-color : #a6bbcc;
						}

						#about-content {
							grid-row : 2/3;
						}

					`}
				</style>
			</div>
		)
	}
}

export default AboutPageContent
