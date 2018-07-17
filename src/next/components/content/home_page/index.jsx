import React from 'react';
import ReactAnimatedSlider from '../../simple/react_animated_slider';

class HomePageContent extends React.Component {
	render() {
		return(
			<div id="home-page-content">
				<ReactAnimatedSlider />
				<style jsx>
					{`
						#home-page-content {
							height: 100%;
						}
					`}
				</style>
			</div>
		)
	}
}

export default HomePageContent
