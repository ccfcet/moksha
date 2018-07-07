import React from 'react'

class ContentInnerContainer extends React.Component {
	render() {
		return(
			<div id="content-inner-container">

				<div id="inner-container">

					<div id="about-container">
						<div id="about">
							About
						</div>
					</div>

					<div id="content-container">
            <div id="about-navigation">
              <ul id="top-navigation">
                <li><a href="#home">Item1</a></li>
                <li><a href="#news">Item2</a></li>
                <li><a href="#about">Item3</a></li>
                <li><a href="#home">Item4</a></li>
                <li><a href="#news">Item5</a></li>
              </ul>
            </div>

            <div id="about-content">
              The College of Engineering, Trivandrum was established in 1939 as
              the first Engineering College in the then Travancore State. The
              first classes were started on 3rd July 1939 during the reign of
              the Travancore King, Sri Chithira Thirunal Balarama Varma and as
              the head of the then Travancore state he deserves his share of
              credit in the establishment of the college. Initially the College
              was housed in the former office and bungalow of the Chief Engineer
              (present PMG Office). Maj T.H. Mathewman, a Britisher was the
              first Principal. Started as a constituent College of Travancore
              University, the College had an initial intake of 21 students each
              for Degree and Diploma courses in Civil, Mechanical and Electrical
              branches. With the establishment of the Directorate of Technical
              Education in the late fifties, the College administration came
              under the control of the Government of Kerala. The College was
              shifted to the present sprawling 125 acres in 1980.
            </div>
					</div>
				</div>

				<style jsx>
				{`

					#inner-container {
						height : 100%;
						display: grid;
						grid-template-rows: 3fr 7fr;
					}

					#about-container{
						grid-row : 1/2;
            text-align : center;
            vertical-align: middle;
            height : 100%;
            display : grid;
            grid-template-rows: .5fr 1.61803398875fr .5fr;
					}

          #about  {
            grid-row : 2/3;
            font-size : 5em;
          }

					#content-container{
						grid-row : 2/3;
					}

					@import url('https://fonts.googleapis.com/css?family=Lato');

          #about-navigation {
           margin:0 auto;
           margin-top:0px;
           text-align:center;
          }

          #top-navigation {
           padding-left:10px;
           padding-right:10px;
          }

          #top-navigation li {
            display:inline;
            list-style-type:none;
            margin : 2;
            padding-left:20px;
            padding-right:20px;
          }

          #top-navigation li a{
            color : #5d5d5d;
            font-size : 1.2em;
            text-decoration : none;
          }

          #about-content {
            margin-top : 4vh;
            margin-left : 5vw;
            margin-right : 5vw;
            font-size : 1.1em;
          }
					`}
				</style>


			</div>
	);
	}
}

export default ContentInnerContainer
