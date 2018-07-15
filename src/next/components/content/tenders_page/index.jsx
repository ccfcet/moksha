import React from 'react';
import TendersOuterPaper from '../../simple/list_with_links';

class HomePageContent extends React.Component {
	render() {
		return(
			<div id="home-page-content">
				{<TendersOuterPaper />}
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
