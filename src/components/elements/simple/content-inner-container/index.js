import React from 'react'

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider.css'

const content = [
	{
		title: 'Driving Innovation',
		description:
			'The International Conference on Control, Communication and Computing (IC4 2018) brings together researchers, practising engineers, faculty and students to drive innovation through knowledge sharing.',
		button: 'Discover',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: 'Erich Behrens',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	}
];

class ContentInnerContainer extends React.Component {
	render() {
		return <div id="content-inner-container">
			<Slider infinite="true" autoplay="4000" previousButton={null} nextButton={null}>
				{content.map((article, index) => <div key={index} className="slider-content"
					style={{
						// background: `url('${article.image}') no-repeat center center`
						background: `blue`
					}}>
					<div className="inner">
						<h1>{article.title}</h1>
						<p>{article.description}</p>
						<button>{article.button}</button>
					</div>
				</div>)}
			</Slider>
			{/* Content Container */}
		</div>
	}
}

export default ContentInnerContainer
