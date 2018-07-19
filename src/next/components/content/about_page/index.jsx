import React from 'react';

class AboutPageContent extends React.Component {
	render() {
		return(
			<div>
			<div id="about-page-head">
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
			</div>

			<div id="about-page-whycet">
				<div id="about-page-whycet-header">
					Why CET
				</div>
				<div id="about-page-whycet-icons">
					<div class="about-page-whycet-icon-items" id="item1">
						Demo
					</div>
					<div class="about-page-whycet-icon-items" id="item2">
						Demo
					</div>
					<div class="about-page-whycet-icon-items" id="item3">
						Demo
					</div>
					<div class="about-page-whycet-icon-items" id="item4">
						Demo
					</div>

				</div>

			</div>

				<style jsx>
					{`
						@import url('https://fonts.googleapis.com/css?family=Roboto');

						#about-page-head {
							height : 100%;
							display : grid;
							grid-template-rows : .5fr 1.61803398875fr 1fr;
							-webkit-box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);
							-moz-box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);
							box-shadow: 4px 4px 5px 0px rgba(0,0,0,0.75);
							width : 98%;
							align : center;
							margin : 20px auto 50px auto ;
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
							height : 280px;
						}

						#inner-column2 {
							background-color : #00a1ff;
							color : white;
							padding : 0px 50px;
							height : 280px;
						}


						#about-page-whycet {
							diplay : grid;
							grid-template-rows : 1000px 250px;
						}

						#about-page-whycet-header {
							height : 100%;
							grid-row : 1/2;
							font-size : 2.5em;
							text-align : center;
							background : url('../../../static/images/cet.jpg');
							background-size: auto;
							margin : 50px;
						}

						#about-page-whycet-icons {
							grid-row : 2/3;
							display : grid;
							grid-template-columns : 4% 20% 4% 20% 4% 20% 4% 20% 4%;
						}

						#item1 {
							grid-column : 2/3;
							background: rgba(0,121,235,0.99);
							background: -moz-linear-gradient(left, rgba(0,121,235,0.99) 0%, rgba(0,99,207,0.99) 73%, rgba(0,93,199,1) 93%, rgba(0,93,199,1) 100%);
							background: -webkit-gradient(left top, right top, color-stop(0%, rgba(0,121,235,0.99)), color-stop(73%, rgba(0,99,207,0.99)), color-stop(93%, rgba(0,93,199,1)), color-stop(100%, rgba(0,93,199,1)));
							background: -webkit-linear-gradient(left, rgba(0,121,235,0.99) 0%, rgba(0,99,207,0.99) 73%, rgba(0,93,199,1) 93%, rgba(0,93,199,1) 100%);
							background: -o-linear-gradient(left, rgba(0,121,235,0.99) 0%, rgba(0,99,207,0.99) 73%, rgba(0,93,199,1) 93%, rgba(0,93,199,1) 100%);
							background: -ms-linear-gradient(left, rgba(0,121,235,0.99) 0%, rgba(0,99,207,0.99) 73%, rgba(0,93,199,1) 93%, rgba(0,93,199,1) 100%);
							background: linear-gradient(to right, rgba(0,121,235,0.99) 0%, rgba(0,99,207,0.99) 73%, rgba(0,93,199,1) 93%, rgba(0,93,199,1) 100%);
							filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0079eb', endColorstr='#005dc7', GradientType=1 );
						}
						#item2 {
							grid-column : 4/5;
							background: rgba(0,121,235,0.99);
							background: -moz-linear-gradient(left, rgba(0,121,235,0.99) 0%, rgba(0,99,207,0.99) 73%, rgba(0,93,199,1) 93%, rgba(0,93,199,1) 100%);
							background: -webkit-gradient(left top, right top, color-stop(0%, rgba(0,121,235,0.99)), color-stop(73%, rgba(0,99,207,0.99)), color-stop(93%, rgba(0,93,199,1)), color-stop(100%, rgba(0,93,199,1)));
							background: -webkit-linear-gradient(left, rgba(0,121,235,0.99) 0%, rgba(0,99,207,0.99) 73%, rgba(0,93,199,1) 93%, rgba(0,93,199,1) 100%);
							background: -o-linear-gradient(left, rgba(0,121,235,0.99) 0%, rgba(0,99,207,0.99) 73%, rgba(0,93,199,1) 93%, rgba(0,93,199,1) 100%);
							background: -ms-linear-gradient(left, rgba(0,121,235,0.99) 0%, rgba(0,99,207,0.99) 73%, rgba(0,93,199,1) 93%, rgba(0,93,199,1) 100%);
							background: linear-gradient(to right, rgba(0,121,235,0.99) 0%, rgba(0,99,207,0.99) 73%, rgba(0,93,199,1) 93%, rgba(0,93,199,1) 100%);
							filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0079eb', endColorstr='#005dc7', GradientType=1 );
						}
						#item3 {
							grid-column : 6/7;
							background: rgba(0,121,235,0.99);
							background: -moz-linear-gradient(left, rgba(0,121,235,0.99) 0%, rgba(0,99,207,0.99) 73%, rgba(0,93,199,1) 93%, rgba(0,93,199,1) 100%);
							background: -webkit-gradient(left top, right top, color-stop(0%, rgba(0,121,235,0.99)), color-stop(73%, rgba(0,99,207,0.99)), color-stop(93%, rgba(0,93,199,1)), color-stop(100%, rgba(0,93,199,1)));
							background: -webkit-linear-gradient(left, rgba(0,121,235,0.99) 0%, rgba(0,99,207,0.99) 73%, rgba(0,93,199,1) 93%, rgba(0,93,199,1) 100%);
							background: -o-linear-gradient(left, rgba(0,121,235,0.99) 0%, rgba(0,99,207,0.99) 73%, rgba(0,93,199,1) 93%, rgba(0,93,199,1) 100%);
							background: -ms-linear-gradient(left, rgba(0,121,235,0.99) 0%, rgba(0,99,207,0.99) 73%, rgba(0,93,199,1) 93%, rgba(0,93,199,1) 100%);
							background: linear-gradient(to right, rgba(0,121,235,0.99) 0%, rgba(0,99,207,0.99) 73%, rgba(0,93,199,1) 93%, rgba(0,93,199,1) 100%);
							filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0079eb', endColorstr='#005dc7', GradientType=1 );
						}

						#item4 {
							grid-column : 8/9;
							background: rgba(0,121,235,0.99);
							background: -moz-linear-gradient(left, rgba(0,121,235,0.99) 0%, rgba(0,99,207,0.99) 73%, rgba(0,93,199,1) 93%, rgba(0,93,199,1) 100%);
							background: -webkit-gradient(left top, right top, color-stop(0%, rgba(0,121,235,0.99)), color-stop(73%, rgba(0,99,207,0.99)), color-stop(93%, rgba(0,93,199,1)), color-stop(100%, rgba(0,93,199,1)));
							background: -webkit-linear-gradient(left, rgba(0,121,235,0.99) 0%, rgba(0,99,207,0.99) 73%, rgba(0,93,199,1) 93%, rgba(0,93,199,1) 100%);
							background: -o-linear-gradient(left, rgba(0,121,235,0.99) 0%, rgba(0,99,207,0.99) 73%, rgba(0,93,199,1) 93%, rgba(0,93,199,1) 100%);
							background: -ms-linear-gradient(left, rgba(0,121,235,0.99) 0%, rgba(0,99,207,0.99) 73%, rgba(0,93,199,1) 93%, rgba(0,93,199,1) 100%);
							background: linear-gradient(to right, rgba(0,121,235,0.99) 0%, rgba(0,99,207,0.99) 73%, rgba(0,93,199,1) 93%, rgba(0,93,199,1) 100%);
							filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0079eb', endColorstr='#005dc7', GradientType=1 );
						}

						.about-page-whycet-icon-items {
							-webkit-box-shadow: 7px -7px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 7px -7px 5px 0px rgba(0,0,0,0.75);
box-shadow: 7px -7px 5px 0px rgba(0,0,0,0.75);
						}



					`}
				</style>
			</div>
		)
	}
}

export default AboutPageContent
